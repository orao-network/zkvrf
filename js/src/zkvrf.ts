import {
    BytesLike,
    ContractTransaction,
    providers,
    Signer,
    utils,
} from "ethers";
import {
    MockERC20,
    MockERC20__factory,
    OraoVrf,
    OraoVrf__factory,
} from "../../../contract/types";
import {
    IOraoZKVrfClient,
    SendContractMethod,
    TransactionOptions,
} from "./types";
import { getSupportedEvmChainId } from "./networks";
import { sendTxnWithOptions } from "./sendTxnWithOptions";

/**
 * Creates and returns a OraoVrf instance
 * @param address - The contract address of the OraoVrf
 * @param signerOrProvider - The signer or provider used to interact with the contract
 * @returns OraoVrf instance
 *
 *
 * const oraoVrf = getOraoVrf('0xOraoVrfSolContractAddress', mySignerOrProvider);
 */
export function getOraoVrf(
    address: string,
    signerOrProvider: Signer | providers.Provider
): OraoVrf {
    return OraoVrf__factory.connect(address, signerOrProvider);
}

/**
 * Creates and returns ORAO token instance
 * @param address - The contract address of the ORAO token
 * @param signerOrProvider - The signer or provider used to interact with the contract
 * @returns ERC20 instance
 *
 *
 * const oraoVrf = getOrao('0xOraoSolContractAddress', mySignerOrProvider);
 */
export function getOrao(
    address: string,
    signerOrProvider: Signer | providers.Provider
): MockERC20 {
    return MockERC20__factory.connect(address, signerOrProvider);
}

/**
 * The OraoZKVrfClient class provides a high-level API to interact with the {@link OraoVrf} smart contracts on the EVM.
 *
 * This class provides methods to send transactions and more. It requires a `Signer` or `Provider` instance and the address of the OraoVrf contract to instantiate.
 *
 * ```typescript
 * // Instantiate OraoZKVrfClient
 * const signer = new ethers.Wallet(privateKey);
 * const oraoZKVrfClient = await OraoZKVrfClient.fromSigner(
 *   signer // Signer instance
 * );
 *
 * // Connect a new signer to OraoZKVrfClient
 * const newSigner = new ethers.Wallet(newPrivateKey);
 * const newOraoZKVrfClient = oraoZKVrfClient.connect(newSigner);
 *
 * // Send a request transaction to OraoVrf
 * const tx = await oraoZKVrfClient.request(SEED, option);
 *
 * ```
 */
export class OraoZKVrfClient implements IOraoZKVrfClient {
    constructor(
        // An instance of the {@link OraoVrf} contract.
        public readonly vrf: OraoVrf,
        // An instance of the Orao token contract.
        public readonly orao: MockERC20
    ) {}

    private _addressPromise: Promise<string> | undefined = undefined;

    private _chainIdPromise: Promise<number> | undefined = undefined;

    public get chainId(): Promise<number> {
        if (this._chainIdPromise) {
            return this._chainIdPromise;
        }

        this._chainIdPromise = this.vrf.provider
            .getNetwork()
            .then(({ chainId }) => chainId)
            .catch((err) => {
                this._chainIdPromise = undefined;
                throw err;
            });
        return this._chainIdPromise;
    }

    /**
     * A getter that returns a promise which resolves to the address of the signer.
     * If the address has already been fetched, it will be returned from the cache.
     * @returns Promise<string>
     *
     * ```typescript
     * const signerAddress = await oraoZKVrfClient.address;
     * ```
     */
    get address() {
        if (this._addressPromise) {
            return this._addressPromise;
        }

        this._addressPromise = this.vrf.signer.getAddress().catch((err) => {
            this._addressPromise = undefined;
            throw err;
        });
        return this._addressPromise;
    }

    /**
     * Static method to create and return a OraoZKVrfClient instance.
     * @param signer - The signer used to interact with the contracts
     * @throws if chainId is not supported by OraoVrf
     * @returns Promise<OraoZKVrfClient>
     *
     * ```typescript
     * const oraoZKVrfClient = await OraoZKVrfClient.fromSigner(mySigner);
     * ```
     */
    public static async fromSigner(signer: Signer): Promise<OraoZKVrfClient> {
        const { chainId } = await signer.provider!.getNetwork();
        const config = getSupportedEvmChainId(chainId);
        const vrf = getOraoVrf(config.address, signer);
        const orao = getOrao(config.oraoAddress, signer);
        return new OraoZKVrfClient(vrf, orao);
    }

    /**
     * Returns a new instance of the OraoZKVrfClient with a new signer.
     * @param signer - The new signer
     * @returns OraoZKVrfClient
     *
     * ```typescript
     * const newOraoZKVrfClient = oraoZKVrfClient.connect(newSigner);
     * ```
     */
    public connect(signer: Signer): OraoZKVrfClient {
        return new OraoZKVrfClient(
            this.vrf.connect(signer),
            this.orao.connect(signer)
        );
    }

    /**
     * Sends a transaction to the OraoVrf.sol contract
     * @param methodName - The name of the contract method to be called
     * @param args - The arguments to pass to the contract method
     * @param options - The options to pass to the contract method
     * @returns Promise<ContractTransaction>
     *
     * ```typescript
     * const transaction = await oraoZKVrfClient.sendTxn('methodName', args, options);
     * ```
     */
    sendTxn: SendContractMethod<OraoVrf> = async (
        methodName,
        args,
        options
    ) => {
        return await sendTxnWithOptions(this.vrf, methodName, args, options);
    };

    request = async (
        seed: BytesLike,
        options?: TransactionOptions
    ): Promise<ContractTransaction> => {
        const signerAddress = await this.vrf.signer.getAddress();
        const config = await this.vrf.getConfig();
        const subscription = await this.vrf.getSubscription(signerAddress);
        if (config.oraoFee.gt(subscription.orao)) {
            const oraoBalance = await this.orao.balanceOf(signerAddress);
            const allowance = await this.orao.allowance(
                signerAddress,
                this.vrf.address
            );
            if (allowance.lt(oraoBalance))
                await this.orao.approve(this.vrf.address, oraoBalance);
            if (oraoBalance.lt(config.oraoFee.sub(subscription.orao))) {
                options = { ...options, value: config.baseFee };
            }
        }

        return await this.sendTxn("request", [seed, 0], options);
    };

    waitFulfilled = async (seed: BytesLike): Promise<BytesLike> => {
        return new Promise(async (resolve, reject) => {
            while (true) {
                try {
                    const randomness = await this.getRandomness(seed);
                    if (randomness != "0x") {
                        resolve(randomness);
                        break;
                    }
                } catch (e) {
                    reject(e);
                    break;
                }
                await new Promise((f) => setTimeout(f, 1000));
            }
        });
    };

    getRandomness = async (seed: BytesLike): Promise<string> => {
        const request = await this.vrf.getRequest(seed);
        return utils.hexConcat([request.part1, request.part2]);
    };
}

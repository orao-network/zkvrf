import {
    BigNumber,
    BytesLike,
    ContractTransaction,
    providers,
    Signer,
    utils,
} from "ethers";
import {
    MockERC20,
    MockERC20__factory,
    OraoVRF,
    OraoVRF__factory,
} from "./contract-types";
import {
    IOraoVRFClient,
    SendContractMethod,
    TransactionOptions,
} from "./types";
import { getSupportedEvmChainId } from "./networks";
import { sendTxnWithOptions } from "./sendTxnWithOptions";

/**
 * Creates and returns a OraoVRF.sol instance
 * @param address - The contract address of the OraoVRF.sol
 * @param signerOrProvider - The signer or provider used to interact with the contract
 * @returns OraoVRF.sol instance
 *
 *
 * const oraoVRF = getOraoVRF('0xOraoVRFSolContractAddress', mySignerOrProvider);
 */
export function getOraoVRF(
    address: string,
    signerOrProvider: Signer | providers.Provider
): OraoVRF {
    return OraoVRF__factory.connect(address, signerOrProvider);
}

/**
 * Creates and returns ORAO token instance
 * @param address - The contract address of the ORAO token
 * @param signerOrProvider - The signer or provider used to interact with the contract
 * @returns ERC20 instance
 *
 *
 * const oraoVRF = getOrao('0xOraoSolContractAddress', mySignerOrProvider);
 */
export function getOrao(
    address: string,
    signerOrProvider: Signer | providers.Provider
): MockERC20 {
    return MockERC20__factory.connect(address, signerOrProvider);
}

/**
 * The OraoVRFClient class provides a high-level API to interact with the {@link OraoVRF} smart contracts on the EVM.
 *
 * This class provides methods to send transactions and more. It requires a `Signer` or `Provider` instance and the address of the OraoVRF.sol contract to instantiate.
 *
 * ```typescript
 * // Instantiate OraoVRFClient
 * const signer = new ethers.Wallet(privateKey);
 * const oraoVRFClient = await OraoVRFClient.fromSigner(
 *   signer // Signer instance
 * );
 *
 * // Connect a new signer to OraoVRFClient
 * const newSigner = new ethers.Wallet(newPrivateKey);
 * const newOraoVRFClient = oraoVRFClient.connect(newSigner);
 *
 * // Send a request transaction to OraoVRF.sol
 * const tx = await oraoVRFClient.request(SEED, option);
 *
 * ```
 */
export class OraoVRFClient implements IOraoVRFClient {
    constructor(
        // An instance of the {@link OraoVRF.sol} contract.
        public readonly vrf: OraoVRF,
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
     * const signerAddress = await oraoVRFClient.address;
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
     * Static method to create and return a OraoVRFClient instance.
     * @param signerOrProvider - The signer or provider used to interact with the contracts
     * @throws if chainId is not supported by OraoVRF.sol
     * @returns Promise<OraoVRFClient>
     *
     * ```typescript
     * const oraoVRFClient = await OraoVRFClient.create(mySigner);
     * ```
     */
    public static async create(
        signerOrProvider: Signer | providers.Provider
    ): Promise<OraoVRFClient> {
        let chainId: number;
        if (Signer.isSigner(signerOrProvider)) {
            if (!signerOrProvider.provider) {
                throw new Error("Signer must be connected to a provider");
            }
            chainId = await signerOrProvider.getChainId();
        } else {
            const network = await signerOrProvider.getNetwork();
            chainId = network.chainId;
        }
        const config = getSupportedEvmChainId(chainId);
        const vrf = getOraoVRF(config.address, signerOrProvider);
        const orao = getOrao(config.oraoAddress, signerOrProvider);
        return new OraoVRFClient(vrf, orao);
    }

    /**
     * Sends a transaction to the OraoVRF.sol contract
     * @param methodName - The name of the contract method to be called
     * @param args - The arguments to pass to the contract method
     * @param options - The options to pass to the contract method
     * @returns Promise<ContractTransaction>
     *
     * ```typescript
     * const transaction = await oraoVRFClient.sendTxn('methodName', args, options);
     * ```
     */
    sendTxn: SendContractMethod<OraoVRF> = async (
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
        options = {
            ...options,
            value: await this.calcTxValue(signerAddress),
        };

        return await this.sendTxn(
            "request",
            [seed, 0 /* no callback */],
            options
        );
    };

    calcTxValue = async (address: string): Promise<BigNumber> => {
        const config = await this.vrf.getConfig();
        const subscription = await this.vrf.getSubscription(address);

        // If there is insufficient fund in the subscription, then calculate VRF fee (base token) to send.
        if (
            config.oraoFee.gt(subscription.orao) &&
            config.baseFee.gt(subscription.base)
        ) {
            return config.baseFee.sub(subscription.base);
        } else return BigNumber.from(0);
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

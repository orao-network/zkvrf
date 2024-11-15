import { BigNumber, BytesLike, ContractTransaction, providers, Signer } from "ethers";
import { MockERC20, OraoVRF } from "./contract-types";
import { IOraoVRFClient, SendContractMethod, TransactionOptions } from "./types";
/**
 * Creates and returns a OraoVRF.sol instance
 * @param address - The contract address of the OraoVRF.sol
 * @param signerOrProvider - The signer or provider used to interact with the contract
 * @returns OraoVRF.sol instance
 *
 *
 * const oraoVRF = getOraoVRF('0xOraoVRFSolContractAddress', mySignerOrProvider);
 */
export declare function getOraoVRF(address: string, signerOrProvider: Signer | providers.Provider): OraoVRF;
/**
 * Creates and returns ORAO token instance
 * @param address - The contract address of the ORAO token
 * @param signerOrProvider - The signer or provider used to interact with the contract
 * @returns ERC20 instance
 *
 *
 * const oraoVRF = getOrao('0xOraoSolContractAddress', mySignerOrProvider);
 */
export declare function getOrao(address: string, signerOrProvider: Signer | providers.Provider): MockERC20;
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
export declare class OraoVRFClient implements IOraoVRFClient {
    readonly vrf: OraoVRF;
    readonly orao: MockERC20;
    constructor(vrf: OraoVRF, orao: MockERC20);
    private _addressPromise;
    private _chainIdPromise;
    get chainId(): Promise<number>;
    /**
     * A getter that returns a promise which resolves to the address of the signer.
     * If the address has already been fetched, it will be returned from the cache.
     * @returns Promise<string>
     *
     * ```typescript
     * const signerAddress = await oraoVRFClient.address;
     * ```
     */
    get address(): Promise<string>;
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
    static create(signerOrProvider: Signer | providers.Provider): Promise<OraoVRFClient>;
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
    sendTxn: SendContractMethod<OraoVRF>;
    request: (seed: BytesLike, options?: TransactionOptions) => Promise<ContractTransaction>;
    calcTxValue: (address: string) => Promise<BigNumber>;
    waitFulfilled: (seed: BytesLike) => Promise<BytesLike>;
    getRandomness: (seed: BytesLike) => Promise<string>;
}

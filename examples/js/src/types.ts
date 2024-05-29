import { MockERC20, OraoVRF } from "./contract-types";
import {
    BigNumber,
    Contract,
    ContractTransaction,
    PayableOverrides,
    type Signer,
} from "ethers";

/**
 * TransactionOptions is a type that allows the user to specify a subset of
 * PayableOverrides and includes optional properties for gasFactor, simulate and signer.
 *
 * ```typescript
 * {
 *   // an optional multiplier to modify the gasEstimation
 *   gasFactor: 1.1,
 *   // simulate the tx before sending
 *   simulate: true,
 *   // the new msg.sender for the tx
 *   signer: myNewSigner,
 *   // it also supports any fields from ethers PayableOverrides
 *   gasLimit: 3000000,
 *   gasPrice: 10000,
 *   maxFeePerGas: 10000,
 *   maxPriorityFeePerGas: 1000,
 *   nonce: 1337
 * }
 * ```
 */
export type TransactionOptions = Partial<PayableOverrides> & {
    // an optional multiplier to modify the gasEstimation
    gasFactor?: number;
    // simulate the tx before sending
    simulate?: boolean;
    // the msg.sender for the tx
    signer?: Signer;
};

/**
 * FunctionMethodNames is a utility type for mapping a contract's function names to their
 * respective function types. It includes only methods that return a Promise of ContractTransaction.
 */
export type FunctionMethodNames<T extends Contract> = {
    [K in keyof T["functions"]]: T["functions"][K] extends (
        ...args: Parameters<T["functions"][K]>
    ) => Promise<ContractTransaction>
        ? K
        : never;
}[keyof T["functions"]];

/**
 * EstimateGasMethodNames is a utility type for mapping a contract's function names to their
 * respective function types. It includes only methods that return a Promise of BigNumber.
 */
export type EstimateGasMethodNames<T extends Contract> = {
    [K in keyof T["estimateGas"]]: T["estimateGas"][K] extends (
        ...args: Parameters<T["estimateGas"][K]>
    ) => Promise<BigNumber>
        ? K
        : never;
}[keyof T["estimateGas"]];

/**
 * CallStaticMethodNames is a utility type for mapping a contract's function names to their
 * respective function types. It includes only methods that return the expected ReturnType.
 */
export type CallStaticMethodNames<T extends Contract> = {
    [K in keyof T["callStatic"]]: T["callStatic"][K] extends (
        ...args: Parameters<T["callStatic"][K]>
    ) => ReturnType<T["callStatic"][K]>
        ? K
        : never;
}[keyof T["callStatic"]];

/**
 * MethodNames is a utility type for extracting the common methods from FunctionMethodNames,
 * EstimateGasMethodNames, and CallStaticMethodNames.
 */
export type MethodNames<T extends Contract> = Extract<
    Extract<FunctionMethodNames<T>, EstimateGasMethodNames<T>>,
    CallStaticMethodNames<T>
>;

/**
 * SendTransactionMethod is a function type that takes a contract, method name, arguments,
 * and optional TransactionOptions to send a transaction.
 */
export type SendTransactionMethod = <
    T extends Contract,
    K extends MethodNames<T>
>(
    contract: T,
    methodName: K,
    args: Parameters<T[K]>,
    options: TransactionOptions | undefined
) => Promise<ContractTransaction>;

/**
 * SendContractMethod is a function type that sends a method transaction on a contract.
 */
export type SendContractMethod<T extends Contract> = (
    methodName: MethodNames<T>,
    args: Parameters<T[MethodNames<T>]>,
    options: TransactionOptions | undefined
) => Promise<ContractTransaction>;

export interface IOraoVRFClient {
    // An instance of the {@link OraoVRF.sol} contract.
    vrf: OraoVRF;
    // An instance of the Orao token contract.
    orao: MockERC20;

    /**
     * A getter that returns a promise which resolves to the address of the signer.
     * If the address has already been fetched, it will be returned from the cache.
     * @returns Promise<string>
     *
     * ```typescript
     * const signerAddress = await oraoVRFClient.address;
     * ```
     */
    address: Promise<string>;
    chainId: Promise<number>;
    /**
     * Returns a new instance of the OraoVRFClient with a new signer.
     * @param signer - The new signer
     * @returns OraoVRFClient
     *
     * ```typescript
     * const newOraoVRFClient = oraoVRFClient.connect(newSigner);
     * ```
     */
    connect(signer: Signer): IOraoVRFClient;

    /**
     * Sends a transaction to the OraoVRF.sol.sol contract
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
}

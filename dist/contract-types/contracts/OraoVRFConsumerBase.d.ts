import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
export interface OraoVRFConsumerBaseInterface extends utils.Interface {
    functions: {
        "calcGasUsed()": FunctionFragment;
        "calcTxValue(uint256)": FunctionFragment;
        "callbackGasLimit()": FunctionFragment;
        "cancelSubscription(address)": FunctionFragment;
        "fundSubscription(uint256)": FunctionFragment;
        "getSubscription()": FunctionFragment;
        "pendingRequestExists()": FunctionFragment;
        "rawFulfillRandomness(bytes32,bytes32,bytes32)": FunctionFragment;
        "request(bytes32)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "calcGasUsed" | "calcTxValue" | "callbackGasLimit" | "cancelSubscription" | "fundSubscription" | "getSubscription" | "pendingRequestExists" | "rawFulfillRandomness" | "request"): FunctionFragment;
    encodeFunctionData(functionFragment: "calcGasUsed", values?: undefined): string;
    encodeFunctionData(functionFragment: "calcTxValue", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "callbackGasLimit", values?: undefined): string;
    encodeFunctionData(functionFragment: "cancelSubscription", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "fundSubscription", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getSubscription", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingRequestExists", values?: undefined): string;
    encodeFunctionData(functionFragment: "rawFulfillRandomness", values: [
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>,
        PromiseOrValue<BytesLike>
    ]): string;
    encodeFunctionData(functionFragment: "request", values: [PromiseOrValue<BytesLike>]): string;
    decodeFunctionResult(functionFragment: "calcGasUsed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calcTxValue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callbackGasLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelSubscription", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundSubscription", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSubscription", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingRequestExists", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rawFulfillRandomness", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "request", data: BytesLike): Result;
    events: {};
}
export interface OraoVRFConsumerBase extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: OraoVRFConsumerBaseInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        calcGasUsed(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        calcTxValue(gasPrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<[BigNumber]>;
        callbackGasLimit(overrides?: CallOverrides): Promise<[number]>;
        cancelSubscription(to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        fundSubscription(orao: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getSubscription(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            orao: BigNumber;
            base: BigNumber;
            pendingReqCount: BigNumber;
        }>;
        pendingRequestExists(overrides?: CallOverrides): Promise<[boolean]>;
        rawFulfillRandomness(seed: PromiseOrValue<BytesLike>, part1: PromiseOrValue<BytesLike>, part2: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        request(seed: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    calcGasUsed(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    calcTxValue(gasPrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
    callbackGasLimit(overrides?: CallOverrides): Promise<number>;
    cancelSubscription(to: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    fundSubscription(orao: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getSubscription(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        orao: BigNumber;
        base: BigNumber;
        pendingReqCount: BigNumber;
    }>;
    pendingRequestExists(overrides?: CallOverrides): Promise<boolean>;
    rawFulfillRandomness(seed: PromiseOrValue<BytesLike>, part1: PromiseOrValue<BytesLike>, part2: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    request(seed: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        calcGasUsed(overrides?: CallOverrides): Promise<BigNumber>;
        calcTxValue(gasPrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        callbackGasLimit(overrides?: CallOverrides): Promise<number>;
        cancelSubscription(to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        fundSubscription(orao: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getSubscription(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            orao: BigNumber;
            base: BigNumber;
            pendingReqCount: BigNumber;
        }>;
        pendingRequestExists(overrides?: CallOverrides): Promise<boolean>;
        rawFulfillRandomness(seed: PromiseOrValue<BytesLike>, part1: PromiseOrValue<BytesLike>, part2: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
        request(seed: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        calcGasUsed(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        calcTxValue(gasPrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;
        callbackGasLimit(overrides?: CallOverrides): Promise<BigNumber>;
        cancelSubscription(to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        fundSubscription(orao: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getSubscription(overrides?: CallOverrides): Promise<BigNumber>;
        pendingRequestExists(overrides?: CallOverrides): Promise<BigNumber>;
        rawFulfillRandomness(seed: PromiseOrValue<BytesLike>, part1: PromiseOrValue<BytesLike>, part2: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        request(seed: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        calcGasUsed(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        calcTxValue(gasPrice: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        callbackGasLimit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cancelSubscription(to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        fundSubscription(orao: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getSubscription(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingRequestExists(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        rawFulfillRandomness(seed: PromiseOrValue<BytesLike>, part1: PromiseOrValue<BytesLike>, part2: PromiseOrValue<BytesLike>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        request(seed: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}

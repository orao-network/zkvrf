import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
export interface IOraoVRFInterface extends utils.Interface {
    functions: {
        "ORAO()": FunctionFragment;
        "cancelSubscription(address)": FunctionFragment;
        "fundSubscription(uint256)": FunctionFragment;
        "getConfig()": FunctionFragment;
        "getSubscription(address)": FunctionFragment;
        "pendingRequestExists(address)": FunctionFragment;
        "request(bytes32,uint32)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "ORAO" | "cancelSubscription" | "fundSubscription" | "getConfig" | "getSubscription" | "pendingRequestExists" | "request"): FunctionFragment;
    encodeFunctionData(functionFragment: "ORAO", values?: undefined): string;
    encodeFunctionData(functionFragment: "cancelSubscription", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "fundSubscription", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getConfig", values?: undefined): string;
    encodeFunctionData(functionFragment: "getSubscription", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "pendingRequestExists", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "request", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    decodeFunctionResult(functionFragment: "ORAO", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelSubscription", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundSubscription", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSubscription", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingRequestExists", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "request", data: BytesLike): Result;
    events: {};
}
export interface IOraoVRF extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IOraoVRFInterface;
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
        ORAO(overrides?: CallOverrides): Promise<[string]>;
        cancelSubscription(to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        fundSubscription(orao: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getConfig(overrides?: CallOverrides): Promise<[
            number,
            BigNumber,
            BigNumber
        ] & {
            maxGasLimit: number;
            oraoFee: BigNumber;
            baseFee: BigNumber;
        }>;
        getSubscription(subOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            orao: BigNumber;
            base: BigNumber;
            pendingReqCount: BigNumber;
        }>;
        pendingRequestExists(subOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        request(seed: PromiseOrValue<BytesLike>, callbackGasLimit: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    ORAO(overrides?: CallOverrides): Promise<string>;
    cancelSubscription(to: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    fundSubscription(orao: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getConfig(overrides?: CallOverrides): Promise<[
        number,
        BigNumber,
        BigNumber
    ] & {
        maxGasLimit: number;
        oraoFee: BigNumber;
        baseFee: BigNumber;
    }>;
    getSubscription(subOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        orao: BigNumber;
        base: BigNumber;
        pendingReqCount: BigNumber;
    }>;
    pendingRequestExists(subOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    request(seed: PromiseOrValue<BytesLike>, callbackGasLimit: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        ORAO(overrides?: CallOverrides): Promise<string>;
        cancelSubscription(to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        fundSubscription(orao: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        getConfig(overrides?: CallOverrides): Promise<[
            number,
            BigNumber,
            BigNumber
        ] & {
            maxGasLimit: number;
            oraoFee: BigNumber;
            baseFee: BigNumber;
        }>;
        getSubscription(subOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            orao: BigNumber;
            base: BigNumber;
            pendingReqCount: BigNumber;
        }>;
        pendingRequestExists(subOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        request(seed: PromiseOrValue<BytesLike>, callbackGasLimit: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        ORAO(overrides?: CallOverrides): Promise<BigNumber>;
        cancelSubscription(to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        fundSubscription(orao: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getConfig(overrides?: CallOverrides): Promise<BigNumber>;
        getSubscription(subOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        pendingRequestExists(subOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        request(seed: PromiseOrValue<BytesLike>, callbackGasLimit: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        ORAO(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cancelSubscription(to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        fundSubscription(orao: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSubscription(subOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingRequestExists(subOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        request(seed: PromiseOrValue<BytesLike>, callbackGasLimit: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}

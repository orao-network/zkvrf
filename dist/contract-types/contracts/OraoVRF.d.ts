import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
export declare namespace IZK {
    type G1PointStruct = {
        X: PromiseOrValue<BigNumberish>;
        Y: PromiseOrValue<BigNumberish>;
    };
    type G1PointStructOutput = [BigNumber, BigNumber] & {
        X: BigNumber;
        Y: BigNumber;
    };
    type G2PointStruct = {
        X: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>];
        Y: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>];
    };
    type G2PointStructOutput = [
        [
            BigNumber,
            BigNumber
        ],
        [
            BigNumber,
            BigNumber
        ]
    ] & {
        X: [BigNumber, BigNumber];
        Y: [BigNumber, BigNumber];
    };
    type ProofStruct = {
        a: IZK.G1PointStruct;
        b: IZK.G2PointStruct;
        c: IZK.G1PointStruct;
    };
    type ProofStructOutput = [
        IZK.G1PointStructOutput,
        IZK.G2PointStructOutput,
        IZK.G1PointStructOutput
    ] & {
        a: IZK.G1PointStructOutput;
        b: IZK.G2PointStructOutput;
        c: IZK.G1PointStructOutput;
    };
}
export declare namespace OraoVRF {
    type RequestStruct = {
        sender: PromiseOrValue<string>;
        part1: PromiseOrValue<BytesLike>;
        part2: PromiseOrValue<BytesLike>;
        callbackGasLimit: PromiseOrValue<BigNumberish>;
    };
    type RequestStructOutput = [string, string, string, number] & {
        sender: string;
        part1: string;
        part2: string;
        callbackGasLimit: number;
    };
}
export interface OraoVRFInterface extends utils.Interface {
    functions: {
        "ORAO()": FunctionFragment;
        "cancelSubscription(address)": FunctionFragment;
        "fulfill(((uint256,uint256),(uint256[2],uint256[2]),(uint256,uint256)),bytes32,bytes32[2])": FunctionFragment;
        "fundSubscription(uint256)": FunctionFragment;
        "getConfig()": FunctionFragment;
        "getRequest(bytes32)": FunctionFragment;
        "getSubscription(address)": FunctionFragment;
        "getVerifier()": FunctionFragment;
        "initialize(address)": FunctionFragment;
        "oracleWithdraw(address,uint96,uint96)": FunctionFragment;
        "owner()": FunctionFragment;
        "ownerCancelSubscription(address)": FunctionFragment;
        "pendingRequestExists(address)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "request(bytes32,uint32)": FunctionFragment;
        "setConfig(uint32,uint64,uint64)": FunctionFragment;
        "setVerifier(address)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "verifier()": FunctionFragment;
        "withdrawableBaseTokens(address)": FunctionFragment;
        "withdrawableOraoTokens(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "ORAO" | "cancelSubscription" | "fulfill" | "fundSubscription" | "getConfig" | "getRequest" | "getSubscription" | "getVerifier" | "initialize" | "oracleWithdraw" | "owner" | "ownerCancelSubscription" | "pendingRequestExists" | "renounceOwnership" | "request" | "setConfig" | "setVerifier" | "transferOwnership" | "verifier" | "withdrawableBaseTokens" | "withdrawableOraoTokens"): FunctionFragment;
    encodeFunctionData(functionFragment: "ORAO", values?: undefined): string;
    encodeFunctionData(functionFragment: "cancelSubscription", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "fulfill", values: [
        IZK.ProofStruct,
        PromiseOrValue<BytesLike>,
        [
            PromiseOrValue<BytesLike>,
            PromiseOrValue<BytesLike>
        ]
    ]): string;
    encodeFunctionData(functionFragment: "fundSubscription", values: [PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "getConfig", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRequest", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getSubscription", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getVerifier", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "oracleWithdraw", values: [
        PromiseOrValue<string>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "ownerCancelSubscription", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "pendingRequestExists", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "request", values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]): string;
    encodeFunctionData(functionFragment: "setConfig", values: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "setVerifier", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "verifier", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawableBaseTokens", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "withdrawableOraoTokens", values: [PromiseOrValue<string>]): string;
    decodeFunctionResult(functionFragment: "ORAO", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelSubscription", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fulfill", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fundSubscription", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRequest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSubscription", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVerifier", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "oracleWithdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ownerCancelSubscription", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingRequestExists", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "request", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setConfig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setVerifier", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifier", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawableBaseTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawableOraoTokens", data: BytesLike): Result;
    events: {
        "ConfigSet(uint32,uint64,uint64)": EventFragment;
        "Fulfilled(bytes32,bytes32,bytes32,uint96,uint96,bool)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Requested(address,bytes32,uint32)": EventFragment;
        "SubscriptionCanceled(address,address,uint96,uint96)": EventFragment;
        "SubscriptionFunded(address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ConfigSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Fulfilled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Requested"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SubscriptionCanceled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SubscriptionFunded"): EventFragment;
}
export interface ConfigSetEventObject {
    maxGasLimit: number;
    oraoFee: BigNumber;
    baseFee: BigNumber;
}
export type ConfigSetEvent = TypedEvent<[
    number,
    BigNumber,
    BigNumber
], ConfigSetEventObject>;
export type ConfigSetEventFilter = TypedEventFilter<ConfigSetEvent>;
export interface FulfilledEventObject {
    seed: string;
    part1: string;
    part2: string;
    oraoPayment: BigNumber;
    basePayment: BigNumber;
    success: boolean;
}
export type FulfilledEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    boolean
], FulfilledEventObject>;
export type FulfilledEventFilter = TypedEventFilter<FulfilledEvent>;
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
export interface RequestedEventObject {
    client: string;
    seed: string;
    callbackGasLimit: number;
}
export type RequestedEvent = TypedEvent<[
    string,
    string,
    number
], RequestedEventObject>;
export type RequestedEventFilter = TypedEventFilter<RequestedEvent>;
export interface SubscriptionCanceledEventObject {
    subOwner: string;
    to: string;
    orao: BigNumber;
    base: BigNumber;
}
export type SubscriptionCanceledEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], SubscriptionCanceledEventObject>;
export type SubscriptionCanceledEventFilter = TypedEventFilter<SubscriptionCanceledEvent>;
export interface SubscriptionFundedEventObject {
    subOwner: string;
    orao: BigNumber;
    base: BigNumber;
}
export type SubscriptionFundedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], SubscriptionFundedEventObject>;
export type SubscriptionFundedEventFilter = TypedEventFilter<SubscriptionFundedEvent>;
export interface OraoVRF extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: OraoVRFInterface;
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
        fulfill(proof: IZK.ProofStruct, seed: PromiseOrValue<BytesLike>, signature: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>], overrides?: Overrides & {
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
        getRequest(seed: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[OraoVRF.RequestStructOutput]>;
        getSubscription(subOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            orao: BigNumber;
            base: BigNumber;
            pendingReqCount: BigNumber;
        }>;
        getVerifier(overrides?: CallOverrides): Promise<[string]>;
        initialize(orao: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        oracleWithdraw(recipient: PromiseOrValue<string>, orao: PromiseOrValue<BigNumberish>, base: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        ownerCancelSubscription(subOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        pendingRequestExists(subOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        request(seed: PromiseOrValue<BytesLike>, callbackGasLimit: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setConfig(maxGasLimit: PromiseOrValue<BigNumberish>, oraoFee: PromiseOrValue<BigNumberish>, baseFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        setVerifier(_verifier: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        verifier(overrides?: CallOverrides): Promise<[string]>;
        withdrawableBaseTokens(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
        withdrawableOraoTokens(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    ORAO(overrides?: CallOverrides): Promise<string>;
    cancelSubscription(to: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    fulfill(proof: IZK.ProofStruct, seed: PromiseOrValue<BytesLike>, signature: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>], overrides?: Overrides & {
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
    getRequest(seed: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<OraoVRF.RequestStructOutput>;
    getSubscription(subOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        orao: BigNumber;
        base: BigNumber;
        pendingReqCount: BigNumber;
    }>;
    getVerifier(overrides?: CallOverrides): Promise<string>;
    initialize(orao: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    oracleWithdraw(recipient: PromiseOrValue<string>, orao: PromiseOrValue<BigNumberish>, base: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    owner(overrides?: CallOverrides): Promise<string>;
    ownerCancelSubscription(subOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    pendingRequestExists(subOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    renounceOwnership(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    request(seed: PromiseOrValue<BytesLike>, callbackGasLimit: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setConfig(maxGasLimit: PromiseOrValue<BigNumberish>, oraoFee: PromiseOrValue<BigNumberish>, baseFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    setVerifier(_verifier: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    verifier(overrides?: CallOverrides): Promise<string>;
    withdrawableBaseTokens(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    withdrawableOraoTokens(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        ORAO(overrides?: CallOverrides): Promise<string>;
        cancelSubscription(to: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        fulfill(proof: IZK.ProofStruct, seed: PromiseOrValue<BytesLike>, signature: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>], overrides?: CallOverrides): Promise<void>;
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
        getRequest(seed: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<OraoVRF.RequestStructOutput>;
        getSubscription(subOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber
        ] & {
            orao: BigNumber;
            base: BigNumber;
            pendingReqCount: BigNumber;
        }>;
        getVerifier(overrides?: CallOverrides): Promise<string>;
        initialize(orao: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        oracleWithdraw(recipient: PromiseOrValue<string>, orao: PromiseOrValue<BigNumberish>, base: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        owner(overrides?: CallOverrides): Promise<string>;
        ownerCancelSubscription(subOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        pendingRequestExists(subOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        request(seed: PromiseOrValue<BytesLike>, callbackGasLimit: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setConfig(maxGasLimit: PromiseOrValue<BigNumberish>, oraoFee: PromiseOrValue<BigNumberish>, baseFee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;
        setVerifier(_verifier: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;
        verifier(overrides?: CallOverrides): Promise<string>;
        withdrawableBaseTokens(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        withdrawableOraoTokens(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "ConfigSet(uint32,uint64,uint64)"(maxGasLimit?: null, oraoFee?: null, baseFee?: null): ConfigSetEventFilter;
        ConfigSet(maxGasLimit?: null, oraoFee?: null, baseFee?: null): ConfigSetEventFilter;
        "Fulfilled(bytes32,bytes32,bytes32,uint96,uint96,bool)"(seed?: PromiseOrValue<BytesLike> | null, part1?: null, part2?: null, oraoPayment?: null, basePayment?: null, success?: null): FulfilledEventFilter;
        Fulfilled(seed?: PromiseOrValue<BytesLike> | null, part1?: null, part2?: null, oraoPayment?: null, basePayment?: null, success?: null): FulfilledEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: PromiseOrValue<string> | null, newOwner?: PromiseOrValue<string> | null): OwnershipTransferredEventFilter;
        "Requested(address,bytes32,uint32)"(client?: PromiseOrValue<string> | null, seed?: null, callbackGasLimit?: null): RequestedEventFilter;
        Requested(client?: PromiseOrValue<string> | null, seed?: null, callbackGasLimit?: null): RequestedEventFilter;
        "SubscriptionCanceled(address,address,uint96,uint96)"(subOwner?: PromiseOrValue<string> | null, to?: null, orao?: null, base?: null): SubscriptionCanceledEventFilter;
        SubscriptionCanceled(subOwner?: PromiseOrValue<string> | null, to?: null, orao?: null, base?: null): SubscriptionCanceledEventFilter;
        "SubscriptionFunded(address,uint256,uint256)"(subOwner?: PromiseOrValue<string> | null, orao?: null, base?: null): SubscriptionFundedEventFilter;
        SubscriptionFunded(subOwner?: PromiseOrValue<string> | null, orao?: null, base?: null): SubscriptionFundedEventFilter;
    };
    estimateGas: {
        ORAO(overrides?: CallOverrides): Promise<BigNumber>;
        cancelSubscription(to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        fulfill(proof: IZK.ProofStruct, seed: PromiseOrValue<BytesLike>, signature: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        fundSubscription(orao: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getConfig(overrides?: CallOverrides): Promise<BigNumber>;
        getRequest(seed: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        getSubscription(subOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getVerifier(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(orao: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        oracleWithdraw(recipient: PromiseOrValue<string>, orao: PromiseOrValue<BigNumberish>, base: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        ownerCancelSubscription(subOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        pendingRequestExists(subOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        request(seed: PromiseOrValue<BytesLike>, callbackGasLimit: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setConfig(maxGasLimit: PromiseOrValue<BigNumberish>, oraoFee: PromiseOrValue<BigNumberish>, baseFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        setVerifier(_verifier: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        verifier(overrides?: CallOverrides): Promise<BigNumber>;
        withdrawableBaseTokens(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        withdrawableOraoTokens(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        ORAO(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        cancelSubscription(to: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        fulfill(proof: IZK.ProofStruct, seed: PromiseOrValue<BytesLike>, signature: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        fundSubscription(orao: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getConfig(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRequest(seed: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSubscription(subOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getVerifier(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(orao: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        oracleWithdraw(recipient: PromiseOrValue<string>, orao: PromiseOrValue<BigNumberish>, base: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ownerCancelSubscription(subOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        pendingRequestExists(subOwner: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        request(seed: PromiseOrValue<BytesLike>, callbackGasLimit: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setConfig(maxGasLimit: PromiseOrValue<BigNumberish>, oraoFee: PromiseOrValue<BigNumberish>, baseFee: PromiseOrValue<BigNumberish>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        setVerifier(_verifier: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: PromiseOrValue<string>, overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        verifier(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawableBaseTokens(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawableOraoTokens(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

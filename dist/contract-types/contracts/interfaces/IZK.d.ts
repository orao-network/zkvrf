import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../../common";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
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
export interface IZKInterface extends utils.Interface {
    functions: {
        "verifyTx(((uint256,uint256),(uint256[2],uint256[2]),(uint256,uint256)),uint256[4])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "verifyTx"): FunctionFragment;
    encodeFunctionData(functionFragment: "verifyTx", values: [
        IZK.ProofStruct,
        [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ]
    ]): string;
    decodeFunctionResult(functionFragment: "verifyTx", data: BytesLike): Result;
    events: {};
}
export interface IZK extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IZKInterface;
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
        verifyTx(proof: IZK.ProofStruct, input: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], overrides?: CallOverrides): Promise<[boolean] & {
            r: boolean;
        }>;
    };
    verifyTx(proof: IZK.ProofStruct, input: [
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ], overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        verifyTx(proof: IZK.ProofStruct, input: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        verifyTx(proof: IZK.ProofStruct, input: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        verifyTx(proof: IZK.ProofStruct, input: [
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>,
            PromiseOrValue<BigNumberish>
        ], overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

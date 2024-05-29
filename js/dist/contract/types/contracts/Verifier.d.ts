import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
export declare namespace Pairing {
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
}
export declare namespace Verifier {
    type ProofStruct = {
        a: Pairing.G1PointStruct;
        b: Pairing.G2PointStruct;
        c: Pairing.G1PointStruct;
    };
    type ProofStructOutput = [
        Pairing.G1PointStructOutput,
        Pairing.G2PointStructOutput,
        Pairing.G1PointStructOutput
    ] & {
        a: Pairing.G1PointStructOutput;
        b: Pairing.G2PointStructOutput;
        c: Pairing.G1PointStructOutput;
    };
}
export interface VerifierInterface extends utils.Interface {
    functions: {
        "verifyTx(((uint256,uint256),(uint256[2],uint256[2]),(uint256,uint256)),uint256[12])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "verifyTx"): FunctionFragment;
    encodeFunctionData(functionFragment: "verifyTx", values: [Verifier.ProofStruct, PromiseOrValue<BigNumberish>[]]): string;
    decodeFunctionResult(functionFragment: "verifyTx", data: BytesLike): Result;
    events: {};
}
export interface Verifier extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: VerifierInterface;
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
        verifyTx(proof: Verifier.ProofStruct, input: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<[boolean] & {
            r: boolean;
        }>;
    };
    verifyTx(proof: Verifier.ProofStruct, input: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        verifyTx(proof: Verifier.ProofStruct, input: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {};
    estimateGas: {
        verifyTx(proof: Verifier.ProofStruct, input: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        verifyTx(proof: Verifier.ProofStruct, input: PromiseOrValue<BigNumberish>[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}

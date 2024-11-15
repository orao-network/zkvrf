import type { IZK, IZKInterface } from "../../../contracts/interfaces/IZK";
import type { Provider } from "@ethersproject/providers";
import { Signer } from "ethers";
export declare class IZK__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "X";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "Y";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct IZK.G1Point";
                readonly name: "a";
                readonly type: "tuple";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint256[2]";
                    readonly name: "X";
                    readonly type: "uint256[2]";
                }, {
                    readonly internalType: "uint256[2]";
                    readonly name: "Y";
                    readonly type: "uint256[2]";
                }];
                readonly internalType: "struct IZK.G2Point";
                readonly name: "b";
                readonly type: "tuple";
            }, {
                readonly components: readonly [{
                    readonly internalType: "uint256";
                    readonly name: "X";
                    readonly type: "uint256";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "Y";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct IZK.G1Point";
                readonly name: "c";
                readonly type: "tuple";
            }];
            readonly internalType: "struct IZK.Proof";
            readonly name: "proof";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint256[4]";
            readonly name: "input";
            readonly type: "uint256[4]";
        }];
        readonly name: "verifyTx";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "r";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IZKInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IZK;
}

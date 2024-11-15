import type { IOraoVRF, IOraoVRFInterface } from "../../../contracts/interfaces/IOraoVRF";
import type { Provider } from "@ethersproject/providers";
import { Signer } from "ethers";
export declare class IOraoVRF__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "ORAO";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20Upgradeable";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }];
        readonly name: "cancelSubscription";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "orao";
            readonly type: "uint256";
        }];
        readonly name: "fundSubscription";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getConfig";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "maxGasLimit";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint96";
            readonly name: "oraoFee";
            readonly type: "uint96";
        }, {
            readonly internalType: "uint96";
            readonly name: "baseFee";
            readonly type: "uint96";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "subOwner";
            readonly type: "address";
        }];
        readonly name: "getSubscription";
        readonly outputs: readonly [{
            readonly internalType: "uint96";
            readonly name: "orao";
            readonly type: "uint96";
        }, {
            readonly internalType: "int96";
            readonly name: "base";
            readonly type: "int96";
        }, {
            readonly internalType: "uint64";
            readonly name: "pendingReqCount";
            readonly type: "uint64";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "subOwner";
            readonly type: "address";
        }];
        readonly name: "pendingRequestExists";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "seed";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint32";
            readonly name: "callbackGasLimit";
            readonly type: "uint32";
        }];
        readonly name: "request";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): IOraoVRFInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IOraoVRF;
}

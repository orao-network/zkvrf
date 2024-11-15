import type { OraoVRFConsumerBase, OraoVRFConsumerBaseInterface } from "../../contracts/OraoVRFConsumerBase";
import type { Provider } from "@ethersproject/providers";
import { Signer } from "ethers";
export declare class OraoVRFConsumerBase__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "have";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "want";
            readonly type: "address";
        }];
        readonly name: "OnlyCoordinatorCanFulfill";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "calcGasUsed";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "gasUsed";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "gasPrice";
            readonly type: "uint256";
        }];
        readonly name: "calcTxValue";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "callbackGasLimit";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
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
        readonly inputs: readonly [];
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
            readonly internalType: "bytes32";
            readonly name: "part1";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "part2";
            readonly type: "bytes32";
        }];
        readonly name: "rawFulfillRandomness";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "seed";
            readonly type: "bytes32";
        }];
        readonly name: "request";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): OraoVRFConsumerBaseInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): OraoVRFConsumerBase;
}

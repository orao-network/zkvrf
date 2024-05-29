import type { PromiseOrValue } from "../../../common";
import type { OraoVRFConsumer, OraoVRFConsumerInterface } from "../../../contracts/testhelpers/OraoVRFConsumer";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, ContractFactory, Overrides } from "ethers";
declare type OraoVRFConsumerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class OraoVRFConsumer__factory extends ContractFactory {
    constructor(...args: OraoVRFConsumerConstructorParams);
    deploy(vrfCoordinator: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<OraoVRFConsumer>;
    getDeployTransaction(vrfCoordinator: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): OraoVRFConsumer;
    connect(signer: Signer): OraoVRFConsumer__factory;
    static readonly bytecode = "0x60c060405234801561001057600080fd5b5060405161084338038061084383398101604081905261002f9161009b565b6001600160a01b03811660805280610045610074565b63ffffffff1660a05250600380546001600160a01b0319166001600160a01b03929092169190911790556100f2565b6000805a6000196000819055600181905560025590505a61009590826100cb565b91505090565b6000602082840312156100ad57600080fd5b81516001600160a01b03811681146100c457600080fd5b9392505050565b818103818111156100ec57634e487b7160e01b600052601160045260246000fd5b92915050565b60805160a0516106fc6101476000396000818160fb015261055f0152600081816102a40152818161031b0152818161039e015281816103e001528181610440015281816104ce015261058601526106fc6000f3fe6080604052600436106100bc5760003560e01c806393d81d5811610074578063c10606531161004e578063c1060653146101d8578063d83408fb146101eb578063ff0b906c1461020157600080fd5b806393d81d5814610173578063a3ced7b914610193578063aed47c6e146101b857600080fd5b80633b6cf550116100a55780633b6cf5501461013257806359c87d70146101485780637d94792a1461015d57600080fd5b80630d4ebe2f146100c157806324f74697146100e9575b600080fd5b3480156100cd57600080fd5b506100d661024d565b6040519081526020015b60405180910390f35b3480156100f557600080fd5b5061011d7f000000000000000000000000000000000000000000000000000000000000000081565b60405163ffffffff90911681526020016100e0565b34801561013e57600080fd5b506100d660025481565b61015b6101563660046105bf565b610274565b005b34801561016957600080fd5b506100d660005481565b34801561017f57600080fd5b5061015b61018e3660046105d8565b610285565b34801561019f57600080fd5b506101a8610303565b60405190151581526020016100e0565b3480156101c457600080fd5b5061015b6101d3366004610608565b610393565b61015b6101e63660046105bf565b61042a565b3480156101f757600080fd5b506100d660015481565b34801561020d57600080fd5b506102166104aa565b604080516bffffffffffffffffffffffff9094168452600b9290920b602084015267ffffffffffffffff16908201526060016100e0565b6000805a6000196000819055600181905560025590505a61026e9082610634565b91505090565b600081905561028281610544565b50565b60405163127b03ab60e31b81526001600160a01b0382811660048301527f000000000000000000000000000000000000000000000000000000000000000016906393d81d5890602401600060405180830381600087803b1580156102e857600080fd5b505af11580156102fc573d6000803e3d6000fd5b5050505050565b604051631116732f60e21b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690634459ccbc90602401602060405180830381865afa15801561036a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061038e919061065b565b905090565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146104115760405163073e64fd60e21b81523360048201526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602482015260440160405180910390fd5b610425838383600092909255600155600255565b505050565b60405163c106065360e01b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c10606539034906024015b6000604051808303818588803b15801561048e57600080fd5b505af11580156104a2573d6000803e3d6000fd5b505050505050565b60405163032faf0960e21b8152306004820152600090819081906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690630cbebc2490602401606060405180830381865afa158015610515573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610539919061067d565b925092509250909192565b60405163dbc3733f60e01b81526004810182905263ffffffff7f00000000000000000000000000000000000000000000000000000000000000001660248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063dbc3733f903490604401610475565b6000602082840312156105d157600080fd5b5035919050565b6000602082840312156105ea57600080fd5b81356001600160a01b038116811461060157600080fd5b9392505050565b60008060006060848603121561061d57600080fd5b505081359360208301359350604090920135919050565b8181038181111561065557634e487b7160e01b600052601160045260246000fd5b92915050565b60006020828403121561066d57600080fd5b8151801515811461060157600080fd5b60008060006060848603121561069257600080fd5b83516bffffffffffffffffffffffff811681146106ae57600080fd5b80935050602084015180600b0b81146106c657600080fd5b604085015190925067ffffffffffffffff811681146106e457600080fd5b80915050925092509256fea164736f6c6343000812000a";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "vrfCoordinator";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
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
        readonly name: "part1";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "part2";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
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
            readonly name: "_seed";
            readonly type: "bytes32";
        }];
        readonly name: "request";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "seed";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): OraoVRFConsumerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): OraoVRFConsumer;
}
export {};

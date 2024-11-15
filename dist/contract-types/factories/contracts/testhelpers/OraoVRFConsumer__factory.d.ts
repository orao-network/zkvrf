import type { PromiseOrValue } from "../../../common";
import type { OraoVRFConsumer, OraoVRFConsumerInterface } from "../../../contracts/testhelpers/OraoVRFConsumer";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, ContractFactory, Overrides } from "ethers";
type OraoVRFConsumerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
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
    static readonly bytecode = "0x60c060405234801561001057600080fd5b50604051610a1c380380610a1c83398101604081905261002f9161009b565b6001600160a01b03811660805280610045610074565b63ffffffff1660a05250600380546001600160a01b0319166001600160a01b03929092169190911790556100f2565b6000805a6000196000819055600181905560025590505a61009590826100cb565b91505090565b6000602082840312156100ad57600080fd5b81516001600160a01b03811681146100c457600080fd5b9392505050565b818103818111156100ec57634e487b7160e01b600052601160045260246000fd5b92915050565b60805160a0516108c76101556000396000818160e6015281816104d0015261068f0152600081816102aa01528181610321015281816103a4015281816103e60152818161044601528181610511015281816105fe01526106b601526108c76000f3fe6080604052600436106100a75760003560e01c8063a3ced7b911610064578063a3ced7b91461017e578063aed47c6e146101a3578063c1060653146101c3578063d5d21449146101d6578063d83408fb146101f6578063ff0b906c1461020c57600080fd5b80630d4ebe2f146100ac57806324f74697146100d45780633b6cf5501461011d57806359c87d70146101335780637d94792a1461014857806393d81d581461015e575b600080fd5b3480156100b857600080fd5b506100c1610253565b6040519081526020015b60405180910390f35b3480156100e057600080fd5b506101087f000000000000000000000000000000000000000000000000000000000000000081565b60405163ffffffff90911681526020016100cb565b34801561012957600080fd5b506100c160025481565b6101466101413660046106ef565b61027a565b005b34801561015457600080fd5b506100c160005481565b34801561016a57600080fd5b50610146610179366004610708565b61028b565b34801561018a57600080fd5b50610193610309565b60405190151581526020016100cb565b3480156101af57600080fd5b506101466101be366004610738565b610399565b6101466101d13660046106ef565b610430565b3480156101e257600080fd5b506100c16101f13660046106ef565b6104b0565b34801561020257600080fd5b506100c160015481565b34801561021857600080fd5b506102216105da565b604080516001600160601b039094168452600b9290920b602084015267ffffffffffffffff16908201526060016100cb565b6000805a6000196000819055600181905560025590505a610274908261077a565b91505090565b600081905561028881610674565b50565b60405163127b03ab60e31b81526001600160a01b0382811660048301527f000000000000000000000000000000000000000000000000000000000000000016906393d81d5890602401600060405180830381600087803b1580156102ee57600080fd5b505af1158015610302573d6000803e3d6000fd5b5050505050565b604051631116732f60e21b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690634459ccbc90602401602060405180830381865afa158015610370573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103949190610793565b905090565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146104175760405163073e64fd60e21b81523360048201526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016602482015260440160405180910390fd5b61042b838383600092909255600155600255565b505050565b60405163c106065360e01b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063c10606539034906024015b6000604051808303818588803b15801561049457600080fd5b505af11580156104a8573d6000803e3d6000fd5b505050505050565b60008060006104bd6105da565b50600b0b91506001600160601b031691507f000000000000000000000000000000000000000000000000000000000000000063ffffffff168461050091906107b5565b61050a90826107cc565b90506000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c3f909d46040518163ffffffff1660e01b8152600401606060405180830381865afa15801561056d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610591919061080f565b6001600160601b031692506001600160601b0316925050838210156105b4575060005b828113156105cd576105c683826107cc565b90506105d1565b5060005b95945050505050565b60405163032faf0960e21b8152306004820152600090819081906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690630cbebc2490602401606060405180830381865afa158015610645573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610669919061085d565b925092509250909192565b60405163dbc3733f60e01b81526004810182905263ffffffff7f00000000000000000000000000000000000000000000000000000000000000001660248201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063dbc3733f90349060440161047b565b60006020828403121561070157600080fd5b5035919050565b60006020828403121561071a57600080fd5b81356001600160a01b038116811461073157600080fd5b9392505050565b60008060006060848603121561074d57600080fd5b505081359360208301359350604090920135919050565b634e487b7160e01b600052601160045260246000fd5b8181038181111561078d5761078d610764565b92915050565b6000602082840312156107a557600080fd5b8151801515811461073157600080fd5b808202811582820484141761078d5761078d610764565b81810360008312801583831316838312821617156107ec576107ec610764565b5092915050565b80516001600160601b038116811461080a57600080fd5b919050565b60008060006060848603121561082457600080fd5b835163ffffffff8116811461083857600080fd5b9250610846602085016107f3565b9150610854604085016107f3565b90509250925092565b60008060006060848603121561087257600080fd5b61087b846107f3565b9250602084015180600b0b811461089157600080fd5b604085015190925067ffffffffffffffff811681146108af57600080fd5b80915050925092509256fea164736f6c6343000812000a";
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

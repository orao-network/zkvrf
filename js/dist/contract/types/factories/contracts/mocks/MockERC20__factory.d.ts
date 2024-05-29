import type { PromiseOrValue } from "../../../common";
import type { MockERC20, MockERC20Interface } from "../../../contracts/mocks/MockERC20";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, ContractFactory, Overrides } from "ethers";
declare type MockERC20ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MockERC20__factory extends ContractFactory {
    constructor(...args: MockERC20ConstructorParams);
    deploy(_name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<MockERC20>;
    getDeployTransaction(_name: PromiseOrValue<string>, _symbol: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): MockERC20;
    connect(signer: Signer): MockERC20__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b506040516200116638038062001166833981016040819052620000349162000284565b818160036200004483826200037c565b5060046200005382826200037c565b505050620000706200006a6200009e60201b60201c565b620000a2565b62000096620000876005546001600160a01b031690565b670de0b6b3a7640000620000f4565b505062000470565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b0382166200014f5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b806002600082825462000163919062000448565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b505050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001e757600080fd5b81516001600160401b0380821115620002045762000204620001bf565b604051601f8301601f19908116603f011681019082821181831017156200022f576200022f620001bf565b816040528381526020925086838588010111156200024c57600080fd5b600091505b8382101562000270578582018301518183018401529082019062000251565b600093810190920192909252949350505050565b600080604083850312156200029857600080fd5b82516001600160401b0380821115620002b057600080fd5b620002be86838701620001d5565b93506020850151915080821115620002d557600080fd5b50620002e485828601620001d5565b9150509250929050565b600181811c908216806200030357607f821691505b6020821081036200032457634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620001ba57600081815260208120601f850160051c81016020861015620003535750805b601f850160051c820191505b8181101562000374578281556001016200035f565b505050505050565b81516001600160401b03811115620003985762000398620001bf565b620003b081620003a98454620002ee565b846200032a565b602080601f831160018114620003e85760008415620003cf5750858301515b600019600386901b1c1916600185901b17855562000374565b600085815260208120601f198616915b828110156200041957888601518255948401946001909101908401620003f8565b5085821015620004385787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b808201808211156200046a57634e487b7160e01b600052601160045260246000fd5b92915050565b610ce680620004806000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063715018a611610097578063a457c2d711610066578063a457c2d714610209578063a9059cbb1461021c578063dd62ed3e1461022f578063f2fde38b1461026857600080fd5b8063715018a6146101cb5780638da5cb5b146101d357806395d89b41146101ee5780639dc29fac146101f657600080fd5b8063313ce567116100d3578063313ce5671461016b578063395093511461017a57806340c10f191461018d57806370a08231146101a257600080fd5b806306fdde0314610105578063095ea7b31461012357806318160ddd1461014657806323b872dd14610158575b600080fd5b61010d61027b565b60405161011a9190610b59565b60405180910390f35b610136610131366004610bc3565b61030d565b604051901515815260200161011a565b6002545b60405190815260200161011a565b610136610166366004610bed565b610327565b6040516012815260200161011a565b610136610188366004610bc3565b61034b565b6101a061019b366004610bc3565b61038a565b005b61014a6101b0366004610c29565b6001600160a01b031660009081526020819052604090205490565b6101a06103a0565b6005546040516001600160a01b03909116815260200161011a565b61010d6103b4565b6101a0610204366004610bc3565b6103c3565b610136610217366004610bc3565b6103d5565b61013661022a366004610bc3565b610484565b61014a61023d366004610c4b565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6101a0610276366004610c29565b610492565b60606003805461028a90610c7e565b80601f01602080910402602001604051908101604052809291908181526020018280546102b690610c7e565b80156103035780601f106102d857610100808354040283529160200191610303565b820191906000526020600020905b8154815290600101906020018083116102e657829003601f168201915b5050505050905090565b60003361031b818585610522565b60019150505b92915050565b600033610335858285610647565b6103408585856106d9565b506001949350505050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490919061031b9082908690610385908790610cb8565b610522565b6103926108ac565b61039c8282610906565b5050565b6103a86108ac565b6103b260006109c5565b565b60606004805461028a90610c7e565b6103cb6108ac565b61039c8282610a2f565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156104775760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b6103408286868403610522565b60003361031b8185856106d9565b61049a6108ac565b6001600160a01b0381166105165760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161046e565b61051f816109c5565b50565b6001600160a01b0383166105845760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161046e565b6001600160a01b0382166105e55760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161046e565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146106d357818110156106c65760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161046e565b6106d38484848403610522565b50505050565b6001600160a01b0383166107555760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161046e565b6001600160a01b0382166107b75760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161046e565b6001600160a01b038316600090815260208190526040902054818110156108465760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e63650000000000000000000000000000000000000000000000000000606482015260840161046e565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a36106d3565b6005546001600160a01b031633146103b25760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161046e565b6001600160a01b03821661095c5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161046e565b806002600082825461096e9190610cb8565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b600580546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b038216610a8f5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161046e565b6001600160a01b03821660009081526020819052604090205481811015610b035760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161046e565b6001600160a01b0383166000818152602081815260408083208686039055600280548790039055518581529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910161063a565b600060208083528351808285015260005b81811015610b8657858101830151858201604001528201610b6a565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b0381168114610bbe57600080fd5b919050565b60008060408385031215610bd657600080fd5b610bdf83610ba7565b946020939093013593505050565b600080600060608486031215610c0257600080fd5b610c0b84610ba7565b9250610c1960208501610ba7565b9150604084013590509250925092565b600060208284031215610c3b57600080fd5b610c4482610ba7565b9392505050565b60008060408385031215610c5e57600080fd5b610c6783610ba7565b9150610c7560208401610ba7565b90509250929050565b600181811c90821680610c9257607f821691505b602082108103610cb257634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561032157634e487b7160e01b600052601160045260246000fdfea164736f6c6343000812000a";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "_name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "_symbol";
            readonly type: "string";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "previousOwner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "OwnershipTransferred";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "burn";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "subtractedValue";
            readonly type: "uint256";
        }];
        readonly name: "decreaseAllowance";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "addedValue";
            readonly type: "uint256";
        }];
        readonly name: "increaseAllowance";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "mint";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "transferOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): MockERC20Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockERC20;
}
export {};

"use strict";
/* Autogenerated file. Do not edit manually. */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockERC20__factory = void 0;
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "string",
                name: "_name",
                type: "string",
            },
            {
                internalType: "string",
                name: "_symbol",
                type: "string",
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Approval",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "Transfer",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "owner",
                type: "address",
            },
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
        ],
        name: "allowance",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "approve",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "account",
                type: "address",
            },
        ],
        name: "balanceOf",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "burn",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "decimals",
        outputs: [
            {
                internalType: "uint8",
                name: "",
                type: "uint8",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
            },
        ],
        name: "decreaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "spender",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "addedValue",
                type: "uint256",
            },
        ],
        name: "increaseAllowance",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "value",
                type: "uint256",
            },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "name",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "symbol",
        outputs: [
            {
                internalType: "string",
                name: "",
                type: "string",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "totalSupply",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transfer",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "from",
                type: "address",
            },
            {
                internalType: "address",
                name: "to",
                type: "address",
            },
            {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
            },
        ],
        name: "transferFrom",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
const _bytecode = "0x60806040523480156200001157600080fd5b50604051620010a9380380620010a9833981016040819052620000349162000284565b818160036200004483826200037c565b5060046200005382826200037c565b505050620000706200006a6200009e60201b60201c565b620000a2565b62000096620000876005546001600160a01b031690565b670de0b6b3a7640000620000f4565b505062000470565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b0382166200014f5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b806002600082825462000163919062000448565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b505050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001e757600080fd5b81516001600160401b0380821115620002045762000204620001bf565b604051601f8301601f19908116603f011681019082821181831017156200022f576200022f620001bf565b816040528381526020925086838588010111156200024c57600080fd5b600091505b8382101562000270578582018301518183018401529082019062000251565b600093810190920192909252949350505050565b600080604083850312156200029857600080fd5b82516001600160401b0380821115620002b057600080fd5b620002be86838701620001d5565b93506020850151915080821115620002d557600080fd5b50620002e485828601620001d5565b9150509250929050565b600181811c908216806200030357607f821691505b6020821081036200032457634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620001ba57600081815260208120601f850160051c81016020861015620003535750805b601f850160051c820191505b8181101562000374578281556001016200035f565b505050505050565b81516001600160401b03811115620003985762000398620001bf565b620003b081620003a98454620002ee565b846200032a565b602080601f831160018114620003e85760008415620003cf5750858301515b600019600386901b1c1916600185901b17855562000374565b600085815260208120601f198616915b828110156200041957888601518255948401946001909101908401620003f8565b5085821015620004385787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b808201808211156200046a57634e487b7160e01b600052601160045260246000fd5b92915050565b610c2980620004806000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063715018a611610097578063a457c2d711610066578063a457c2d714610209578063a9059cbb1461021c578063dd62ed3e1461022f578063f2fde38b1461024257600080fd5b8063715018a6146101cb5780638da5cb5b146101d357806395d89b41146101ee5780639dc29fac146101f657600080fd5b8063313ce567116100d3578063313ce5671461016b578063395093511461017a57806340c10f191461018d57806370a08231146101a257600080fd5b806306fdde0314610105578063095ea7b31461012357806318160ddd1461014657806323b872dd14610158575b600080fd5b61010d610255565b60405161011a9190610a9c565b60405180910390f35b610136610131366004610b06565b6102e7565b604051901515815260200161011a565b6002545b60405190815260200161011a565b610136610166366004610b30565b610301565b6040516012815260200161011a565b610136610188366004610b06565b610325565b6101a061019b366004610b06565b610347565b005b61014a6101b0366004610b6c565b6001600160a01b031660009081526020819052604090205490565b6101a061035d565b6005546040516001600160a01b03909116815260200161011a565b61010d610371565b6101a0610204366004610b06565b610380565b610136610217366004610b06565b610392565b61013661022a366004610b06565b610412565b61014a61023d366004610b8e565b610420565b6101a0610250366004610b6c565b61044b565b60606003805461026490610bc1565b80601f016020809104026020016040519081016040528092919081815260200182805461029090610bc1565b80156102dd5780601f106102b2576101008083540402835291602001916102dd565b820191906000526020600020905b8154815290600101906020018083116102c057829003601f168201915b5050505050905090565b6000336102f58185856104c4565b60019150505b92915050565b60003361030f8582856105e9565b61031a858585610663565b506001949350505050565b6000336102f58185856103388383610420565b6103429190610bfb565b6104c4565b61034f610807565b6103598282610861565b5050565b610365610807565b61036f6000610920565b565b60606004805461026490610bc1565b610388610807565b6103598282610972565b600033816103a08286610420565b9050838110156104055760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b61031a82868684036104c4565b6000336102f5818585610663565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b610453610807565b6001600160a01b0381166104b85760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016103fc565b6104c181610920565b50565b6001600160a01b0383166105265760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103fc565b6001600160a01b0382166105875760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103fc565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b60006105f58484610420565b9050600019811461065d57818110156106505760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103fc565b61065d84848484036104c4565b50505050565b6001600160a01b0383166106c75760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103fc565b6001600160a01b0382166107295760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103fc565b6001600160a01b038316600090815260208190526040902054818110156107a15760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103fc565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a361065d565b6005546001600160a01b0316331461036f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016103fc565b6001600160a01b0382166108b75760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016103fc565b80600260008282546108c99190610bfb565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b0382166109d25760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103fc565b6001600160a01b03821660009081526020819052604090205481811015610a465760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103fc565b6001600160a01b0383166000818152602081815260408083208686039055600280548790039055518581529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91016105dc565b600060208083528351808285015260005b81811015610ac957858101830151858201604001528201610aad565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b0381168114610b0157600080fd5b919050565b60008060408385031215610b1957600080fd5b610b2283610aea565b946020939093013593505050565b600080600060608486031215610b4557600080fd5b610b4e84610aea565b9250610b5c60208501610aea565b9150604084013590509250925092565b600060208284031215610b7e57600080fd5b610b8782610aea565b9392505050565b60008060408385031215610ba157600080fd5b610baa83610aea565b9150610bb860208401610aea565b90509250929050565b600181811c90821680610bd557607f821691505b602082108103610bf557634e487b7160e01b600052602260045260246000fd5b50919050565b808201808211156102fb57634e487b7160e01b600052601160045260246000fdfea164736f6c6343000812000a";
const isSuperArgs = (xs) => xs.length > 1;
class MockERC20__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(_name, _symbol, overrides) {
        return super.deploy(_name, _symbol, overrides || {});
    }
    getDeployTransaction(_name, _symbol, overrides) {
        return super.getDeployTransaction(_name, _symbol, overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.MockERC20__factory = MockERC20__factory;
MockERC20__factory.bytecode = _bytecode;
MockERC20__factory.abi = _abi;
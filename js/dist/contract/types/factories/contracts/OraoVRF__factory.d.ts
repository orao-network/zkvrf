import type { PromiseOrValue } from "../../common";
import type { OraoVRF, OraoVRFInterface } from "../../contracts/OraoVRF";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, ContractFactory, Overrides } from "ethers";
declare type OraoVRFConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class OraoVRF__factory extends ContractFactory {
    constructor(...args: OraoVRFConstructorParams);
    deploy(orao: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<OraoVRF>;
    getDeployTransaction(orao: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): OraoVRF;
    connect(signer: Signer): OraoVRF__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b5060405162002108380380620021088339810160408190526200003491620000a1565b6200003f3362000051565b6001600160a01b0316608052620000d3565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600060208284031215620000b457600080fd5b81516001600160a01b0381168114620000cc57600080fd5b9392505050565b60805161200462000104600039600081816104f301528181610d8b0152818161106101526116cb01526120046000f3fe6080604052600436106101755760003560e01c8063a07873f1116100cb578063dbc3733f1161007f578063f2fde38b11610059578063f2fde38b14610542578063f9ceec8c14610562578063fb1e61ca1461058257600080fd5b8063dbc3733f146104ce578063e453e8b0146104e1578063e76c40021461051557600080fd5b8063bccdf525116100b0578063bccdf52514610431578063c106065314610451578063c3f909d41461046457600080fd5b8063a07873f1146103db578063a552f98f146103fb57600080fd5b8063715018a61161012d5780637e769d39116101075780637e769d391461037d5780638da5cb5b1461039d57806393d81d58146103bb57600080fd5b8063715018a61461033157806378b6e659146103485780637bf642ca1461035d57600080fd5b806340b5221a1161015e57806340b5221a1461025c5780634459ccbc1461028a5780634d8ed33f146102e357600080fd5b8063028909c41461017a5780630cbebc24146101cd575b600080fd5b34801561018657600080fd5b506101b0610195366004611ba4565b6000908152600460205260409020546001600160a01b031690565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156101d957600080fd5b5061022a6101e8366004611bd9565b6001600160a01b03166000908152600560205260409020546001600160601b03811691600160601b8204600b0b91600160c01b900467ffffffffffffffff1690565b604080516001600160601b039094168452600b9290920b602084015267ffffffffffffffff16908201526060016101c4565b34801561026857600080fd5b5061027c610277366004611ba4565b610677565b6040519081526020016101c4565b34801561029657600080fd5b506102d36102a5366004611bd9565b6001600160a01b0316600090815260056020526040902054600160c01b900467ffffffffffffffff16151590565b60405190151581526020016101c4565b3480156102ef57600080fd5b506103196102fe366004611bd9565b6006602052600090815260409020546001600160601b031681565b6040516001600160601b0390911681526020016101c4565b34801561033d57600080fd5b5061034661069e565b005b34801561035457600080fd5b5061027c6106b2565b34801561036957600080fd5b50610346610378366004611bd9565b6106c4565b34801561038957600080fd5b50610346610398366004611bf4565b6106d9565b3480156103a957600080fd5b506000546001600160a01b03166101b0565b3480156103c757600080fd5b506103466103d6366004611bd9565b610c4b565b3480156103e757600080fd5b506103466103f6366004611c5b565b610cb8565b34801561040757600080fd5b50610319610416366004611bd9565b6007602052600090815260409020546001600160601b031681565b34801561043d57600080fd5b5061034661044c366004611cca565b610f46565b61034661045f366004611ba4565b611030565b34801561047057600080fd5b506104a260015463ffffffff610100820416916001600160601b03650100000000008304811692600160881b90041690565b6040805163ffffffff90941684526001600160601b0392831660208501529116908201526060016101c4565b6103466104dc366004611d04565b611160565b3480156104ed57600080fd5b506101b07f000000000000000000000000000000000000000000000000000000000000000081565b34801561052157600080fd5b506003546000908152600460205260409020546001600160a01b03166101b0565b34801561054e57600080fd5b5061034661055d366004611bd9565b61145f565b34801561056e57600080fd5b5061034661057d366004611d30565b6114ec565b34801561058e57600080fd5b5061062661059d366004611ba4565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915250600090815260026020818152604092839020835160a081018552815481526001820154928101929092529182015492810192909252600301546001600160a01b0381166060830152600160a01b900463ffffffff16608082015290565b6040516101c49190600060a0820190508251825260208301516020830152604083015160408301526001600160a01b03606084015116606083015263ffffffff608084015116608083015292915050565b600081815260046020526040812061069781600101548260020154611558565b9392505050565b6106a661156c565b6106b060006115c6565b565b60006106bf600354610677565b905090565b6106cc61156c565b6106d68182611623565b50565b6003546000036106fc576040516379e2e00360e01b815260040160405180910390fd5b60015460ff16156107205760405163769dd35360e11b815260040160405180910390fd5b6000848152600260205260408120805490910361075857604051634d0e071d60e01b8152600481018690526024015b60405180910390fd5b60018101541561077e57604051637170b34f60e01b81526004810186905260240161074f565b600354600090815260046020818152604092839020805484516101808101865260c08b811c825267ffffffffffffffff60808d811c8216968401969096528c881c811683890152808d166060840152600185015486840152600285015460a08401528183018c905260e083018b90529089901c6101008301529388901c841661012082015287861c84166101408201529287166101608401529351636667059960e01b815290936001600160a01b031692636667059992610841928c9201611d63565b602060405180830381865afa15801561085e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108829190611dd7565b61089f57604051632e52bb5760e21b815260040160405180910390fd5b60035482556108ae8585611558565b60018301556002820183905560038201546001600160a01b031660009081526005602052604090208054600160c01b900467ffffffffffffffff168160186108f583611e0f565b825467ffffffffffffffff9182166101009390930a928302919092021990911617905550600154815460009182916001600160601b036501000000000090920482169116106109d75760015483546001600160601b0365010000000000909204821693508391859160009161096c91859116611e33565b82546101009290920a6001600160601b03818102199093169183160217909155336000908152600660205260408120805486945090926109ae91859116611e5a565b92506101000a8154816001600160601b0302191690836001600160601b03160217905550610a72565b506001548254600160881b9091046001600160601b03169081908490600c90610a0b908490600160601b9004600b0b611e7a565b82546101009290920a6001600160601b0381810219909316918316021790915533600090815260076020526040812080548594509092610a4d91859116611e5a565b92506101000a8154816001600160601b0302191690836001600160601b031602179055505b6003850154600090600160a01b900463ffffffff1615610bd9576003860154600090610aac903a90600160a01b900463ffffffff16611eb1565b855490915081908690600c90610acd908490600160601b9004600b0b611e7a565b92506101000a8154816001600160601b030219169083600b0b6001600160601b031602179055508083610b009190611e5a565b60018801546002890154604051602481018f905260448101929092526064820152909350600090819063576a3e3760e11b9060840160408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526001805460ff19168117905560038a0154909150610bc99063ffffffff600160a01b820416906001600160a01b03168361186c565b6001805460ff1916905593505050505b600186015460028701546040805192835260208301919091526001600160601b0385811683830152841660608301528215156080830152518b917fa781c8d5ebcb7f720024052b5d6d97e225333d2f5dd70628f9d1c834cca24a6c919081900360a00190a25050505050505050505050565b60015460ff1615610c6f5760405163769dd35360e11b815260040160405180910390fd5b33600090815260056020526040902054600160c01b900467ffffffffffffffff1615610cae57604051631685ecdd60e31b815260040160405180910390fd5b6106d63382611623565b60015460ff1615610cdc5760405163769dd35360e11b815260040160405180910390fd5b336000908152600660205260409020546001600160601b0380841691161080610d1f5750336000908152600760205260409020546001600160601b038083169116105b15610d3d5760405163e80fa38160e01b815260040160405180910390fd5b3360009081526006602052604081208054849290610d659084906001600160601b0316611e33565b92506101000a8154816001600160601b0302191690836001600160601b031602179055507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a9059cbb84846040518363ffffffff1660e01b8152600401610df49291906001600160a01b039290921682526001600160601b0316602082015260400190565b6020604051808303816000875af1158015610e13573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e379190611dd7565b610e6d57604051637979dc8760e01b815260040161074f906020808252600490820152634f52414f60e01b604082015260600190565b3360009081526007602052604081208054839290610e959084906001600160601b0316611e33565b92506101000a8154816001600160601b0302191690836001600160601b031602179055506000836001600160a01b0316826001600160601b031660405160006040518083038185875af1925050503d8060008114610f0f576040519150601f19603f3d011682016040523d82523d6000602084013e610f14565b606091505b5050905080610f4057604051637979dc8760e01b8152602060048201526000602482015260440161074f565b50505050565b610f4e61156c565b604080516080810182526000815263ffffffff8516602080830182905267ffffffffffffffff86811684860181905290861660609485018190526001805470ffffffffffffffffffffffffffffffffff1916610100860270ffffffffffffffffffffffff0000000000191617650100000000008402177fffffff000000000000000000000000ffffffffffffffffffffffffffffffffff16600160881b8302179055855193845291830152928101929092527fa289f171697cbfc1c5998f003d5cdf58e3f69c23746189757934a756daae88cb910160405180910390a1505050565b60015460ff16156110545760405163769dd35360e11b815260040160405180910390fd5b6110896001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163230846118b8565b33600090815260056020526040812080548392906110b19084906001600160601b0316611e5a565b82546001600160601b039182166101009390930a9283029190920219909116179055503360009081526005602052604090208054349190600c90611100908490600160601b9004600b0b611edc565b82546001600160601b039182166101009390930a9283029190920219909116179055506040805182815234602082015233917fb3abbf202f180f33d8c665604028b8c2bc6db0b430eee642e6a87c332ba9df3a910160405180910390a250565b60015460ff16156111845760405163769dd35360e11b815260040160405180910390fd5b6003546000036111a7576040516379e2e00360e01b815260040160405180910390fd5b60015463ffffffff610100909104811690821611156111f357600154604051637aebf00f60e11b815263ffffffff8084166004830152610100909204909116602482015260440161074f565b600082815260026020526040902080541561122457604051631d81b6d360e31b81526004810184905260240161074f565b600380548255810180547fffffffffffffffff00000000000000000000000000000000000000000000000016337fffffffffffffffff00000000ffffffffffffffffffffffffffffffffffffffff1617600160a01b63ffffffff85160217908190556001600160a01b031660009081526005602052604090208054600160c01b900467ffffffffffffffff168160186112bc83611f13565b91906101000a81548167ffffffffffffffff021916908367ffffffffffffffff160217905550503481600001600c8282829054906101000a9004600b0b6113039190611edc565b92506101000a8154816001600160601b030219169083600b0b6001600160601b0316021790555060003a8463ffffffff1661133e9190611f3a565b82546113549190600160601b9004600b0b611f51565b905060008112156113a857604051637979dc8760e01b815260206004820152600c60248201527f63616c6c6261636b206761730000000000000000000000000000000000000000604482015260640161074f565b60015482546001600160601b0365010000000000909204821691161080156113e45750600154600160881b90046001600160601b0316600b0b81125b1561141857604051637979dc8760e01b815260206004820152600360248201526246656560e81b604482015260640161074f565b6040805186815263ffffffff8616602082015233917fc8df8a39dfb257edbe0e208b38e68f815607b4ccf89bcf81ab0f212077aaac4e910160405180910390a25050505050565b61146761156c565b6001600160a01b0381166114e35760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161074f565b6106d6816115c6565b6114f461156c565b6001600360008282546115079190611f71565b90915550506003546000908152600460205260409020805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03949094169390931783556001830191909155600290910155565b600160ff1b60ff83901b1681175b92915050565b6000546001600160a01b031633146106b05760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161074f565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60015460ff16156116475760405163769dd35360e11b815260040160405180910390fd5b6001600160a01b038281166000818152600560208181526040808420815160608101835281546001600160601b038082168352600160601b8204600b0b83870152600160c01b90910467ffffffffffffffff1682850152968652939092529290558051915163a9059cbb60e01b8152858516600482015291909216602482015290917f0000000000000000000000000000000000000000000000000000000000000000169063a9059cbb906044016020604051808303816000875af1158015611714573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117389190611dd7565b61176e57604051637979dc8760e01b815260040161074f906020808252600490820152634f52414f60e01b604082015260600190565b6000808260200151600b0b131561180c575060208101516040516000906001600160a01b038516906001600160601b038416908381818185875af1925050503d80600081146117d9576040519150601f19603f3d011682016040523d82523d6000602084013e6117de565b606091505b505090508061180a57604051637979dc8760e01b8152602060048201526000602482015260440161074f565b505b8151604080516001600160a01b0386811682526001600160601b039384166020830152928416818301529051918616917ff63951c5ad6178f898b9a1b6e95d9943438fee8c9d6b29d6d1688921a5b773d29181900360600190a250505050565b60005a61138881101561187e57600080fd5b61138881039050846040820482031161189657600080fd5b50823b6118a257600080fd5b60008083516020850160008789f1949350505050565b604080516001600160a01b038581166024830152848116604483015260648083018590528351808403909101815260849092018352602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff166323b872dd60e01b17905283518085019094528084527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656490840152610f40928792916000916119659185169084906119fd565b90508051600014806119865750808060200190518101906119869190611dd7565b6119f85760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161074f565b505050565b6060611a0c8484600085611a14565b949350505050565b606082471015611a8c5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161074f565b600080866001600160a01b03168587604051611aa89190611fa8565b60006040518083038185875af1925050503d8060008114611ae5576040519150601f19603f3d011682016040523d82523d6000602084013e611aea565b606091505b5091509150611afb87838387611b06565b979650505050505050565b60608315611b75578251600003611b6e576001600160a01b0385163b611b6e5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161074f565b5081611a0c565b611a0c8383815115611b8a5781518083602001fd5b8060405162461bcd60e51b815260040161074f9190611fc4565b600060208284031215611bb657600080fd5b5035919050565b80356001600160a01b0381168114611bd457600080fd5b919050565b600060208284031215611beb57600080fd5b61069782611bbd565b6000806000806000858703610180811215611c0e57600080fd5b61010080821215611c1e57600080fd5b969896890135975050506101208701359461014088013594506101608801359350915050565b80356001600160601b0381168114611bd457600080fd5b600080600060608486031215611c7057600080fd5b611c7984611bbd565b9250611c8760208501611c44565b9150611c9560408501611c44565b90509250925092565b803563ffffffff81168114611bd457600080fd5b803567ffffffffffffffff81168114611bd457600080fd5b600080600060608486031215611cdf57600080fd5b611ce884611c9e565b9250611cf660208501611cb2565b9150611c9560408501611cb2565b60008060408385031215611d1757600080fd5b82359150611d2760208401611c9e565b90509250929050565b600080600060608486031215611d4557600080fd5b611d4e84611bbd565b95602085013595506040909401359392505050565b82358152602080840135908201526102808101604080850160408401376040608085016080840137611da560c0830160c0860180358252602090810135910152565b61010082018360005b600c811015611dcd578151835260209283019290910190600101611dae565b5050509392505050565b600060208284031215611de957600080fd5b8151801515811461069757600080fd5b634e487b7160e01b600052601160045260246000fd5b600067ffffffffffffffff821680611e2957611e29611df9565b6000190192915050565b6001600160601b03828116828216039080821115611e5357611e53611df9565b5092915050565b6001600160601b03818116838216019080821115611e5357611e53611df9565b600b82810b9082900b036b7fffffffffffffffffffffff1981126b7fffffffffffffffffffffff8213171561156657611566611df9565b6001600160601b03818116838216028082169190828114611ed457611ed4611df9565b505092915050565b600b81810b9083900b016b7fffffffffffffffffffffff81136b7fffffffffffffffffffffff198212171561156657611566611df9565b600067ffffffffffffffff808316818103611f3057611f30611df9565b6001019392505050565b808202811582820484141761156657611566611df9565b8181036000831280158383131683831282161715611e5357611e53611df9565b8082018082111561156657611566611df9565b60005b83811015611f9f578181015183820152602001611f87565b50506000910152565b60008251611fba818460208701611f84565b9190910192915050565b6020815260008251806020840152611fe3816040850160208701611f84565b601f01601f1916919091016040019291505056fea164736f6c6343000812000a";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "orao";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "seed";
            readonly type: "bytes32";
        }];
        readonly name: "AlreadyFulfilled";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "seed";
            readonly type: "bytes32";
        }];
        readonly name: "AlreadyRequested";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "have";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint32";
            readonly name: "want";
            readonly type: "uint32";
        }];
        readonly name: "GasLimitTooBig";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "symbol";
            readonly type: "string";
        }];
        readonly name: "InsufficientBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoVerifier";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "seed";
            readonly type: "bytes32";
        }];
        readonly name: "NotRequested";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotVerifiable";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "PaymentTooLarge";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "PendingRequestExists";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "Reentrant";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "maxGasLimit";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "oraoFee";
            readonly type: "uint64";
        }, {
            readonly indexed: false;
            readonly internalType: "uint64";
            readonly name: "baseFee";
            readonly type: "uint64";
        }];
        readonly name: "ConfigSet";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "seed";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "part1";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "part2";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint96";
            readonly name: "oraoPayment";
            readonly type: "uint96";
        }, {
            readonly indexed: false;
            readonly internalType: "uint96";
            readonly name: "basePayment";
            readonly type: "uint96";
        }, {
            readonly indexed: false;
            readonly internalType: "bool";
            readonly name: "success";
            readonly type: "bool";
        }];
        readonly name: "Fulfilled";
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
            readonly name: "client";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "seed";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint32";
            readonly name: "callbackGasLimit";
            readonly type: "uint32";
        }];
        readonly name: "Requested";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "subOwner";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint96";
            readonly name: "orao";
            readonly type: "uint96";
        }, {
            readonly indexed: false;
            readonly internalType: "uint96";
            readonly name: "base";
            readonly type: "uint96";
        }];
        readonly name: "SubscriptionCanceled";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "subOwner";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "orao";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "base";
            readonly type: "uint256";
        }];
        readonly name: "SubscriptionFunded";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "ORAO";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20";
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
            readonly internalType: "bytes32";
            readonly name: "seed";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "rx";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "ry";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes32";
            readonly name: "s";
            readonly type: "bytes32";
        }];
        readonly name: "fulfill";
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
        readonly inputs: readonly [];
        readonly name: "getCurrentVerifierIdentity";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getCurrentVerifierLocation";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "seed";
            readonly type: "bytes32";
        }];
        readonly name: "getRequest";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "verifier";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes32";
                readonly name: "part1";
                readonly type: "bytes32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "part2";
                readonly type: "bytes32";
            }, {
                readonly internalType: "address";
                readonly name: "sender";
                readonly type: "address";
            }, {
                readonly internalType: "uint32";
                readonly name: "callbackGasLimit";
                readonly type: "uint32";
            }];
            readonly internalType: "struct OraoVRF.Request";
            readonly name: "";
            readonly type: "tuple";
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
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "getVerifierIdentity";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }];
        readonly name: "getVerifierLocation";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "uint96";
            readonly name: "orao";
            readonly type: "uint96";
        }, {
            readonly internalType: "uint96";
            readonly name: "base";
            readonly type: "uint96";
        }];
        readonly name: "oracleWithdraw";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "subOwner";
            readonly type: "address";
        }];
        readonly name: "ownerCancelSubscription";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
        readonly inputs: readonly [];
        readonly name: "renounceOwnership";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "maxGasLimit";
            readonly type: "uint32";
        }, {
            readonly internalType: "uint64";
            readonly name: "oraoFee";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "baseFee";
            readonly type: "uint64";
        }];
        readonly name: "setConfig";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "location";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "ax";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "ay";
            readonly type: "uint256";
        }];
        readonly name: "setVerifier";
        readonly outputs: readonly [];
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
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "withdrawableBaseTokens";
        readonly outputs: readonly [{
            readonly internalType: "uint96";
            readonly name: "";
            readonly type: "uint96";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "withdrawableOraoTokens";
        readonly outputs: readonly [{
            readonly internalType: "uint96";
            readonly name: "";
            readonly type: "uint96";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): OraoVRFInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): OraoVRF;
}
export {};

import type { PromiseOrValue } from "../../common";
import type { OraoVRF, OraoVRFInterface } from "../../contracts/OraoVRF";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, ContractFactory, Overrides } from "ethers";
type OraoVRFConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class OraoVRF__factory extends ContractFactory {
    constructor(...args: OraoVRFConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<OraoVRF>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): OraoVRF;
    connect(signer: Signer): OraoVRF__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061001961001e565b6100dd565b600054610100900460ff161561008a5760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff908116146100db576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b611f04806100ec6000396000f3fe60806040526004361061012a5760003560e01c806393d81d58116100ab578063c3f909d41161006f578063c3f909d4146103d3578063c4d66de81461043b578063dbc3733f1461045b578063e453e8b01461046e578063f2fde38b1461048e578063fb1e61ca146104ae57600080fd5b806393d81d581461032a578063a07873f11461034a578063a552f98f1461036a578063bccdf525146103a0578063c1060653146103c057600080fd5b80635437988d116100f25780635437988d1461029557806354f0edf0146102b7578063715018a6146102d75780637bf642ca146102ec5780638da5cb5b1461030c57600080fd5b80630cbebc241461012f5780632b7ac3f3146101c15780634459ccbc146101f957806346657fe9146102295780634d8ed33f14610247575b600080fd5b34801561013b57600080fd5b5061018b61014a366004611a9c565b6001600160a01b03166000908152606960205260409020546001600160601b03811691600160601b8204600b0b91600160c01b90046001600160401b031690565b604080516001600160601b039094168452600b9290920b60208401526001600160401b0316908201526060015b60405180910390f35b3480156101cd57600080fd5b506068546101e1906001600160a01b031681565b6040516001600160a01b0390911681526020016101b8565b34801561020557600080fd5b50610219610214366004611a9c565b61057d565b60405190151581526020016101b8565b34801561023557600080fd5b506068546001600160a01b03166101e1565b34801561025357600080fd5b5061027d610262366004611a9c565b606a602052600090815260409020546001600160601b031681565b6040516001600160601b0390911681526020016101b8565b3480156102a157600080fd5b506102b56102b0366004611a9c565b6105aa565b005b3480156102c357600080fd5b506102b56102d2366004611abe565b6105d4565b3480156102e357600080fd5b506102b5610b23565b3480156102f857600080fd5b506102b5610307366004611a9c565b610b37565b34801561031857600080fd5b506033546001600160a01b03166101e1565b34801561033657600080fd5b506102b5610345366004611a9c565b610b4c565b34801561035657600080fd5b506102b5610365366004611b24565b610ba1565b34801561037657600080fd5b5061027d610385366004611a9c565b606b602052600090815260409020546001600160601b031681565b3480156103ac57600080fd5b506102b56103bb366004611b92565b610df5565b6102b56103ce366004611bcc565b610ecc565b3480156103df57600080fd5b5061040f60665463ffffffff610100820416916001600160601b03600160281b8304811692600160881b90041690565b6040805163ffffffff90941684526001600160601b0392831660208501529116908201526060016101b8565b34801561044757600080fd5b506102b5610456366004611a9c565b610fdf565b6102b5610469366004611be5565b61110c565b34801561047a57600080fd5b506065546101e1906001600160a01b031681565b34801561049a57600080fd5b506102b56104a9366004611a9c565b6113c3565b3480156104ba57600080fd5b5061053b6104c9366004611bcc565b6040805160808082018352600080835260208084018290528385018290526060938401829052948152606785528390208351918201845280546001600160a01b0316825260018101549482019490945260028401549281019290925260039092015463ffffffff169181019190915290565b6040516101b8919081516001600160a01b03168152602080830151908201526040808301519082015260609182015163ffffffff169181019190915260800190565b6001600160a01b0316600090815260696020526040902054600160c01b90046001600160401b0316151590565b6105b2611439565b606880546001600160a01b0319166001600160a01b0392909216919091179055565b6068546001600160a01b03166105fd576040516379e2e00360e01b815260040160405180910390fd5b60665460ff16156106215760405163769dd35360e11b815260040160405180910390fd5b600082815260676020526040902080546001600160a01b031661065f57604051634d0e071d60e01b8152600481018490526024015b60405180910390fd5b60018101541561068557604051637170b34f60e01b815260048101849052602401610656565b606854604080516080808201835286901c81526fffffffffffffffffffffffffffffffff861660208083019190915285358284015285013560608201529051633ccd7d3b60e11b81526001600160a01b039092169163799afa76916106ef91889190600401611c27565b602060405180830381865afa15801561070c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107309190611c9b565b61074d57604051632e52bb5760e21b815260040160405180910390fd5b6040805183356020820152016040516020818303038152906040528051906020012081600101819055508160016002811061078a5761078a611c11565b60200201356040516020016107a191815260200190565b60408051808303601f190181529181528151602092830120600284015582546001600160a01b03166000908152606990925290208054600160c01b90046001600160401b03168160186107f383611cd3565b91906101000a8154816001600160401b0302191690836001600160401b0316021790555050600080606660000160059054906101000a90046001600160601b03166001600160601b03166000108015610865575082546066546001600160601b03918216600160281b90910490911611155b156109015760665483546001600160601b03600160281b909204821693508391859160009161089691859116611cf6565b82546101009290920a6001600160601b03818102199093169183160217909155336000908152606a60205260408120805486945090926108d891859116611d1d565b92506101000a8154816001600160601b0302191690836001600160601b0316021790555061099c565b506066548254600160881b9091046001600160601b03169081908490600c90610935908490600160601b9004600b0b611d3d565b82546101009290920a6001600160601b03818102199093169183160217909155336000908152606b602052604081208054859450909261097791859116611d1d565b92506101000a8154816001600160601b0302191690836001600160601b031602179055505b600384015460009063ffffffff1615610ab45760038501546000906109c8903a9063ffffffff16611d7a565b855490915081908690600c906109e9908490600160601b9004600b0b611d3d565b92506101000a8154816001600160601b030219169083600b0b6001600160601b031602179055508083610a1c9190611d1d565b600187810154600289015460408051602481018e905260448101939093526064808401929092528051808403909201825260849092019091526020810180516001600160e01b031663576a3e3760e11b1790526066805460ff191690921790915560038801548854929550600092610aa49163ffffffff16906001600160a01b031683611493565b6066805460ff1916905593505050505b600185015460028601546040805192835260208301919091526001600160601b03858116838301528416606083015282151560808301525188917fa781c8d5ebcb7f720024052b5d6d97e225333d2f5dd70628f9d1c834cca24a6c919081900360a00190a25050505050505050565b610b2b611439565b610b3560006114df565b565b610b3f611439565b610b498182611531565b50565b60665460ff1615610b705760405163769dd35360e11b815260040160405180910390fd5b610b793361057d565b15610b9757604051631685ecdd60e31b815260040160405180910390fd5b610b493382611531565b60665460ff1615610bc55760405163769dd35360e11b815260040160405180910390fd5b336000908152606a60205260409020546001600160601b0380841691161080610c085750336000908152606b60205260409020546001600160601b038083169116105b15610c265760405163e80fa38160e01b815260040160405180910390fd5b336000908152606a602052604081208054849290610c4e9084906001600160601b0316611cf6565b82546101009290920a6001600160601b0381810219909316918316021790915560655460405163a9059cbb60e01b81526001600160a01b03878116600483015292861660248201529116915063a9059cbb906044016020604051808303816000875af1158015610cc2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ce69190611c9b565b610d1c57604051637979dc8760e01b8152600401610656906020808252600490820152634f52414f60e01b604082015260600190565b336000908152606b602052604081208054839290610d449084906001600160601b0316611cf6565b92506101000a8154816001600160601b0302191690836001600160601b031602179055506000836001600160a01b0316826001600160601b031660405160006040518083038185875af1925050503d8060008114610dbe576040519150601f19603f3d011682016040523d82523d6000602084013e610dc3565b606091505b5050905080610def57604051637979dc8760e01b81526020600482015260006024820152604401610656565b50505050565b610dfd611439565b604080516080810182526000815263ffffffff851660208083018290526001600160401b0386811684860181905290861660609485018190526066805470ffffffffffffffffffffffffffffffffff1916610100860270ffffffffffffffffffffffff0000000000191617600160281b8402176bffffffffffffffffffffffff60881b1916600160881b8302179055855193845291830152928101929092527fa289f171697cbfc1c5998f003d5cdf58e3f69c23746189757934a756daae88cb910160405180910390a1505050565b60665460ff1615610ef05760405163769dd35360e11b815260040160405180910390fd5b606554610f08906001600160a01b031632308461175d565b3360009081526069602052604081208054839290610f309084906001600160601b0316611d1d565b82546001600160601b039182166101009390930a9283029190920219909116179055503360009081526069602052604090208054349190600c90610f7f908490600160601b9004600b0b611da5565b82546001600160601b039182166101009390930a9283029190920219909116179055506040805182815234602082015233917fb3abbf202f180f33d8c665604028b8c2bc6db0b430eee642e6a87c332ba9df3a910160405180910390a250565b600054610100900460ff1615808015610fff5750600054600160ff909116105b806110195750303b158015611019575060005460ff166001145b61107c5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610656565b6000805460ff19166001179055801561109f576000805461ff0019166101001790555b6110a76117b7565b606580546001600160a01b0319166001600160a01b0384161790558015611108576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b60665460ff16156111305760405163769dd35360e11b815260040160405180910390fd5b6068546001600160a01b0316611159576040516379e2e00360e01b815260040160405180910390fd5b60665463ffffffff610100909104811690821611156111a557606654604051637aebf00f60e11b815263ffffffff80841660048301526101009092049091166024820152604401610656565b600082815260676020526040902080546001600160a01b0316156111df57604051631d81b6d360e31b815260048101849052602401610656565b8054336001600160a01b03199091168117825560038201805463ffffffff191663ffffffff851617905560009081526069602052604090208054600160c01b90046001600160401b031681601861123583611ddc565b91906101000a8154816001600160401b0302191690836001600160401b03160217905550503481600001600c8282829054906101000a9004600b0b61127a9190611da5565b92506101000a8154816001600160601b030219169083600b0b6001600160601b0316021790555060003a8463ffffffff166112b59190611e02565b82546112cb9190600160601b9004600b0b611e19565b9050600081121561130e57604051637979dc8760e01b815260206004820152600c60248201526b63616c6c6261636b2067617360a01b6044820152606401610656565b60665482546001600160601b03600160281b909204821691161080156113485750606654600160881b90046001600160601b0316600b0b81125b1561137c57604051637979dc8760e01b815260206004820152600360248201526246656560e81b6044820152606401610656565b6040805186815263ffffffff8616602082015233917fc8df8a39dfb257edbe0e208b38e68f815607b4ccf89bcf81ab0f212077aaac4e910160405180910390a25050505050565b6113cb611439565b6001600160a01b0381166114305760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610656565b610b49816114df565b6033546001600160a01b03163314610b355760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610656565b60005a6113888110156114a557600080fd5b6113888103905084604082048203116114bd57600080fd5b50823b6114c957600080fd5b60008083516020850160008789f1949350505050565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60665460ff16156115555760405163769dd35360e11b815260040160405180910390fd5b6001600160a01b038281166000818152606960208181526040808420815160608101835281546001600160601b038082168352600160601b8204600b0b83870152600160c01b9091046001600160401b031682850152968652939092529290556065548151925163a9059cbb60e01b8152868616600482015292909316602483015292919091169063a9059cbb906044016020604051808303816000875af1158015611605573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116299190611c9b565b61165f57604051637979dc8760e01b8152600401610656906020808252600490820152634f52414f60e01b604082015260600190565b6000808260200151600b0b13156116fd575060208101516040516000906001600160a01b038516906001600160601b038416908381818185875af1925050503d80600081146116ca576040519150601f19603f3d011682016040523d82523d6000602084013e6116cf565b606091505b50509050806116fb57604051637979dc8760e01b81526020600482015260006024820152604401610656565b505b8151604080516001600160a01b0386811682526001600160601b039384166020830152928416818301529051918616917ff63951c5ad6178f898b9a1b6e95d9943438fee8c9d6b29d6d1688921a5b773d29181900360600190a250505050565b604080516001600160a01b0385811660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b179052610def9085906117e6565b600054610100900460ff166117de5760405162461bcd60e51b815260040161065690611e39565b610b356118c0565b600061183b826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166118f09092919063ffffffff16565b905080516000148061185c57508080602001905181019061185c9190611c9b565b6118bb5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610656565b505050565b600054610100900460ff166118e75760405162461bcd60e51b815260040161065690611e39565b610b35336114df565b60606118ff8484600085611907565b949350505050565b6060824710156119685760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610656565b600080866001600160a01b031685876040516119849190611ea8565b60006040518083038185875af1925050503d80600081146119c1576040519150601f19603f3d011682016040523d82523d6000602084013e6119c6565b606091505b50915091506119d7878383876119e2565b979650505050505050565b60608315611a51578251600003611a4a576001600160a01b0385163b611a4a5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610656565b50816118ff565b6118ff8383815115611a665781518083602001fd5b8060405162461bcd60e51b81526004016106569190611ec4565b80356001600160a01b0381168114611a9757600080fd5b919050565b600060208284031215611aae57600080fd5b611ab782611a80565b9392505050565b600080600083850361016080821215611ad657600080fd5b61010080831215611ae657600080fd5b8695508501359350808501871015611afd57600080fd5b5050610120840190509250925092565b80356001600160601b0381168114611a9757600080fd5b600080600060608486031215611b3957600080fd5b611b4284611a80565b9250611b5060208501611b0d565b9150611b5e60408501611b0d565b90509250925092565b803563ffffffff81168114611a9757600080fd5b80356001600160401b0381168114611a9757600080fd5b600080600060608486031215611ba757600080fd5b611bb084611b67565b9250611bbe60208501611b7b565b9150611b5e60408501611b7b565b600060208284031215611bde57600080fd5b5035919050565b60008060408385031215611bf857600080fd5b82359150611c0860208401611b67565b90509250929050565b634e487b7160e01b600052603260045260246000fd5b82358152602080840135908201526101808101604080850160408401376040608085016080840137611c6960c0830160c0860180358252602090810135910152565b61010082018360005b6004811015611c91578151835260209283019290910190600101611c72565b5050509392505050565b600060208284031215611cad57600080fd5b81518015158114611ab757600080fd5b634e487b7160e01b600052601160045260246000fd5b60006001600160401b03821680611cec57611cec611cbd565b6000190192915050565b6001600160601b03828116828216039080821115611d1657611d16611cbd565b5092915050565b6001600160601b03818116838216019080821115611d1657611d16611cbd565b600b82810b9082900b036b7fffffffffffffffffffffff1981126b7fffffffffffffffffffffff82131715611d7457611d74611cbd565b92915050565b6001600160601b03818116838216028082169190828114611d9d57611d9d611cbd565b505092915050565b600b81810b9083900b016b7fffffffffffffffffffffff81136b7fffffffffffffffffffffff1982121715611d7457611d74611cbd565b60006001600160401b03808316818103611df857611df8611cbd565b6001019392505050565b8082028115828204841417611d7457611d74611cbd565b8181036000831280158383131683831282161715611d1657611d16611cbd565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60005b83811015611e9f578181015183820152602001611e87565b50506000910152565b60008251611eba818460208701611e84565b9190910192915050565b6020815260008251806020840152611ee3816040850160208701611e84565b601f01601f1916919091016040019291505056fea164736f6c6343000812000a";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
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
            readonly indexed: false;
            readonly internalType: "uint8";
            readonly name: "version";
            readonly type: "uint8";
        }];
        readonly name: "Initialized";
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
            readonly internalType: "bytes32[2]";
            readonly name: "signature";
            readonly type: "bytes32[2]";
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
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "seed";
            readonly type: "bytes32";
        }];
        readonly name: "getRequest";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "sender";
                readonly type: "address";
            }, {
                readonly internalType: "bytes32";
                readonly name: "part1";
                readonly type: "bytes32";
            }, {
                readonly internalType: "bytes32";
                readonly name: "part2";
                readonly type: "bytes32";
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
        readonly inputs: readonly [];
        readonly name: "getVerifier";
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
            readonly name: "orao";
            readonly type: "address";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
            readonly name: "_verifier";
            readonly type: "address";
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
        readonly inputs: readonly [];
        readonly name: "verifier";
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

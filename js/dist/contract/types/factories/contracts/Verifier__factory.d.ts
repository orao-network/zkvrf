import type { PromiseOrValue } from "../../common";
import type { Verifier, VerifierInterface } from "../../contracts/Verifier";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, ContractFactory, Overrides } from "ethers";
declare type VerifierConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Verifier__factory extends ContractFactory {
    constructor(...args: VerifierConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<Verifier>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): Verifier;
    connect(signer: Signer): Verifier__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061148d806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80636667059914610030575b600080fd5b61004361003e366004611325565b610057565b604051901515815260200160405180910390f35b60408051600c8082526101a08201909252600091829190602082016101808036833701905050905060005b600c8110156100d1578381600c811061009d5761009d6113dc565b60200201518282815181106100b4576100b46113dc565b6020908102919091010152806100c981611408565b915050610082565b506100dc81856100f9565b6000036100ed5760019150506100f3565b60009150505b92915050565b60007f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f00000018161012561027c565b90508060800151518551600161013b9190611421565b1461014557600080fd5b604080518082019091526000808252602082018190525b86518110156101f35783878281518110610178576101786113dc565b60200260200101511061018a57600080fd5b6101df826101da85608001518460016101a39190611421565b815181106101b3576101b36113dc565b60200260200101518a85815181106101cd576101cd6113dc565b6020026020010151610b35565b610b93565b9150806101eb81611408565b91505061015c565b5061021c81836080015160008151811061020f5761020f6113dc565b6020026020010151610b93565b90506102608560000151866020015161023484610be9565b85604001516102468a60400151610be9565b6060880151885161025690610be9565b8960200151610c88565b61027057600193505050506100f3565b50600095945050505050565b6102846110f4565b6040805180820182527f09e75a09022503b98c69d395d203ade096b8e88660145f53294890babb871ef781527f02338fda78de0bde83e3db8b4a2a9f0728122ebe7aae80a9ae12b7e100bf27146020808301919091529083528151608080820184527f0c6821918bed5d22f819265a8db53122da38c4d9d29b929fbdda93d4a6f16c438285019081527f1505fc78b01a9d11a778e062b96d7e4304848c30c179b8928b96d3baa279c4a8606080850191909152908352845180860186527f2b400b9d5e27b208fe180508d4d67015f1ff7e7a906c9d01f5888f161ed7617b81527f030d4176134c85175ebde159f92e0523187b1b99d397ce135f93fc2a35d75be9818601528385015285840192909252835180820185527f24672308c043d3383600bf1e0ceed960c14981da4504496a096f2f7a22475cb48186019081527f26c945ff42da669da507fd882b08038019a806d507166ac7620a77d85981df11828501528152845180860186527f11bc06263ea0334049808de307a5df3e142d8c0792d9bcad8acf65c1837824d781527f0b3abeafb93b7142f21ffdffd7b6ed1f6a1c2e0c5d762d773b57927bd4091bfa818601528185015285850152835190810184527f0fe85b190d158daea7d4a65690269c3d4190ada27b7aa0362f978968a10411228185019081527f23f46df1c98a1e042f38a9a0511f779a0ae839a7f8a4cd0c909cbd894fda29e5828401528152835180850185527f10407c85ba55f97bb3fa9b875c7d187526bd2a705e4c4141ff215fee5e47676c81527f0f02226f94ffc005026aca528d3be53fca948d50859bc64b32d59cf949b5ee928185015281840152908401528151600d8082526101c08201909352919082015b604080518082019091526000808252602082015281526020019060019003908161050057505060808201908152604080518082019091527f0690469854fcaec136b965caff632541c7eae3810fcb8d894b5e63623efadfe681527f22423f2a7d77630dd3c6cb2d20b4e881df244183c792fb924ed37ec5d3c743dd602082015290518051600090610593576105936113dc565b602002602001018190525060405180604001604052807f1c24b51462cd6ac6925278c396728f70bce31d02bf3f9eeec3a591cf2ab637fc81526020017f27e8f711cf729e90ee569b78d086ffb4c5ccc7edad7ae5fa1b2a82b61208a881815250816080015160018151811061060a5761060a6113dc565b602002602001018190525060405180604001604052807f2e18831155146940335db53cd4ce2208510e64aae477bc4dc64745f5e38ec29c81526020017f0a1a1e01bd3e25ee3a6bf2a2dd43c5ad34768574de2baa5570403a76217a87018152508160800151600281518110610681576106816113dc565b602002602001018190525060405180604001604052807f14251173e0800c646eb08c3a4400184c32bfab5c17be6acb77fcc12b89f04fa881526020017f0258507774b376951ccd08349db8a043f516b5cdcdd3161635a93a1e10289f5081525081608001516003815181106106f8576106f86113dc565b602002602001018190525060405180604001604052807f2c7a071e4610bc0deb7a12da4d1b7fc75011d33d540af8622605eb3df8a2c7bc81526020017f21e537b8d4555da105a7809cf617b5644083a143ccba28c89c26fcfc5e510b66815250816080015160048151811061076f5761076f6113dc565b602002602001018190525060405180604001604052807f11cd53a5d8a00bb1f5fc5064c83c047c1921d7a04b5948134f41d98d94b0e42581526020017f19ab5bb03e42ceadda7ae5e74aa60a320b9db582b219972f0462188af3856c1781525081608001516005815181106107e6576107e66113dc565b602002602001018190525060405180604001604052807f0a2937af4957050302be5d78a152d665443c54679b2819861cc54599fb2cc6cc81526020017f27304733c09c8183801ba0e959137b3dac1796f4e0139e23648077ca1b7db237815250816080015160068151811061085d5761085d6113dc565b602002602001018190525060405180604001604052807f132b2b566c7897456af1728f3e64cd05bb4805dd86ee1122f396bffedbf08c7081526020017f0dd8a01b3e085ea37ccfeb6832d95a1228f039e259893661f2e60c3fd2d4bd6681525081608001516007815181106108d4576108d46113dc565b602002602001018190525060405180604001604052807f1e4849d4117f8d5af77dcde63fb55e87ea47d34fe60fbc7c5ab58e264dd5020c81526020017f08977855775a781809799c8c028e9d6077d35b41ee264f3d0ea9bc894287af1f815250816080015160088151811061094b5761094b6113dc565b602002602001018190525060405180604001604052807f1e9becccb74f9c417c626d873783c9dc23e5ca8678b78418bce2f44d2a56d7f481526020017f0aba36b39c644f4f5e9ca3d6718e5f80922fe311d05499b78ed7143b822489f981525081608001516009815181106109c2576109c26113dc565b602002602001018190525060405180604001604052807f0c9245e6d0bc7d72f0d634ef203257ecf15cce252b7e5186a2c5c343fc021fdf81526020017f29d9c5ded3f13e2910fde1847bbd88d101ad713de8eb7b2f852d69cf9b33cc108152508160800151600a81518110610a3957610a396113dc565b602002602001018190525060405180604001604052807f2b8b74def615676c083c380ad8e40656b28df9dc1b1844e3726128eed26a616d81526020017f287d9657c1c5aee7a3a5a8acc8ba493c89be9f79d0e7c7b8789a3c96768365ec8152508160800151600b81518110610ab057610ab06113dc565b602002602001018190525060405180604001604052807f0495a8e4fb0359feee73615e1a643ad0d883f350578b8bf05b4746cd0b7e24c281526020017f267cac018940de19dccce77efe46c55fa0934838f4ae410b5736b241c39727958152508160800151600c81518110610b2757610b276113dc565b602002602001018190525090565b6040805180820190915260008082526020820152610b51611145565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa90508080610b8057fe5b5080610b8b57600080fd5b505092915050565b6040805180820190915260008082526020820152610baf611163565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa90508080610b8057fe5b604080518082019091526000808252602082015281517f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4790158015610c3057506020830151155b15610c505750506040805180820190915260008082526020820152919050565b604051806040016040528084600001518152602001828560200151610c759190611434565b610c7f9084611456565b90529392505050565b60408051600480825260a08201909252600091829190816020015b6040805180820190915260008082526020820152815260200190600190039081610ca357505060408051600480825260a0820190925291925060009190602082015b610ced611181565b815260200190600190039081610ce55790505090508a82600081518110610d1657610d166113dc565b60200260200101819052508882600181518110610d3557610d356113dc565b60200260200101819052508682600281518110610d5457610d546113dc565b60200260200101819052508482600381518110610d7357610d736113dc565b60200260200101819052508981600081518110610d9257610d926113dc565b60200260200101819052508781600181518110610db157610db16113dc565b60200260200101819052508581600281518110610dd057610dd06113dc565b60200260200101819052508381600381518110610def57610def6113dc565b6020026020010181905250610e048282610e13565b9b9a5050505050505050505050565b60008151835114610e2357600080fd5b82516000610e32826006611469565b905060008167ffffffffffffffff811115610e4f57610e4f6111e2565b604051908082528060200260200182016040528015610e78578160200160208202803683370190505b50905060005b838110156110b357868181518110610e9857610e986113dc565b60200260200101516000015182826006610eb29190611469565b610ebd906000611421565b81518110610ecd57610ecd6113dc565b602002602001018181525050868181518110610eeb57610eeb6113dc565b60200260200101516020015182826006610f059190611469565b610f10906001611421565b81518110610f2057610f206113dc565b602002602001018181525050858181518110610f3e57610f3e6113dc565b60209081029190910181015151015182610f59836006611469565b610f64906002611421565b81518110610f7457610f746113dc565b602002602001018181525050858181518110610f9257610f926113dc565b6020908102919091010151515182610fab836006611469565b610fb6906003611421565b81518110610fc657610fc66113dc565b602002602001018181525050858181518110610fe457610fe46113dc565b602002602001015160200151600160028110611002576110026113dc565b602002015182611013836006611469565b61101e906004611421565b8151811061102e5761102e6113dc565b60200260200101818152505085818151811061104c5761104c6113dc565b60200260200101516020015160006002811061106a5761106a6113dc565b60200201518261107b836006611469565b611086906005611421565b81518110611096576110966113dc565b6020908102919091010152806110ab81611408565b915050610e7e565b506110bc6111a6565b6000602082602086026020860160086107d05a03fa905080806110db57fe5b50806110e657600080fd5b505115159695505050505050565b6040805160e08101909152600060a0820181815260c083019190915281526020810161111e611181565b815260200161112b611181565b8152602001611138611181565b8152602001606081525090565b60405180606001604052806003906020820280368337509192915050565b60405180608001604052806004906020820280368337509192915050565b60405180604001604052806111946111c4565b81526020016111a16111c4565b905290565b60405180602001604052806001906020820280368337509192915050565b60405180604001604052806002906020820280368337509192915050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff8111828210171561121b5761121b6111e2565b60405290565b6040516060810167ffffffffffffffff8111828210171561121b5761121b6111e2565b60006040828403121561125657600080fd5b61125e6111f8565b9050813581526020820135602082015292915050565b600060405161018080820182811067ffffffffffffffff8211171561129b5761129b6111e2565b60405290915081908301848111156112b257600080fd5b835b818110156112cc5780358352602092830192016112b4565b50505092915050565b600082601f8301126112e657600080fd5b6112ee6111f8565b80604084018581111561130057600080fd5b845b8181101561131a578035845260209384019301611302565b509095945050505050565b60008082840361028081121561133a57600080fd5b6101008082121561134a57600080fd5b611352611221565b61135c8787611244565b81526080603f198401121561137057600080fd5b6113786111f8565b925061138787604088016112d5565b835261139687608088016112d5565b60208401528260208201526113ae8760c08801611244565b6040820152935061011f850186136113c557600080fd5b6113d186828701611274565b925050509250929050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60006001820161141a5761141a6113f2565b5060010190565b808201808211156100f3576100f36113f2565b60008261145157634e487b7160e01b600052601260045260246000fd5b500690565b818103818111156100f3576100f36113f2565b80820281158282048414176100f3576100f36113f256fea164736f6c6343000812000a";
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
                readonly internalType: "struct Pairing.G1Point";
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
                readonly internalType: "struct Pairing.G2Point";
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
                readonly internalType: "struct Pairing.G1Point";
                readonly name: "c";
                readonly type: "tuple";
            }];
            readonly internalType: "struct Verifier.Proof";
            readonly name: "proof";
            readonly type: "tuple";
        }, {
            readonly internalType: "uint256[12]";
            readonly name: "input";
            readonly type: "uint256[12]";
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
    static createInterface(): VerifierInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Verifier;
}
export {};
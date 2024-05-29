/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  OraoVRFConsumerBase,
  OraoVRFConsumerBaseInterface,
} from "../../contracts/OraoVRFConsumerBase";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "have",
        type: "address",
      },
      {
        internalType: "address",
        name: "want",
        type: "address",
      },
    ],
    name: "OnlyCoordinatorCanFulfill",
    type: "error",
  },
  {
    inputs: [],
    name: "calcGasUsed",
    outputs: [
      {
        internalType: "uint256",
        name: "gasUsed",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gasPrice",
        type: "uint256",
      },
    ],
    name: "calcTxValue",
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
    inputs: [],
    name: "callbackGasLimit",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
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
    ],
    name: "cancelSubscription",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "orao",
        type: "uint256",
      },
    ],
    name: "fundSubscription",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getSubscription",
    outputs: [
      {
        internalType: "uint96",
        name: "orao",
        type: "uint96",
      },
      {
        internalType: "int96",
        name: "base",
        type: "int96",
      },
      {
        internalType: "uint64",
        name: "pendingReqCount",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingRequestExists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "seed",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "part1",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "part2",
        type: "bytes32",
      },
    ],
    name: "rawFulfillRandomness",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "seed",
        type: "bytes32",
      },
    ],
    name: "request",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

export class OraoVRFConsumerBase__factory {
  static readonly abi = _abi;
  static createInterface(): OraoVRFConsumerBaseInterface {
    return new utils.Interface(_abi) as OraoVRFConsumerBaseInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OraoVRFConsumerBase {
    return new Contract(address, _abi, signerOrProvider) as OraoVRFConsumerBase;
  }
}

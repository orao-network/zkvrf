import { IChainConfig, IEvmNetworkConfig } from "./types";

export const ORAO_VRF_ZIRCUIT_MAINNET_CONFIG: IEvmNetworkConfig = {
    chain: "zircuit",
    chainId: 48900,
    networkName: "Zircuit Mainnet",
    address: "",        //TODO: update
    oraoAddress: "",    //TODO: update
    metadata: {
        defaultRpcUrl: "https://zircuit-mainnet.drpc.org",
        defaultExplorer: "https://explorer.zircuit.com/",
    },
};

export const ORAO_VRF_ZIRCUIT_TESTNET_CONFIG: IEvmNetworkConfig = {
    chain: "zircuit",
    chainId: 48899,
    networkName: "Zircuit Sepolia",
    address: "0x3946f7B2811145178943d5245E8342762Feff8C5",
    oraoAddress: "0x3828Bc0EF04a4D1Ff7FB13259541271fF3BB5F18",
    metadata: {
        defaultRpcUrl: "https://zircuit1.p2pify.com",
        defaultExplorer: "https://explorer.testnet.zircuit.com/",
    },
};

/**
 @defaultValue the default Zircuit configuration

  ```json
  {
  "mainnet": {
    "chain": "zircuit",
    "chainId": 48900,
    "networkName": "Zircuit Mainnet",
    "address": "",
    "oraoAddress": "",
    "metadata": {
      "defaultRpcUrl": "https://zircuit-mainnet.drpc.org",
      "defaultExplorer": "https://explorer.zircuit.com/"
    },
  },
  "testnet": {
    "chain": "zircuit",
    "chainId": 48899,
    "networkName": "Zircuit Sepolia",
    "address": "0x3946f7B2811145178943d5245E8342762Feff8C5",
    "oraoAddress": "0x3828Bc0EF04a4D1Ff7FB13259541271fF3BB5F18",
    "metadata": {
      "defaultRpcUrl": "https://zircuit1.p2pify.com",
      "defaultExplorer": "https://explorer.testnet.zircuit.com/"
    },
  }
  ```
 */
export const ORAO_VRF_ZIRCUIT_CONFIG: IChainConfig = {
    mainnet: ORAO_VRF_ZIRCUIT_MAINNET_CONFIG,
    testnet: ORAO_VRF_ZIRCUIT_TESTNET_CONFIG,
};

import { IChainConfig, IEvmNetworkConfig } from "./types";

export const ORAO_VRF_POLYGON_MAINNET_CONFIG: IEvmNetworkConfig = {
    chain: "polygon",
    chainId: 137,
    networkName: "Mainnet",
    address: "0xE30582eBD4A678065a61975Da113bD2e7aE38679",
    oraoAddress: "0xE30582eBD4A678065a61975Da113bD2e7aE38679",
    metadata: {
        defaultRpcUrl: "https://polygon-rpc.com",
        defaultExplorer: "https://polygonscan.com",
    },
};

export const ORAO_VRF_POLYGON_TESTNET_CONFIG: IEvmNetworkConfig = {
    chain: "polygon",
    chainId: 80001,
    networkName: "Mumbai",
    address: "0xA3c9F9F6E40282e1366bdC01C1D30F7F7F58888e",
    oraoAddress: "0xA3c9F9F6E40282e1366bdC01C1D30F7F7F58888e",
    metadata: {
        defaultRpcUrl: "https://rpc-mumbai.polygon.technology",
        defaultExplorer: "https://mumbai.polygonscan.com",
    },
};

/**
 @defaultValue the default Polygon configuration

  ```json
  {
  "mainnet": {
    "chain": "polygon",
    "chainId": 137,
    "networkName": "Mainnet",
    "address": "0xE30582eBD4A678065a61975Da113bD2e7aE38679",
    "oraoAddress": "0xE30582eBD4A678065a61975Da113bD2e7aE38679",
    "metadata": {
      "defaultRpcUrl": "https://arb1.arbitrum.io/rpc",
      "defaultExplorer": "https://arbiscan.io"
    },
  },
  "testnet": {
    "chain": "polygon",
    "chainId": 80001,
    "networkName": "Mumbai",
    "address": "0xA3c9F9F6E40282e1366bdC01C1D30F7F7F58888e",
    "oraoAddress": "0xA3c9F9F6E40282e1366bdC01C1D30F7F7F58888e",
    "metadata": {
      "defaultRpcUrl": "https://goerli-rollup.arbitrum.io/rpc",
      "defaultExplorer": "https://goerli.arbiscan.io"
    },
  }
  ```
 */
export const ORAO_VRF_POLYGON_CONFIG: IChainConfig = {
    mainnet: ORAO_VRF_POLYGON_MAINNET_CONFIG,
    testnet: ORAO_VRF_POLYGON_TESTNET_CONFIG,
};

import { IChainConfig, IEvmNetworkConfig } from "./types";

export const ORAO_VRF_AVALANCHE_MAINNET_CONFIG: IEvmNetworkConfig = {
    chain: "avalanche",
    chainId: 43114,
    networkName: "Avalanche Mainnet",
    address: "",        //TODO: update
    oraoAddress: "",    //TODO: update
    metadata: {
        defaultRpcUrl: "https://api.avax.network/ext/bc/C/rpc",
        defaultExplorer: "https://subnets.avax.network/c-chain",
    },
};

export const ORAO_VRF_AVALANCHE_TESTNET_CONFIG: IEvmNetworkConfig = {
    chain: "avalanche",
    chainId: 43113,
    networkName: "Avalanche Fuji",
    address: "0x35d0a63c248490810705e895d1Ba4fD8fF454a19",
    oraoAddress: "0x3828Bc0EF04a4D1Ff7FB13259541271fF3BB5F18",
    metadata: {
        defaultRpcUrl: "https://api.avax-test.network/ext/bc/C/rpc",
        defaultExplorer: "https://subnets-test.avax.network/c-chain",
    },
};

/**
 @defaultValue the default Arbitrum configuration

  ```json
  {
  "mainnet": {
    "chain": "avalanche",
    "chainId": 43114,
    "networkName": "Avalanche Mainnet",
    "address": "",
    "oraoAddress": "",
    "metadata": {
      "defaultRpcUrl": "https://api.avax.network/ext/bc/C/rpc",
      "defaultExplorer": "https://subnets.avax.network/c-chain"
    },
  },
  "testnet": {
    "chain": "avalanche",
    "chainId": 43113,
    "networkName": "Avalanche Fuji",
    "address": "0x35d0a63c248490810705e895d1Ba4fD8fF454a19",
    "oraoAddress": "0x3828Bc0EF04a4D1Ff7FB13259541271fF3BB5F18",
    "metadata": {
      "defaultRpcUrl": "https://api.avax-test.network/ext/bc/C/rpc",
      "defaultExplorer": "https://subnets-test.avax.network/c-chain"
    },
  }
  ```
 */
export const ORAO_VRF_AVALANCHE_CONFIG: IChainConfig = {
    mainnet: ORAO_VRF_AVALANCHE_MAINNET_CONFIG,
    testnet: ORAO_VRF_AVALANCHE_TESTNET_CONFIG,
};

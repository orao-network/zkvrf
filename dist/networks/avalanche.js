"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ORAO_VRF_AVALANCHE_CONFIG = exports.ORAO_VRF_AVALANCHE_TESTNET_CONFIG = exports.ORAO_VRF_AVALANCHE_MAINNET_CONFIG = void 0;
exports.ORAO_VRF_AVALANCHE_MAINNET_CONFIG = {
    chain: "avalanche",
    chainId: 43114,
    networkName: "Avalanche Mainnet",
    address: "",
    oraoAddress: "",
    metadata: {
        defaultRpcUrl: "https://api.avax.network/ext/bc/C/rpc",
        defaultExplorer: "https://subnets.avax.network/c-chain",
    },
};
exports.ORAO_VRF_AVALANCHE_TESTNET_CONFIG = {
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
exports.ORAO_VRF_AVALANCHE_CONFIG = {
    mainnet: exports.ORAO_VRF_AVALANCHE_MAINNET_CONFIG,
    testnet: exports.ORAO_VRF_AVALANCHE_TESTNET_CONFIG,
};

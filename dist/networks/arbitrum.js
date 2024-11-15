"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ORAO_VRF_ARBITRUM_CONFIG = exports.ORAO_VRF_ARBITRUM_TESTNET_CONFIG = exports.ORAO_VRF_ARBITRUM_MAINNET_CONFIG = void 0;
exports.ORAO_VRF_ARBITRUM_MAINNET_CONFIG = {
    chain: "arbitrum",
    chainId: 42161,
    networkName: "Arbitrum Mainnet",
    address: "",
    oraoAddress: "",
    metadata: {
        defaultRpcUrl: "https://arbitrum.drpc.org",
        defaultExplorer: "https://arbiscan.io/",
    },
};
exports.ORAO_VRF_ARBITRUM_TESTNET_CONFIG = {
    chain: "arbitrum",
    chainId: 421614,
    networkName: "Arbitrum Sepolia",
    address: "0x35d0a63c248490810705e895d1Ba4fD8fF454a19",
    oraoAddress: "0x3828Bc0EF04a4D1Ff7FB13259541271fF3BB5F18",
    metadata: {
        defaultRpcUrl: "https://arbitrum-sepolia.gateway.tenderly.co",
        defaultExplorer: "https://sepolia.arbiscan.io/",
    },
};
/**
 @defaultValue the default Arbitrum configuration

  ```json
  {
  "mainnet": {
    "chain": "arbitrum",
    "chainId": 42161,
    "networkName": "Arbitrum Mainnet",
    "address": "",
    "oraoAddress": "",
    "metadata": {
      "defaultRpcUrl": "https://arbitrum.drpc.org",
      "defaultExplorer": "https://arbiscan.io/"
    },
  },
  "testnet": {
    "chain": "arbitrum",
    "chainId": 421614,
    "networkName": "Arbitrum Sepolia",
    "address": "0x35d0a63c248490810705e895d1Ba4fD8fF454a19",
    "oraoAddress": "0x3828Bc0EF04a4D1Ff7FB13259541271fF3BB5F18",
    "metadata": {
      "defaultRpcUrl": "https://arbitrum-sepolia.gateway.tenderly.co",
      "defaultExplorer": "https://sepolia.arbiscan.io/"
    },
  }
  ```
 */
exports.ORAO_VRF_ARBITRUM_CONFIG = {
    mainnet: exports.ORAO_VRF_ARBITRUM_MAINNET_CONFIG,
    testnet: exports.ORAO_VRF_ARBITRUM_TESTNET_CONFIG,
};

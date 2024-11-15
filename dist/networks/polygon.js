"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ORAO_VRF_POLYGON_CONFIG = exports.ORAO_VRF_POLYGON_TESTNET_CONFIG = exports.ORAO_VRF_POLYGON_MAINNET_CONFIG = void 0;
exports.ORAO_VRF_POLYGON_MAINNET_CONFIG = {
    chain: "polygon",
    chainId: 137,
    networkName: "Polygon Mainnet",
    address: "",
    oraoAddress: "",
    metadata: {
        defaultRpcUrl: "https://polygon-rpc.com",
        defaultExplorer: "https://polygonscan.com",
    },
};
exports.ORAO_VRF_POLYGON_TESTNET_CONFIG = {
    chain: "polygon",
    chainId: 80002,
    networkName: "Polygon Amoy",
    address: "0x71dF232185377F2a9ecF9a74422e64733e4e5408",
    oraoAddress: "0xEE1CeA7665bA7aa97e982EdeaeCb26B59a04d035",
    metadata: {
        defaultRpcUrl: "https://rpc-amoy.polygon.technology",
        defaultExplorer: "https://amoy.polygonscan.com",
    },
};
/**
 @defaultValue the default Polygon configuration

  ```json
  {
  "mainnet": {
    "chain": "polygon",
    "chainId": 137,
    "networkName": "Polygon Mainnet",
    "address": "",
    "oraoAddress": "",
    "metadata": {
      "defaultRpcUrl": "https://polygon-rpc.com",
      "defaultExplorer": "https://polygonscan.com"
    },
  },
  "testnet": {
    "chain": "polygon",
    "chainId": 80002,
    "networkName": "Polygon Amoy",
    "address": "0x71dF232185377F2a9ecF9a74422e64733e4e5408",
    "oraoAddress": "0xEE1CeA7665bA7aa97e982EdeaeCb26B59a04d035",
    "metadata": {
      "defaultRpcUrl": "https://rpc-amoy.polygon.technology",
      "defaultExplorer": "https://amoy.polygonscan.com"
    },
  }
  ```
 */
exports.ORAO_VRF_POLYGON_CONFIG = {
    mainnet: exports.ORAO_VRF_POLYGON_MAINNET_CONFIG,
    testnet: exports.ORAO_VRF_POLYGON_TESTNET_CONFIG,
};

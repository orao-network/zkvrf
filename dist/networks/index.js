"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSupportedEvmChainId = exports.isSupportedChainId = exports.ORAO_VRF_EVM_CHAIN_IDS = void 0;
const types_1 = require("./types");
const polygon_1 = require("./polygon");
const zircuit_1 = require("./zircuit");
const arbitrum_1 = require("./arbitrum");
const avalanche_1 = require("./avalanche");
exports.ORAO_VRF_EVM_CHAIN_IDS = {
    137: polygon_1.ORAO_VRF_POLYGON_CONFIG.mainnet,
    80002: polygon_1.ORAO_VRF_POLYGON_CONFIG.testnet,
    255: zircuit_1.ORAO_VRF_ZIRCUIT_CONFIG.mainnet,
    2358: zircuit_1.ORAO_VRF_ZIRCUIT_CONFIG.testnet,
    42161: arbitrum_1.ORAO_VRF_ARBITRUM_CONFIG.mainnet,
    421614: arbitrum_1.ORAO_VRF_ARBITRUM_CONFIG.testnet,
    43114: avalanche_1.ORAO_VRF_AVALANCHE_CONFIG.mainnet,
    43113: avalanche_1.ORAO_VRF_AVALANCHE_CONFIG.testnet,
};
function isSupportedChainId(chainId) {
    return types_1.SUPPORTED_EVM_CHAIN_IDS.includes(chainId);
}
exports.isSupportedChainId = isSupportedChainId;
function getSupportedEvmChainId(chainId) {
    if (!isSupportedChainId(chainId)) {
        throw new Error(`The provided chainID '${chainId}' is not yet supported by the OraoVRF. Available chainID's are: [${types_1.SUPPORTED_EVM_CHAIN_IDS.map((c) => "'" + c + "'").join(", ")}]`);
    }
    return exports.ORAO_VRF_EVM_CHAIN_IDS[chainId];
}
exports.getSupportedEvmChainId = getSupportedEvmChainId;

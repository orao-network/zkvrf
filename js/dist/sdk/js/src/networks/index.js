"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSupportedEvmChainId = exports.isSupportedChainId = exports.ORAO_VRF_EVM_CHAIN_IDS = void 0;
const types_1 = require("./types");
const polygon_1 = require("./polygon");
exports.ORAO_VRF_EVM_CHAIN_IDS = {
    137: polygon_1.ORAO_VRF_POLYGON_MAINNET_CONFIG,
    80001: polygon_1.ORAO_VRF_POLYGON_TESTNET_CONFIG,
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

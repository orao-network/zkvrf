import {
    EvmChainIds,
    IEvmNetworkConfig,
    SUPPORTED_EVM_CHAIN_IDS,
} from "./types";
import { ORAO_VRF_POLYGON_CONFIG } from "./polygon";
import { ORAO_VRF_ZIRCUIT_CONFIG } from "./zircuit";
import { ORAO_VRF_ARBITRUM_CONFIG } from "./arbitrum";

export const ORAO_VRF_EVM_CHAIN_IDS: Record<EvmChainIds, IEvmNetworkConfig> = {
    137: ORAO_VRF_POLYGON_CONFIG.mainnet,
    80002: ORAO_VRF_POLYGON_CONFIG.testnet,
    255: ORAO_VRF_ZIRCUIT_CONFIG.mainnet,
    2358: ORAO_VRF_ZIRCUIT_CONFIG.testnet,
    42161: ORAO_VRF_ARBITRUM_CONFIG.mainnet,
    421614: ORAO_VRF_ARBITRUM_CONFIG.testnet,
};

export function isSupportedChainId(chainId: number): chainId is EvmChainIds {
    return (SUPPORTED_EVM_CHAIN_IDS as readonly number[]).includes(chainId);
}

export function getSupportedEvmChainId(chainId: number): IEvmNetworkConfig {
    if (!isSupportedChainId(chainId)) {
        throw new Error(
            `The provided chainID '${chainId}' is not yet supported by the OraoVRF. Available chainID's are: [${SUPPORTED_EVM_CHAIN_IDS.map(
                (c) => "'" + c + "'"
            ).join(", ")}]`
        );
    }
    return ORAO_VRF_EVM_CHAIN_IDS[chainId];
}

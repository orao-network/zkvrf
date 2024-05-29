import { EvmChainIds, IEvmNetworkConfig, SUPPORTED_EVM_CHAIN_IDS } from "./types";
import { ORAO_VRF_POLYGON_MAINNET_CONFIG, ORAO_VRF_POLYGON_TESTNET_CONFIG } from "./polygon";

export const ORAO_VRF_EVM_CHAIN_IDS: Record<EvmChainIds, IEvmNetworkConfig> =
    {
        137: ORAO_VRF_POLYGON_MAINNET_CONFIG,
        80001: ORAO_VRF_POLYGON_TESTNET_CONFIG,
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
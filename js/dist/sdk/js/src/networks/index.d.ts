import { EvmChainIds, IEvmNetworkConfig } from "./types";
export declare const ORAO_VRF_EVM_CHAIN_IDS: Record<EvmChainIds, IEvmNetworkConfig>;
export declare function isSupportedChainId(chainId: number): chainId is EvmChainIds;
export declare function getSupportedEvmChainId(chainId: number): IEvmNetworkConfig;

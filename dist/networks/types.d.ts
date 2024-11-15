type JsonType = string | boolean | number | Array<string | boolean | number | undefined> | Record<string, string | boolean | number | undefined>;
/** The current EVM chains OraoVRF.sol is currently deployed on. */
export declare const ORAO_VRF_EVM_CHAINS: readonly ["polygon", "zircuit", "arbitrum", "avalanche"];
/** The current EVM chains OraoVRF.sol is currently deployed on. */
export type EvmChainType = (typeof ORAO_VRF_EVM_CHAINS)[number];
export declare const SUPPORTED_EVM_CHAIN_IDS: readonly [137, 80002, 255, 2358, 42161, 421614, 43114, 43113];
export type EvmChainIds = (typeof SUPPORTED_EVM_CHAIN_IDS)[number];
declare const EVM_SUPPORTED_NETWORKS: readonly ["mainnet", "testnet"];
export type EvmNetworkType = (typeof EVM_SUPPORTED_NETWORKS)[number];
type INetworkMetadata = {
    [key: string]: JsonType | undefined;
    defaultRpcUrl: string;
};
type IBaseNetworkConfig = {
    chain: EvmChainType;
    networkName: string;
    address: string;
    oraoAddress: string;
    metadata: INetworkMetadata;
};
export type IEvmNetworkConfig = IBaseNetworkConfig & {
    chainId: number;
};
export type IChainConfig = {
    mainnet: IEvmNetworkConfig;
    testnet: IEvmNetworkConfig;
};
export {};

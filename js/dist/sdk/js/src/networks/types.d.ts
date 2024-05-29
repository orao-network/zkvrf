declare type JsonType = string | boolean | number | Array<string | boolean | number | undefined> | Record<string, string | boolean | number | undefined>;
/** The current EVM chains OraoVRF.sol is currently deployed on. */
export declare const ORAO_VRF_EVM_CHAINS: readonly ["polygon"];
/** The current EVM chains OraoVRF.sol is currently deployed on. */
export declare type EvmChainType = (typeof ORAO_VRF_EVM_CHAINS)[number];
export declare const SUPPORTED_EVM_CHAIN_IDS: readonly [137, 80001];
export declare type EvmChainIds = (typeof SUPPORTED_EVM_CHAIN_IDS)[number];
declare const EVM_SUPPORTED_NETWORKS: readonly ["mainnet", "testnet"];
export declare type EvmNetworkType = (typeof EVM_SUPPORTED_NETWORKS)[number];
declare type INetworkMetadata = {
    [key: string]: JsonType | undefined;
    defaultRpcUrl: string;
};
declare type IBaseNetworkConfig = {
    chain: EvmChainType;
    networkName: string;
    address: string;
    oraoAddress: string;
    metadata: INetworkMetadata;
};
export declare type IEvmNetworkConfig = IBaseNetworkConfig & {
    chainId: number;
};
export declare type IChainConfig = {
    mainnet: IEvmNetworkConfig;
    testnet: IEvmNetworkConfig;
};
export {};

type JsonType =
    | string
    | boolean
    | number
    | Array<string | boolean | number | undefined>
    | Record<string, string | boolean | number | undefined>;

// Utility type to remove a property from a type
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// Utility type to rename a property in a type
type Rename<T, K extends keyof T, N extends string> = Omit<T, K> & {
    [P in N]: T[K];
};

///////////////////////////////////////////////////////////////////////////////
/////////////// Supported Chains///////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
/** The current EVM chains OraoVRF.sol is currently deployed on. */
export const ORAO_VRF_EVM_CHAINS = ["polygon", "zircuit", "arbitrum"] as const;
/** The current EVM chains OraoVRF.sol is currently deployed on. */
export type EvmChainType = (typeof ORAO_VRF_EVM_CHAINS)[number];

///////////////////////////////////////////////////////////////////////////////
/////////////// Supported Chain IDs ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
export const SUPPORTED_EVM_CHAIN_IDS = [137, 80002, 255, 2358, 42161, 421614] as const;
export type EvmChainIds = (typeof SUPPORTED_EVM_CHAIN_IDS)[number];


///////////////////////////////////////////////////////////////////////////////
/////////////// Supported Networks ////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
const EVM_SUPPORTED_NETWORKS = ["mainnet", "testnet"] as const;
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

///////////////////////////////////////////////////////////////////////////////
/////////////// Chain Configs /////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
export type IChainConfig = {
    mainnet: IEvmNetworkConfig;
    testnet: IEvmNetworkConfig;
};
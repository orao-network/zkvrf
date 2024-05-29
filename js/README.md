# zkVRF for EVM JS SDK

Library to interact with ORAO `zkvrf` smart contract on EVM network.

### VRF consumer contract example

```solidity
contract OraoVRFConsumer is OraoVRFConsumerBase {
    bytes32 public seed;
    bytes32 public part1;
    bytes32 public part2;
    IOraoVRF internal _vrfCoordinator;

    constructor(address vrfCoordinator) OraoVRFConsumerBase(vrfCoordinator) {
        _vrfCoordinator = IOraoVRF(vrfCoordinator);
    }

    function fulfillRandomness(bytes32 _seed, bytes32 _part1, bytes32 _part2) internal override {
        seed = _seed;
        part1 = _part1;
        part2 = _part2;
    }

    function request(bytes32 _seed) public payable override {
        seed = _seed;
        super.request(_seed);
    }
}
```

```typescript
const provider = new ethers.providers.InfuraWebSocketProvider(
    "matic",
    process.env.INFURA_API_KEY
);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const signerAddress = wallet.address;
const oraoVrfConsumer = new ethers.Contract(
    ORAO_VRF_CONSUMER_ADDRESS,
    CONSUMER_ABI,
    signer
);

const gasPrice = await provider.getGasPrice();
const txValue = await oraoVrfConsumer.calcTxValue(gasPrice);

const seed = new Uint8Array(randomBytes(32));
await oraoVrfConsumer.request(seed, { value: txValue });
```

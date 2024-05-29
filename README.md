# ORAO zkVRF SDK

ORAO's Zero-Knowledge Verifiable Random Function provides fast and unbiased randomness on most EVM networks.
zkVRF is currently deployed to Polygon Amoy Testnet at `0x3Bc8ce8a86eeC25AE77Af96ae06b0e605Fb93d52` and verifier at `0xA8d4892a93c0e1cE66754823306f16809BE0F26D`

### Features
- ability to pre-pay for VRF requests (on-chain treasury per wallet)
- callback option
- gas setting for faster tx

### Integration example
We've built a simple Solidity contract which mints an NFT with Random features.
The source code is [available here](https://github.com/orao-network/zkvrf-evm/tree/master/sdk/examples/sol)

Compile and deploy:
```
cd examples/sol
npm run compile
npx hardhat deploy:RandomNFT --vrf 0x3Bc8ce8a86eeC25AE77Af96ae06b0e605Fb93d52
```

After deployment you can mint the NFT:

```
npx hardhat mint:RandomNFT
```


### Solidity example:
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


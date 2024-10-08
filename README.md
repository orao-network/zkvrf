# ORAO zkVRF SDK

<p>
ORAO's Zero-Knowledge Verifiable Random Function (zkVRF) provides fast, secure and affordable randomness utiziling zero knowledge protocols.
  zkVRF utilizes zkSNARKs version of the Zero-knowledge proofs (ZKPs) family of probabilistic protocols.
With zkVRF you can create unique NFT characteristics, generate random weapons and levels in games, provide unique loot boxes, enable provably fair rewards distribution, randomize airdrops and provide secure, verifiable lottery/raffle.
</p>

zkVRF is currently deployed to: 

| Network          | OraoVRF                                    |
|------------------|--------------------------------------------|
| Polygon Amoy     | 0x8587eBdBED9280A493d4105238b2b3e373931816 |    
| Zircuit Sepolia  | 0xDA2Fc58785B299b731174948D15E5959619d56d2 |
| Arbitrum Sepolia | 0x77B95E9e8203A4EEBF89664642f835b0C33F9416 |



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
npm run deploy
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
    
  function calcGasUsed() public override returns (uint256 gasUsed) {
    uint256 startGas = gasleft();

    fulfillRandomness(
      0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff,
      0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff,
      0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    );

    gasUsed = startGas - gasleft();
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


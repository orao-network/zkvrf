# zkVRF SDK

## Example of using the ORAO zkVRF contract

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

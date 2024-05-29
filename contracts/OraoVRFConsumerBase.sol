// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./interfaces/IOraoVRF.sol";

abstract contract OraoVRFConsumerBase {
    error OnlyCoordinatorCanFulfill(address have, address want);

    // solhint-disable-next-line
    IOraoVRF private immutable vrfCoordinator;
    uint32 public immutable callbackGasLimit;

    /**
     * @param _vrfCoordinator address of VRFCoordinator contract
     */
    constructor(address _vrfCoordinator) {
        vrfCoordinator = IOraoVRF(_vrfCoordinator);
        callbackGasLimit = uint32(calcGasUsed());
    }

    function request(bytes32 seed) public payable virtual {
        vrfCoordinator.request{ value: msg.value }(seed, callbackGasLimit);
    }

    function calcTxValue(uint256 gasPrice) external view returns (uint256) {
        (uint256 orao, int256 base, ) = getSubscription();
        base -= int256(gasPrice * callbackGasLimit);

        (, uint256 oraoFee, uint256 baseFee) = vrfCoordinator.getConfig();

        if (oraoFee < orao) {
            baseFee = 0;
        }

        if (int256(baseFee) > base) baseFee = uint256(int256(baseFee) - base);
        else baseFee = 0;

        return baseFee;
    }

    function fundSubscription(uint256 orao) public payable {
        vrfCoordinator.fundSubscription{ value: msg.value }(orao);
    }

    function cancelSubscription(address to) external {
        vrfCoordinator.cancelSubscription(to);
    }

    function getSubscription() public view returns (uint96 orao, int96 base, uint64 pendingReqCount) {
        return vrfCoordinator.getSubscription(address(this));
    }

    function pendingRequestExists() public view returns (bool) {
        return vrfCoordinator.pendingRequestExists(address(this));
    }

    function calcGasUsed() public returns (uint256 gasUsed) {
        uint256 startGas = gasleft();

        fulfillRandomness(
            0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff,
            0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff,
            0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        );

        gasUsed = startGas - gasleft();
    }

    /**
     * @notice fulfillRandomness handles the VRF response. Your contract must
     * @notice implement it.
     *
     * @dev OraoVRFConsumerBase expects its subcontracts to have a method with this
     * @dev signature, and will call it once it has verified the proof
     * @dev associated with the randomness. (It is triggered via a call to
     * @dev rawFulfillRandomness, below.)
     *
     * @param seed bytes32
     * @param part1 bytes32
     * @param part2 bytes32
     */
    // solhint-disable-next-line
    function fulfillRandomness(bytes32 seed, bytes32 part1, bytes32 part2) internal virtual;

    // rawFulfillRandomness is called by VRFCoordinator when it receives a valid VRF
    // proof. rawFulfillRandomness then calls fulfillRandomness, after validating
    // the origin of the call
    function rawFulfillRandomness(bytes32 seed, bytes32 part1, bytes32 part2) external {
        if (msg.sender != address(vrfCoordinator)) {
            revert OnlyCoordinatorCanFulfill(msg.sender, address(vrfCoordinator));
        }
        fulfillRandomness(seed, part1, part2);
    }
}

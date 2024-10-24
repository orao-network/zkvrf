// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./interfaces/IOraoVRF.sol";

abstract contract OraoVRFConsumerBase {
    error OnlyCoordinatorCanFulfill(address have, address want);

    // solhint-disable-next-line
    IOraoVRF private immutable vrfCoordinator;
    uint32 public immutable callbackGasLimit;

    /**
     * Constructor for the OraoVRFConsumerBase contract.
     * Initializes the OraoVRF address and calculates the callback gas limit.
     *
     * @param _vrfCoordinator - The address of the OraoVRF contract to be used as the coordinator.
     *
     * @dev The constructor sets the provided VRF coordinator address as an immutable private variable.
     * It also calculates the callback gas limit by calling the `calcGasUsed` function and storing the result.
     * The calculated callback gas limit is made immutable and publicly accessible.
     */
    constructor(address _vrfCoordinator) {
        vrfCoordinator = IOraoVRF(_vrfCoordinator);
        callbackGasLimit = uint32(calcGasUsed());
    }

    /**
     * Initiates a VRF request with the provided seed and msg.value.
     *
     * This function sends a request to the OraoVRF contract to generate a random number
     * based on the provided seed.
     *
     * @param seed - A bytes32 value representing the seed for the VRF request.
     *
     * @dev The function interacts with the OraoVRF contract to trigger the VRF request.
     * The msg.value is sent as part of the request to fund the VRF computation.
     *
     * Example usage:
     * ```
     *  const gasPrice = await provider.getGasPrice();
     *  const txValue = await oraoVrfConsumer.calcTxValue(gasPrice);
     *
     *  const seed = new Uint8Array(randomBytes(32));
     *  await oraoVrfConsumer.request(seed, { value: txValue });
     * ```
     *
     * @dev To use ORAO tokens for the request fee, fund the subscription with ORAO tokens first.
     */
    function request(bytes32 seed) public payable virtual {
        vrfCoordinator.request{ value: msg.value }(seed, callbackGasLimit);
    }

    /**
     * Calculates the required base token fee for a VRF request based on the provided gas price.
     *
     * This function calculates the base token fee required to cover the gas cost of the callback function
     * in a VRF request. It takes into account the current subscription details, the configured gas limit
     * for the callback function, and the provided gas price.
     *
     * @param gasPrice - The gas price in base tokens per gas unit.
     *
     * @return The required base token fee for the VRF request.
     */
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

    /**
     * Allows the contract to fund its subscription with the specified amounts of ORAO tokens and base tokens.
     *
     * @param orao - The amount of ORAO tokens to fund the subscription with.
     *
     * @dev The function is marked as payable to accept base tokens as part of the funding.
     */
    function fundSubscription(uint256 orao) public payable {
        vrfCoordinator.fundSubscription{ value: msg.value }(orao);
    }

    /**
     * Cancels the subscription and sends the remaining fund to specified address.
     *
     * This function interacts with the OraoVRF contract to cancel the subscription.
     *
     * @param to - The address to which the remaining fund needs to be transferred.
     */
    function cancelSubscription(address to) external {
        vrfCoordinator.cancelSubscription(to);
    }

    /**
     * Retrieves the current subscription details for the contract.
     *
     * This function interacts with the OraoVRF contract to fetch the current subscription details
     * for the contract's address. The subscription details include the ORAO token balance, base token balance,
     * and the count of pending VRF requests.
     *
     * @param orao - A uint96 representing the ORAO token balance of the contract.
     * @param base - An int96 representing the base token balance of the contract.
     * @param pendingReqCount - A uint64 representing the count of pending VRF requests for the contract.
     *
     * @return orao - ORAO balance of the subscription.
     * @return base - base token balance of the subscription.
     * @return pendingReqCount - number of pending requests for this subscription.
     */
    function getSubscription() public view returns (uint96 orao, int96 base, uint64 pendingReqCount) {
        return vrfCoordinator.getSubscription(address(this));
    }

    /**
     * Checks if there is an existing pending VRF request for the contract.
     *
     * @dev This function interacts with the OraoVRF contract to determine if there is a pending request
     * for the current contract's address.
     *
     * @return {bool} A boolean value indicating the existence of a pending VRF request.
     * - `true` if there is a pending request.
     * - `false` if there is no pending request.
     */
    function pendingRequestExists() public view returns (bool) {
        return vrfCoordinator.pendingRequestExists(address(this));
    }

    /**
     * Calculates the gas used for the callback function in the VRF request.
     * This function should be overridden in derived contracts to determine the maximum callback gas.
     * The overridden method should select the parameters with the highest gas consumption.
     *
     * @dev The provided code snippet inside the function calculates the gas used by calling
     * fulfillRandomness with maximum input values and then subtracting the remaining gas from the initial gas left.
     *
     * @return gasUsed - The calculated gas used for the callback function.
     *
     * Example usage:
     * ```
     *   uint256 startGas = gasleft();
     *   fulfillRandomness(
     *       0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff,
     *       0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff,
     *       0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
     *   );
     *   gasUsed = startGas - gasleft();
     * ```
     */
    function calcGasUsed() public virtual returns (uint256 gasUsed);

    /**
     * @notice fulfillRandomness handles the VRF response. Your contract must
     * @notice implement it.
     *
     * @dev OraoVRFConsumerBase.sol expects its subcontracts to have a method with this
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

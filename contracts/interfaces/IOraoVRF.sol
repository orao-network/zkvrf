// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./IERC20.sol";

interface IOraoVRF {
    function ORAO() external view returns (IERC20);

    function request(bytes32 seed, uint32 callbackGasLimit) external payable;

    function getConfig() external view returns (uint32 maxGasLimit, uint96 oraoFee, uint96 baseFee);

    /**
     * @notice Get a VRF subscription.
     * @param subOwner - subscription owner.
     * @return orao - ORAO balance of the subscription.
     * @return base - base token balance of the subscription.
     * @return pendingReqCount - number of pending requests for this subscription.
     */
    function getSubscription(address subOwner) external view returns (uint96 orao, int96 base, uint64 pendingReqCount);

    /**
     * @notice Fund a VRF subscription.
     * @param orao - ORAO amount to deposit.
     */
    function fundSubscription(uint256 orao) external payable;

    /**
     * @notice Cancel a subscription
     * @param to - Where to send the remaining ORAO and base token to
     */
    function cancelSubscription(address to) external;

    /*
     * @notice Check to see if there exists a request commitment consumers
     * for all consumers and seeds for a given sub.
     * @param subOwner - subscription owner
     * @return true if there exists at least one unfulfilled request for the subscription, false
     * otherwise.
     */
    function pendingRequestExists(address subOwner) external view returns (bool);
}

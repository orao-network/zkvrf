// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@orao-network/zkvrf/contracts/OraoVRFConsumerBase.sol";

contract RandomNFT is ERC721, Ownable, OraoVRFConsumerBase {
    uint256 private _nextTokenId;

    mapping(uint256 => string) public tokenIdToFeature;

    constructor(address _vrfCoordinator) ERC721("RandomNFT", "RNFT") OraoVRFConsumerBase(_vrfCoordinator) {}

    function mint() payable public {
        super.request(generateSeed(msg.sender, _nextTokenId++));
    }

    function fulfillRandomness(bytes32 /*_seed*/, bytes32 _part1, bytes32 _part2) internal override {
        // Get the randomness from the VRF
        uint256 randomness = uint256(keccak256(abi.encodePacked(_part1, _part2)));

        // Mint the token with the randomness as the feature
        uint256 tokenId = _nextTokenId;
        _mint(msg.sender, tokenId);

        // Generate random feature based on the randomness
        string memory randomFeature = generateRandomFeature(randomness);
        tokenIdToFeature[tokenId] = randomFeature;
    }

    function generateRandomFeature(uint256 randomness) internal pure returns (string memory) {
        // Generate a random feature based on the randomness
        // For demonstration purposes, let's assume a simple random feature generation
        if (randomness % 2 == 0) {
            return "Red";
        } else {
            return "Blue";
        }
    }

    function generateSeed(address _address, uint256 _tokenId) public pure returns (bytes32) {
        return keccak256(abi.encodePacked(_address, _tokenId));
    }
}

# zkVRF Sample Hardhat Project - RandomNFT

RandomNFT demonstrates a basic ORAO zkVRF use case.
It's a simple ERC-721 (NFT) minter contract that generates an NFT with different features.
The selection of features is based on the randomness given by ORAO's zkVRF on-chain.


### Install dependencies and compile the RandomNFT contract
```
yarn install
```
```
npx hardhat compile
```

### Deploy it on Polygon Amoy Testnet
```
npx hardhat --network polygon-amoy deploy:RandomNFT --vrf 0x3Bc8ce8a86eeC25AE77Af96ae06b0e605Fb93d52
```
<span style="font-size:0.5em;">(On Amoy Testnet, ORAO's zkVRF is deployed to: 0x71dF232185377F2a9ecF9a74422e64733e4e5408)</style>


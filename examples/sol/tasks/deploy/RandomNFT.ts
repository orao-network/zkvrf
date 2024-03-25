import { task, types } from "hardhat/config";
import { TaskArguments } from "hardhat/types";

import { RandomNFT, RandomNFT__factory } from "../../types";

task("deploy:RandomNFT")
  .addParam("vrf", "VRF coordinator", undefined, types.string)
  .setAction(async function (taskArguments: TaskArguments, { ethers, artifacts }) {
    const artifactsRandomNFT = await artifacts.readArtifact("RandomNFT");
    const contractFactory: RandomNFT__factory = <RandomNFT__factory>(
      await ethers.getContractFactory(artifactsRandomNFT.abi, artifactsRandomNFT.bytecode)
    );
    const contract: RandomNFT = <RandomNFT>await contractFactory.deploy(taskArguments.vrf);
    await contract.deployed();
    console.log("RandomNFT deployed to: ", contract.address);
  });

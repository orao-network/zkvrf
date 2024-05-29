import { randomBytes } from "crypto";
import * as dotenv from "dotenv";
import { ethers } from "ethers";
import { OraoVRFClient } from "../src";

dotenv.config();

describe("vrf", async () => {
    const provider = new ethers.providers.InfuraWebSocketProvider(
        "maticmum",
        process.env.INFURA_API_KEY
    );
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
    const oraoVRFClient = await OraoVRFClient.fromSigner(wallet);
    const gasPrice = await provider.getGasPrice()

    it("request", async () => {
        const seed = new Uint8Array(randomBytes(32));
        let txnHash = await oraoVRFClient.request(seed);
        await txnHash.wait();

        console.log(seed);
        console.log("Your transaction hash is", txnHash);

        const randomness = await oraoVRFClient.waitFulfilled(seed);
        console.log("Your randomness is", randomness);
    });
});

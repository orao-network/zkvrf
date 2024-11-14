import { randomBytes } from "crypto";
import * as dotenv from "dotenv";
import { ethers } from "ethers";
import { OraoVRFClient } from "../src";

dotenv.config();

describe("vrf", async () => {
    it("request", async () => {
        const provider = new ethers.providers.JsonRpcProvider(
            "https://rpc-amoy.polygon.technology"
        );
        const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
        const oraoVRFClient = await OraoVRFClient.fromSigner(wallet);

        const seed = new Uint8Array(randomBytes(32));
        let txnHash = await oraoVRFClient.request(seed, { gasLimit: 5000000 });
        await txnHash.wait();

        console.log(seed);
        console.log("Your transaction hash is", txnHash);

        const randomness = await oraoVRFClient.waitFulfilled(seed);
        console.log("Your randomness is", randomness);
    });
});

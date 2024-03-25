# zkVRF for EVM JS SDK

Library to interact with ORAO `zkvrf` smart contract on EVM network.

```typescript
const provider = new ethers.providers.InfuraWebSocketProvider(
    "matic",
    process.env.INFURA_API_KEY
);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const oraoVrf = await OraoZKVrfClient.fromSigner(wallet);

const seed = new Uint8Array(randomBytes(32));
let txnHash = await oraoVrf.request(seed);
await txnHash.wait();

console.log(seed);
console.log("Your transaction hash is", txnHash);

const randomness = await oraoVrf.waitFulfilled(seed);
console.log("Your randomness is", randomness);
```

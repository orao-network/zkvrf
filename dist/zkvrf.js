"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OraoVRFClient = exports.getOrao = exports.getOraoVRF = void 0;
const ethers_1 = require("ethers");
const contract_types_1 = require("./contract-types");
const networks_1 = require("./networks");
const sendTxnWithOptions_1 = require("./sendTxnWithOptions");
/**
 * Creates and returns a OraoVRF.sol instance
 * @param address - The contract address of the OraoVRF.sol
 * @param signerOrProvider - The signer or provider used to interact with the contract
 * @returns OraoVRF.sol instance
 *
 *
 * const oraoVRF = getOraoVRF('0xOraoVRFSolContractAddress', mySignerOrProvider);
 */
function getOraoVRF(address, signerOrProvider) {
    return contract_types_1.OraoVRF__factory.connect(address, signerOrProvider);
}
exports.getOraoVRF = getOraoVRF;
/**
 * Creates and returns ORAO token instance
 * @param address - The contract address of the ORAO token
 * @param signerOrProvider - The signer or provider used to interact with the contract
 * @returns ERC20 instance
 *
 *
 * const oraoVRF = getOrao('0xOraoSolContractAddress', mySignerOrProvider);
 */
function getOrao(address, signerOrProvider) {
    return contract_types_1.MockERC20__factory.connect(address, signerOrProvider);
}
exports.getOrao = getOrao;
/**
 * The OraoVRFClient class provides a high-level API to interact with the {@link OraoVRF} smart contracts on the EVM.
 *
 * This class provides methods to send transactions and more. It requires a `Signer` or `Provider` instance and the address of the OraoVRF.sol contract to instantiate.
 *
 * ```typescript
 * // Instantiate OraoVRFClient
 * const signer = new ethers.Wallet(privateKey);
 * const oraoVRFClient = await OraoVRFClient.fromSigner(
 *   signer // Signer instance
 * );
 *
 * // Connect a new signer to OraoVRFClient
 * const newSigner = new ethers.Wallet(newPrivateKey);
 * const newOraoVRFClient = oraoVRFClient.connect(newSigner);
 *
 * // Send a request transaction to OraoVRF.sol
 * const tx = await oraoVRFClient.request(SEED, option);
 *
 * ```
 */
class OraoVRFClient {
    constructor(
    // An instance of the {@link OraoVRF.sol} contract.
    vrf, 
    // An instance of the Orao token contract.
    orao) {
        this.vrf = vrf;
        this.orao = orao;
        this._addressPromise = undefined;
        this._chainIdPromise = undefined;
        /**
         * Sends a transaction to the OraoVRF.sol contract
         * @param methodName - The name of the contract method to be called
         * @param args - The arguments to pass to the contract method
         * @param options - The options to pass to the contract method
         * @returns Promise<ContractTransaction>
         *
         * ```typescript
         * const transaction = await oraoVRFClient.sendTxn('methodName', args, options);
         * ```
         */
        this.sendTxn = (methodName, args, options) => __awaiter(this, void 0, void 0, function* () {
            return yield (0, sendTxnWithOptions_1.sendTxnWithOptions)(this.vrf, methodName, args, options);
        });
        this.request = (seed, options) => __awaiter(this, void 0, void 0, function* () {
            const signerAddress = yield this.vrf.signer.getAddress();
            options = Object.assign(Object.assign({}, options), { value: yield this.calcTxValue(signerAddress) });
            return yield this.sendTxn("request", [seed, 0 /* no callback */], options);
        });
        this.calcTxValue = (address) => __awaiter(this, void 0, void 0, function* () {
            const config = yield this.vrf.getConfig();
            const subscription = yield this.vrf.getSubscription(address);
            // If there is insufficient fund in the subscription, then calculate VRF fee (base token) to send.
            if (config.oraoFee.gt(subscription.orao) &&
                config.baseFee.gt(subscription.base)) {
                return config.baseFee.sub(subscription.base);
            }
            else
                return ethers_1.BigNumber.from(0);
        });
        this.waitFulfilled = (seed) => __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                while (true) {
                    try {
                        const randomness = yield this.getRandomness(seed);
                        if (randomness != "0x") {
                            resolve(randomness);
                            break;
                        }
                    }
                    catch (e) {
                        reject(e);
                        break;
                    }
                    yield new Promise((f) => setTimeout(f, 1000));
                }
            }));
        });
        this.getRandomness = (seed) => __awaiter(this, void 0, void 0, function* () {
            const request = yield this.vrf.getRequest(seed);
            return ethers_1.utils.hexConcat([request.part1, request.part2]);
        });
    }
    get chainId() {
        if (this._chainIdPromise) {
            return this._chainIdPromise;
        }
        this._chainIdPromise = this.vrf.provider
            .getNetwork()
            .then(({ chainId }) => chainId)
            .catch((err) => {
            this._chainIdPromise = undefined;
            throw err;
        });
        return this._chainIdPromise;
    }
    /**
     * A getter that returns a promise which resolves to the address of the signer.
     * If the address has already been fetched, it will be returned from the cache.
     * @returns Promise<string>
     *
     * ```typescript
     * const signerAddress = await oraoVRFClient.address;
     * ```
     */
    get address() {
        if (this._addressPromise) {
            return this._addressPromise;
        }
        this._addressPromise = this.vrf.signer.getAddress().catch((err) => {
            this._addressPromise = undefined;
            throw err;
        });
        return this._addressPromise;
    }
    /**
     * Static method to create and return a OraoVRFClient instance.
     * @param signerOrProvider - The signer or provider used to interact with the contracts
     * @throws if chainId is not supported by OraoVRF.sol
     * @returns Promise<OraoVRFClient>
     *
     * ```typescript
     * const oraoVRFClient = await OraoVRFClient.create(mySigner);
     * ```
     */
    static create(signerOrProvider) {
        return __awaiter(this, void 0, void 0, function* () {
            let chainId;
            if (ethers_1.Signer.isSigner(signerOrProvider)) {
                if (!signerOrProvider.provider) {
                    throw new Error("Signer must be connected to a provider");
                }
                chainId = yield signerOrProvider.getChainId();
            }
            else {
                const network = yield signerOrProvider.getNetwork();
                chainId = network.chainId;
            }
            const config = (0, networks_1.getSupportedEvmChainId)(chainId);
            const vrf = getOraoVRF(config.address, signerOrProvider);
            const orao = getOrao(config.oraoAddress, signerOrProvider);
            return new OraoVRFClient(vrf, orao);
        });
    }
}
exports.OraoVRFClient = OraoVRFClient;

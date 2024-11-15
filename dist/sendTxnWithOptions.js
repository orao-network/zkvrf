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
exports.sendTxnWithOptions = void 0;
const errors_1 = require("./errors");
const ethers_1 = require("ethers");
const sendTxnWithOptions = (_contract, methodName, args, options) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        // update the signer
        let contract = _contract;
        if (options && "signer" in options && ethers_1.Signer.isSigner(options.signer)) {
            const signer = options.signer;
            contract = _contract.connect(signer);
        }
        const method = contract.functions[methodName];
        if (!(method instanceof Function)) {
            throw new Error(`The method ${methodName} does not exist on the provided contract.`);
        }
        const overrides = Object.assign({}, options);
        if (((_a = options === null || options === void 0 ? void 0 : options.gasFactor) !== null && _a !== void 0 ? _a : 0) > 1) {
            const estimateGasMethod = contract.estimateGas[methodName];
            if (!(estimateGasMethod instanceof Function)) {
                throw new Error(`The estimateGas method ${methodName} does not exist on the provided contract.`);
            }
            const gasEstimate = yield estimateGasMethod(...args);
            overrides["gasLimit"] = Math.floor(gasEstimate.toNumber() * ((_b = options === null || options === void 0 ? void 0 : options.gasFactor) !== null && _b !== void 0 ? _b : 1));
        }
        // call simulate after populating all overrides
        if (options && (options === null || options === void 0 ? void 0 : options.simulate)) {
            const simulateMethod = contract["callStatic"][methodName];
            if (!(simulateMethod instanceof Function)) {
                throw new Error(`The callStatic method ${methodName} does not exist on the provided contract.`);
            }
            yield simulateMethod(...args, overrides);
        }
        return yield method(...args, overrides);
    }
    catch (error) {
        errors_1.EthersError.handleError(error);
    }
});
exports.sendTxnWithOptions = sendTxnWithOptions;

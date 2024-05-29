"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Verifier__factory = exports.OraoVRFConsumerBase__factory = exports.OraoVRF__factory = exports.testhelpers = exports.mocks = exports.interfaces = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
exports.interfaces = __importStar(require("./interfaces"));
exports.mocks = __importStar(require("./mocks"));
exports.testhelpers = __importStar(require("./testhelpers"));
var OraoVRF__factory_1 = require("./OraoVRF__factory");
Object.defineProperty(exports, "OraoVRF__factory", { enumerable: true, get: function () { return OraoVRF__factory_1.OraoVRF__factory; } });
var OraoVRFConsumerBase__factory_1 = require("./OraoVRFConsumerBase__factory");
Object.defineProperty(exports, "OraoVRFConsumerBase__factory", { enumerable: true, get: function () { return OraoVRFConsumerBase__factory_1.OraoVRFConsumerBase__factory; } });
var Verifier__factory_1 = require("./Verifier__factory");
Object.defineProperty(exports, "Verifier__factory", { enumerable: true, get: function () { return Verifier__factory_1.Verifier__factory; } });

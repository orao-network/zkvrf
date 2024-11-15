"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reentrant = exports.PendingRequestExists = exports.PaymentTooLarge = exports.NoVerifier = exports.NotVerifiable = exports.NotRequested = exports.InsufficientBalance = exports.GasLimitTooBig = exports.AlreadyFulfilled = exports.AlreadyRequested = exports.OraoVRFError = exports.EthersError = void 0;
class EthersError extends Error {
    constructor(
    // the original error
    err, 
    // the parsed details
    details) {
        const message = details.method && details.errorName
            ? `Function call failed in method ${details.method} with error ${details.errorName} \nError: ${err.message}`
            : `${err.message}`;
        super(message);
        this.err = err;
        // this.stack = err.stack; // Might want to return an error and the caller manually override this
        this.method = details.method;
        this.data = details.data;
        this.errorArgs = details.errorArgs;
        this.errorName = details.errorName;
        this.errorSignature = details.errorSignature;
        this.reason = details.reason;
        this.code = details.code;
        this.version = details.version;
        Error.captureStackTrace(this, this.constructor);
        Object.setPrototypeOf(this, EthersError.prototype);
    }
    /**
     * Always throws an error
     */
    static handleError(err) {
        throw EthersError.convertError(err);
    }
    /**
     * Converts an error but never throws it
     */
    static convertError(err) {
        if (!(err instanceof Error)) {
            // re-throw
            throw Error(`err`);
        }
        const ethersError = EthersError.fromErr(err);
        //
        if (OraoVRFErrorNames.includes(ethersError.errorName)) {
            return OraoVRFError.from(ethersError.errorName, ethersError.method, ethersError.err.message);
        }
        // re-throw
        return ethersError;
    }
    static fromErr(err) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        let details = {
            method: (_a = err.method) !== null && _a !== void 0 ? _a : "",
            data: (_b = err.data) !== null && _b !== void 0 ? _b : "",
            errorArgs: (_c = err.errorArgs) !== null && _c !== void 0 ? _c : "",
            errorName: (_d = err.errorName) !== null && _d !== void 0 ? _d : "",
            errorSignature: (_e = err.errorSignature) !== null && _e !== void 0 ? _e : "",
            reason: (_f = err.reason) !== null && _f !== void 0 ? _f : "",
            code: (_g = err.code) !== null && _g !== void 0 ? _g : "",
            version: (_h = err.version) !== null && _h !== void 0 ? _h : "",
        };
        const message = err.message;
        const regex = /\(method="(.*?)", data="(.*?)", errorArgs=(.*?), errorName="(.*?)", errorSignature="(.*?)", reason=(.*?), code=(.*?), version=(.*?)\)/;
        const result = message.match(regex);
        if (result) {
            details = {
                method: result[1],
                data: result[2],
                errorArgs: result[3] === "[]" ? [] : JSON.parse(result[3]),
                errorName: result[4],
                errorSignature: result[5],
                reason: result[6] === "null" ? null : result[6],
                code: result[7],
                version: result[8],
            };
        }
        return new EthersError(err, details);
    }
}
exports.EthersError = EthersError;
class OraoVRFError extends Error {
    constructor(name, method, _message) {
        const message = `Function call reverted in method ${method} \nError: ${_message}`;
        super(message);
        this.name = name;
        this.method = method;
        Error.captureStackTrace(this, this.constructor);
        Object.setPrototypeOf(this, OraoVRFError.prototype);
    }
    static from(name, method, _message) {
        switch (name) {
            case "AlreadyRequested":
                return new AlreadyRequested(method, _message);
            case "AlreadyFulfilled":
                return new AlreadyFulfilled(method, _message);
            case "GasLimitTooBig":
                return new GasLimitTooBig(method, _message);
            case "InsufficientBalance":
                return new InsufficientBalance(method, _message);
            case "NotRequested":
                return new NotRequested(method, _message);
            case "NotVerifiable":
                return new NotVerifiable(method, _message);
            case "NoVerifier":
                return new NoVerifier(method, _message);
            case "PaymentTooLarge":
                return new PaymentTooLarge(method, _message);
            case "Reentrant":
                return new Reentrant(method, _message);
            default:
                return new OraoVRFError(name, method, _message);
        }
    }
}
exports.OraoVRFError = OraoVRFError;
const OraoVRFErrorNames = [
    "AlreadyRequested",
    "AlreadyFulfilled",
    "GasLimitTooBig",
    "InsufficientBalance",
    "NotRequested",
    "NotVerifiable",
    "NoVerifier",
    "PaymentTooLarge",
    "PendingRequestExists",
    "Reentrant",
];
class AlreadyRequested extends OraoVRFError {
    constructor(method, _message) {
        super("AlreadyRequested", method, _message);
        this.method = method;
        Object.setPrototypeOf(this, AlreadyRequested.prototype);
    }
}
exports.AlreadyRequested = AlreadyRequested;
class AlreadyFulfilled extends OraoVRFError {
    constructor(method, _message) {
        super("AlreadyFulfilled", method, _message);
        this.method = method;
        Object.setPrototypeOf(this, AlreadyFulfilled.prototype);
    }
}
exports.AlreadyFulfilled = AlreadyFulfilled;
class GasLimitTooBig extends OraoVRFError {
    constructor(method, _message) {
        super("GasLimitTooBig", method, _message);
        this.method = method;
        Object.setPrototypeOf(this, GasLimitTooBig.prototype);
    }
}
exports.GasLimitTooBig = GasLimitTooBig;
class InsufficientBalance extends OraoVRFError {
    constructor(method, _message) {
        super("InsufficientBalance", method, _message);
        this.method = method;
        Object.setPrototypeOf(this, InsufficientBalance.prototype);
    }
}
exports.InsufficientBalance = InsufficientBalance;
class NotRequested extends OraoVRFError {
    constructor(method, _message) {
        super("NotRequested", method, _message);
        this.method = method;
        Object.setPrototypeOf(this, NotRequested.prototype);
    }
}
exports.NotRequested = NotRequested;
class NotVerifiable extends OraoVRFError {
    constructor(method, _message) {
        super("NotVerifiable", method, _message);
        this.method = method;
        Object.setPrototypeOf(this, NotVerifiable.prototype);
    }
}
exports.NotVerifiable = NotVerifiable;
class NoVerifier extends OraoVRFError {
    constructor(method, _message) {
        super("NoVerifier", method, _message);
        this.method = method;
        Object.setPrototypeOf(this, NoVerifier.prototype);
    }
}
exports.NoVerifier = NoVerifier;
class PaymentTooLarge extends OraoVRFError {
    constructor(method, _message) {
        super("PaymentTooLarge", method, _message);
        this.method = method;
        Object.setPrototypeOf(this, PaymentTooLarge.prototype);
    }
}
exports.PaymentTooLarge = PaymentTooLarge;
class PendingRequestExists extends OraoVRFError {
    constructor(method, _message) {
        super("PendingRequestExists", method, _message);
        this.method = method;
        Object.setPrototypeOf(this, PendingRequestExists.prototype);
    }
}
exports.PendingRequestExists = PendingRequestExists;
class Reentrant extends OraoVRFError {
    constructor(method, _message) {
        super("Reentrant", method, _message);
        this.method = method;
        Object.setPrototypeOf(this, Reentrant.prototype);
    }
}
exports.Reentrant = Reentrant;

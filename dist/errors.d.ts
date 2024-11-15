interface IErrorDetails {
    method?: string;
    data?: string;
    errorArgs?: string;
    errorName?: string;
    errorSignature?: string;
    reason?: string | null;
    code?: string;
    version?: string;
}
export declare class EthersError extends Error {
    readonly err: Error;
    readonly method?: string;
    readonly data?: string;
    readonly errorArgs?: string;
    readonly errorName?: string;
    readonly errorSignature?: string;
    readonly reason?: string | null;
    readonly code?: string;
    readonly version?: string;
    private constructor();
    /**
     * Always throws an error
     */
    static handleError(err: unknown): never;
    /**
     * Converts an error but never throws it
     */
    static convertError(err: unknown): Error;
    static fromErr(err: Error & Partial<IErrorDetails>): EthersError;
}
export declare class OraoVRFError extends Error {
    readonly name: string;
    readonly method: string;
    constructor(name: string, method: string, _message: string);
    static from(name: string, method: string, _message: string): OraoVRFError;
}
export declare class AlreadyRequested extends OraoVRFError {
    readonly method: string;
    constructor(method: string, _message: string);
}
export declare class AlreadyFulfilled extends OraoVRFError {
    readonly method: string;
    constructor(method: string, _message: string);
}
export declare class GasLimitTooBig extends OraoVRFError {
    readonly method: string;
    constructor(method: string, _message: string);
}
export declare class InsufficientBalance extends OraoVRFError {
    readonly method: string;
    constructor(method: string, _message: string);
}
export declare class NotRequested extends OraoVRFError {
    readonly method: string;
    constructor(method: string, _message: string);
}
export declare class NotVerifiable extends OraoVRFError {
    readonly method: string;
    constructor(method: string, _message: string);
}
export declare class NoVerifier extends OraoVRFError {
    readonly method: string;
    constructor(method: string, _message: string);
}
export declare class PaymentTooLarge extends OraoVRFError {
    readonly method: string;
    constructor(method: string, _message: string);
}
export declare class PendingRequestExists extends OraoVRFError {
    readonly method: string;
    constructor(method: string, _message: string);
}
export declare class Reentrant extends OraoVRFError {
    readonly method: string;
    constructor(method: string, _message: string);
}
export {};

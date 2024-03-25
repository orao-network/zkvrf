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

export class EthersError extends Error {
  readonly method?: string;
  readonly data?: string;
  readonly errorArgs?: string;
  readonly errorName?: string;
  readonly errorSignature?: string;
  readonly reason?: string | null;
  readonly code?: string;
  readonly version?: string;

  private constructor(
    // the original error
    readonly err: Error,
    // the parsed details
    details: IErrorDetails
  ) {
    const message =
      details.method && details.errorName
        ? `Function call failed in method ${details.method} with error ${details.errorName} \nError: ${err.message}`
        : `${err.message}`;
    super(message);

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
  public static handleError(err: unknown): never {
    throw EthersError.convertError(err);
  }

  /**
   * Converts an error but never throws it
   */
  public static convertError(err: unknown): Error {
    if (!(err instanceof Error)) {
      // re-throw
      throw Error(`err`);
    }

    const ethersError = EthersError.fromErr(err);

    //
    if (OraoVrfErrorNames.includes(ethersError.errorName!)) {
        return OraoVrfError.from(
            ethersError.errorName!,
            ethersError.method!,
            ethersError.err.message
        );
    }

    // re-throw
    return ethersError;
  }

  public static fromErr(err: Error & Partial<IErrorDetails>) {
    let details: IErrorDetails = {
      method: err.method ?? "",
      data: err.data ?? "",
      errorArgs: err.errorArgs ?? "",
      errorName: err.errorName ?? "",
      errorSignature: err.errorSignature ?? "",
      reason: err.reason ?? "",
      code: err.code ?? "",
      version: err.version ?? "",
    };

    const message = err.message;

    const regex =
      /\(method="(.*?)", data="(.*?)", errorArgs=(.*?), errorName="(.*?)", errorSignature="(.*?)", reason=(.*?), code=(.*?), version=(.*?)\)/;
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

export class OraoVrfError extends Error {
  constructor(
    readonly name: string,
    readonly method: string,
    _message: string
  ) {
    const message = `Function call reverted in method ${method} \nError: ${_message}`;
    super(message);

    Error.captureStackTrace(this, this.constructor);

    Object.setPrototypeOf(this, OraoVrfError.prototype);
  }

  public static from(
    name: string,
    method: string,
    _message: string
  ): OraoVrfError {
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
        return new OraoVrfError(name, method, _message);
    }
  }
}

const OraoVrfErrorNames = [
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

export class AlreadyRequested extends OraoVrfError {
  constructor(readonly method: string, _message: string) {
    super("AlreadyRequested", method, _message);

    Object.setPrototypeOf(this, AlreadyRequested.prototype);
  }
}

export class AlreadyFulfilled extends OraoVrfError {
  constructor(readonly method: string, _message: string) {
    super("AlreadyFulfilled", method, _message);

    Object.setPrototypeOf(this, AlreadyFulfilled.prototype);
  }
}

export class GasLimitTooBig extends OraoVrfError {
  constructor(readonly method: string, _message: string) {
    super("GasLimitTooBig", method, _message);

    Object.setPrototypeOf(this, GasLimitTooBig.prototype);
  }
}
export class InsufficientBalance extends OraoVrfError {
  constructor(readonly method: string, _message: string) {
    super("InsufficientBalance", method, _message);

    Object.setPrototypeOf(this, InsufficientBalance.prototype);
  }
}

export class NotRequested extends OraoVrfError {
  constructor(readonly method: string, _message: string) {
    super("NotRequested", method, _message);

    Object.setPrototypeOf(this, NotRequested.prototype);
  }
}

export class NotVerifiable extends OraoVrfError {
  constructor(readonly method: string, _message: string) {
    super("NotVerifiable", method, _message);

    Object.setPrototypeOf(this, NotVerifiable.prototype);
  }
}

export class NoVerifier extends OraoVrfError {
  constructor(readonly method: string, _message: string) {
    super("NoVerifier", method, _message);

    Object.setPrototypeOf(this, NoVerifier.prototype);
  }
}

export class PaymentTooLarge extends OraoVrfError {
  constructor(readonly method: string, _message: string) {
    super("PaymentTooLarge", method, _message);

    Object.setPrototypeOf(this, PaymentTooLarge.prototype);
  }
}

export class PendingRequestExists extends OraoVrfError {
  constructor(readonly method: string, _message: string) {
    super("PendingRequestExists", method, _message);

    Object.setPrototypeOf(this, PendingRequestExists.prototype);
  }
}

export class Reentrant extends OraoVrfError {
  constructor(readonly method: string, _message: string) {
    super("Reentrant", method, _message);

    Object.setPrototypeOf(this, Reentrant.prototype);
  }
}

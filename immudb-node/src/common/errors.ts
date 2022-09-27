

export class ImmudbClientError extends Error {
    constructor(message: string) {
        super(message)
        // Ensure the name of this error is the same as the class name
        this.name = this.constructor.name
        // This clips the constructor invocation from the stack trace. It's not
        // absolutely essential, but it does make the stack trace a little
        // nicer.
        // https://nodejs.org/api/errors.html#errors_error_capturestacktrace_targetobject_constructoropt
        Error.captureStackTrace(this, this.constructor)
    }
}

export class InternalError extends ImmudbClientError {
    data
    constructor(err: any, info?: any) {
      super(err.message);
      this.data = { err, info };
    }
}
  
export class NoResponseValueError extends ImmudbClientError {
    data
    constructor(message: string, info: any) {
        super(message)
        this.data = info
    }
}

export class OperationCanceledError extends ImmudbClientError {
    data
    constructor(message: string, info?: any) {
        super(message)
        this.data = info
    }
}
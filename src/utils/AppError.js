class ApiError extends Error {
    constructor(message, statusCode, code="INTERNAL_SERVER_ERROR") {
        super(message);

        this.name = "ApiError";
        this.statusCode = statusCode;
        this.code = code;
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor);
    }

    static badRequest(message, code="BAD_REQUEST") {
        return new ApiError(message, 400, code);
    }

    static unauthorized(message, code="UNAUTHORIZED") {
        return new ApiError(message, 401, code);
    }

    static forbidden(message, code="FORBIDDEN") {
        return new ApiError(message, 403, code);
    }

    static notFound(message, code="NOT_FOUND") {
        return new ApiError(message, 404, code);
    }

    static internal(message, code="INTERNAL_SERVER_ERROR") {
        return new ApiError(message, 500, code);
    }
}


export default ApiError;
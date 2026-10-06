import { errorResponse } from "../utils/apiResponse.js";


const errorMiddleware = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const code = err.code || "INTERNAL_SERVER_ERROR";
    const message = statusCode === 500 ? "Internal Server Error" : err.message;

    console.error(err);
    
    return errorResponse({
        res,
        message,
        statusCode,
        code,
        errors: err.errors || null,
    })
}

export default errorMiddleware;
import ApiError from "../utils/AppError.js"


const notFoundMiddleware = (req, res, next) => {
    next(ApiError.notFound(`Route not found: ${req.method} ${req.originalUrl}`));
}

export default notFoundMiddleware;
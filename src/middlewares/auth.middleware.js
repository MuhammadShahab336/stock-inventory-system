import ApiError from "../utils/AppError.js"
import { verifyAccessToken } from "../utils/jwt.js"


const authMiddleware = (req, res, next) => {
    const authorization = req.headers.authorization

    if (!authorization) {
        throw ApiError.unauthorized("Authentication is required")
    }

    const [scheme, token] = authorization.split(" ")

    if (scheme !== 'Bearer' || !token) {
        throw ApiError.unauthorized("Invalid authorization header")
    }

    try {
        const payload = verifyAccessToken(token)
        req.user = { id: payload.sub, role: payload.role }

        next()
    } catch {
        throw ApiError.unauthorized("Invalid or expired access token")
    }
}

export default authMiddleware
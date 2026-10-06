import jwt from "jsonwebtoken"
import env from "../config/env.js"

const { sign, verify } = jwt

export const generateAccessToken = (payload) => {
    return sign(
        payload,
        env.jwt.accessSecret,
        { expiresIn: env.jwt.accessExpiresIn }
    )
}

export const generateRefreshToken = (payload) => {
    return sign(
        payload,
        env.jwt.refreshSecret,
        { expiresIn: env.jwt.refreshExpiresIn }
    )
}

export const verifyAccessToken = (token) => {
    return verify(
        token,
        env.jwt.accessSecret
    )
}

export const verifyRefreshToken = (token) => {
    return verify(
        token,
        env.jwt.refreshSecret
    )
}
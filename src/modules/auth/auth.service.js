import ApiError from "../../utils/AppError.js"
import { generateAccessToken } from "../../utils/jwt.js"
import { comparePassword, hashPassword } from "../../utils/password.js"
import userRepository from "../users/user.repository.js"


const createToken = async (user) => {
    const accessToken = generateAccessToken({
        sub: user.id,
        role: user.role,
    })

    return { accessToken }
}

const register = async ({ first_name, last_name, email, password }) => {
    const existingUser = await userRepository.findByEmail(email)

    if (existingUser) {
        throw ApiError.badRequest(`Email is already registered`);
    }

    const passwordHash = await hashPassword(password)

    const user = await userRepository.create({
        first_name, last_name, email, password: passwordHash
    })

    const token = await createToken(user)

    return {
        user: {
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            role: user.role,
            status: user.status
        },
        ...token
    }
}

const login = async ({ email, password }) => {
    const user = await userRepository.findByEmail(email)

    if (!user) {
        throw ApiError.badRequest(`Invalid email or password`);
    }

    const passwordValid = await comparePassword(password, user.password)

    if (!passwordValid) {
        throw ApiError.badRequest(`Invalid email or password`);
    }

    if (user.status !== "ACTIVE") {
        throw ApiError.badRequest(`User account is not active`);
    }

    const token = await createToken(user)

    return {
        user: {
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            role: user.role,
            status: user.status
        },
        ...token
    }
}

export default {
    createToken,
    register,
    login
}
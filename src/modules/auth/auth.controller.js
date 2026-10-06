import { successResponse } from "../../utils/apiResponse.js"
import authService from "./auth.service.js"


const register = async (req, res) => {
    const result = await authService.register(req.body)

    return successResponse({
        res,
        statusCode: 201,
        message: "Registration Succesfull",
        data: result
    })
}

const login = async (req, res) => {
    const result = await authService.login(req.body);

    return successResponse({
        res,
        statusCode: 200,
        message: "Login Successfully",
        data: result
    })
}

const me = async (req, res) => {
    const user = await authService.currentUser(req.user.id)

    return successResponse({
        res,
        statusCode: 200,
        message: "Current user retrieved",
        data: user
    })
}

export default {
    register,
    login,
    me
}
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

export default {
    register,
    login
}
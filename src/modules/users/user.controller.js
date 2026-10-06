import { successResponse } from "../../utils/apiResponse.js";
import userService from "./user.service.js";



const list = async (req, res) => {
    const users = await userService.list();

    return successResponse({
        res,
        message: "Users retrieved successfully",
        statusCode: 200,
        data: users
    });
};

const create = async (req, res) => {
    const users = await userService.create(req.body);

    return successResponse({
        res,
        message: "User created successfully",
        statusCode: 201,
        data: users
    });
}

const update = async (req, res) => {
    const id = Number(req.params.id)
    const users = await userService.update(id, req.body);

    return successResponse({
        res,
        message: "User updated successfully",
        statusCode: 200,
        data: users
    });
}


const remove = async (req, res) => {
    const id = Number(req.params.id)
    await userService.remove(id);

    return successResponse({
        res,
        message: "User removed successfully",
        statusCode: 200
    });
};

export default {
    list,
    create,
    update,
    remove
}
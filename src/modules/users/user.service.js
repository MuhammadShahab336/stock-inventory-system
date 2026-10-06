import ApiError from "../../utils/AppError.js";
import userRepository from "./user.repository.js";



const list = async () => {
    const users = await userRepository.list();

    return users;
}


const create = async ({ first_name, last_name, email }) => {
    const existingUser = await userRepository.findByEmail(email);

    if(existingUser) {
        throw ApiError.badRequest(`User with email ${email} already exists`);
    }

    return await userRepository.create({ first_name, last_name, email });
}

const update = async (id, data) => {
    const user = await userRepository.findById(id);

    if (!user) {
        throw ApiError.notFound(`User with ID ${id} not found`);
    }

    return await userRepository.update(id, data);
}

const remove = async (id) => {
    const user = await userRepository.findById(id);

    if (!user) {
        throw ApiError.notFound(`User with ID ${id} not found`);
    }

    return await userRepository.remove(id);
}


export default {
    list,
    create,
    update,
    remove
}
import prisma from "../../database/prisma.js";

const create = async (data) => {
    return await prisma.user.create({ data })
}

const list = async () => {
    return await prisma.user.findMany()
}

const findById = async (id) => {
    return await prisma.user.findUnique({ where: { id } })
}

const findByEmail = async (email) => {
    return await prisma.user.findUnique({ where: { email } })
}

const update = async (id, data) => {
    return await prisma.user.update({ where: { id }, data })
}

const remove = async (id) => {
    return await prisma.user.delete({ where: { id } })
}

export default {
    list,
    create,
    findById,
    findByEmail,
    update,
    remove
}
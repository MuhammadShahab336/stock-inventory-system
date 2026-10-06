import z from "zod";


const register = z.object({
    first_name: z.string().trim().min(2).max(100),
    last_name: z.string().trim().min(2).max(100),
    email: z.string().trim().email().max(255).toLowerCase(),
    password: z.string().min(8).max(72),
});

const login = z.object({
    email: z.string().trim().email(),
    password: z.string().min(8)
})

export default {
    register,
    login
}
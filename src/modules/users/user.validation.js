import z from "zod";


const create = z.object({
    first_name: z.string().trim().min(2, "First name is required").max(50, "First name must be less than 50 characters"),
    last_name: z.string().trim().min(2, "Last name is required").max(50, "Last name must be less than 50 characters"),
    email: z.string().trim().email("Invalid email address").max(100, "Email must be less than 100 characters"),
})

const update = z.object({
    first_name: z.string().trim().min(2).max(50).optional(),
    last_name: z.string().trim().min(2).max(50).optional(),
    email: z.string().trim().email().max(100).optional(),
    status: z.enum(["ACTIVE", "INACTIVE"]).optional(),
}).refine((data) => Object.keys(data).length > 0, {
    message: "At least one field must be provided for update",
});

const id = z.object({
    id: z.coerce.number().int().positive(),
});

export default {
    create,
    update,
    id,
};

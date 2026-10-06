import ApiError from "../utils/AppError.js";


const validate = (schema, source = "body") => {
    return (req, res, next) => {
        const result = schema.safeParse(req[source], { abortEarly: false });

        if (!result.success) {

            const errors = result.error.issues.map(issue => ({
                field: issue.path.join("."),
                message: issue.message
            }));
            return next(ApiError.badRequest("Validation error", errors));
        }

        req[source] = result.data;

        next();
    }
}

export default validate;
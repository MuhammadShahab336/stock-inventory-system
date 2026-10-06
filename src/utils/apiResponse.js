export const successResponse = ({
    res,
    data = null,
    message = "Success",
    statusCode = 200,
}) => {
    return res.status(statusCode).json({
        success: true,
        message,
        data,
    });
};

export const errorResponse = ({
    res,
    message = "Something went wrong",
    statusCode = 500,
    code = "INTERNAL_SERVER_ERROR",
    errors = null,
}) => {
    return res.status(statusCode).json({
        success: false,
        message,
        code,
        errors,
    });
};
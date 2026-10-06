import express from "express";
import prisma from "./database/prisma.js";
import notFoundMiddleware from "./middlewares/notFound.middleware.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import ApiError from "./utils/AppError.js";
import userRoutes from "./modules/users/user.routes.js";
import authRoutes from "./modules/auth/auth.routes.js"

const app = express();

app.use(express.json());


app.get("/health", async (req, res) => {
    const count = await prisma.user.count();
    res.status(200).json({ status: "ok", message: "Server is healthy", count });
});

app.get("/test", (req, res) => {
    throw ApiError.badRequest("This is a test error");
});

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

// 404
app.use(notFoundMiddleware);
// global error handler
app.use(errorMiddleware)


export default app;
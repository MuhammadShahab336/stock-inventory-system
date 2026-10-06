import "dotenv/config";
import app from "./index.js";
import prisma from "./database/prisma.js";
import env from "./config/env.js";

const PORT = env.port || 5000;

const startServer = async () => {
    try {
        await prisma.$connect();

        console.log("Database connected successfully.");

        const server = app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });

        const shutdown = (signal) => {
            console.log(signal + ": Shutting down server...");
            server.close(() => {
                console.log("Server closed.");
                process.exit(0);
            })
        }

        process.on("SIGINT", () => shutdown("SIGINT"));
        process.on("SIGTERM", () => shutdown("SIGTERM"));



    } catch (error) {
        console.error("Failed to start server:", error);

        await prisma.$disconnect();

        process.exit(1);
    }
}

startServer();


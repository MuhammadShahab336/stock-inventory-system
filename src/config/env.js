const requiredEnvVariables = [
    "DATABASE_HOST",
    "DATABASE_PORT",
    "DATABASE_USER",
    "DATABASE_PASSWORD",
    "DATABASE_NAME",
    "JWT_ACCESS_SECRET",
    "JWT_REFRESH_SECRET",
];

for (const variable of requiredEnvVariables) {
    if (process.env[variable] === undefined) {
        throw new Error(`Missing required environment variable: ${variable}`);
    }
}

const env = {
    nodeEnv: process.env.NODE_ENV || "development",

    port: Number(process.env.PORT) || 5000,

    database: {
        host: process.env.DATABASE_HOST,
        port: Number(process.env.DATABASE_PORT),
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        name: process.env.DATABASE_NAME,
    },

    jwt: {
        accessSecret: process.env.JWT_ACCESS_SECRET,
        refreshSecret: process.env.JWT_REFRESH_SECRET,

        accessExpiresIn:
            process.env.JWT_ACCESS_EXPIRES_IN || "15m",

        refreshExpiresIn:
            process.env.JWT_REFRESH_EXPIRES_IN || "7d",
    },
};

export default env;
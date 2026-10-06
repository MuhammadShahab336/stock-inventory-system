const requiredEnvVariables = [
  "DATABASE_HOST",
  "DATABASE_PORT",
  "DATABASE_USER",
  "DATABASE_PASSWORD",
  "DATABASE_NAME",
];

for (const variable of requiredEnvVariables) {
    if (process.env[variable] === undefined) {
        throw new Error(`Missing required environment variable: ${variable}`);
    }
}

const env = {
    NODE_ENV: process.env.NODE_ENV || "development",
    PORT: process.env.PORT || 5000,
    DATABASE_HOST: process.env.DATABASE_HOST,
    DATABASE_PORT: Number(process.env.DATABASE_PORT),
    DATABASE_USER: process.env.DATABASE_USER,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
    DATABASE_NAME: process.env.DATABASE_NAME,
}

export default env;
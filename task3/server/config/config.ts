import "dotenv/config";
export const PORT = process.env.PORT || 4000;
export const DATABASE_NAME_P = process.env.DATABASE_NAME_P || "mongodb://localhost:27017"
export const DATABASE_NAME_U = process.env.DATABASE_NAME_U || "mongodb://localhost:27017";
export const SECRET_KEY = process.env.SECRET_KEY || "llaveSecreta";
export const SECRET_KEY_REFRESH = process.env.SECRET_KEY_REFRESH || "llaveSecretaRefresh";
export const EXPIRES_IN = process.env.EXPIRES_IN || "24h";

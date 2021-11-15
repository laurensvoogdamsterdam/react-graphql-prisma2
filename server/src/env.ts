/**
 * Loading env vars into memory accessible by the main threads
 */
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, ".env") });

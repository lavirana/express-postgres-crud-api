import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();
const { Pool } = pkg;

console.log(
  "Connecting to:",
  process.env.DB_NAME,
  "on",
  process.env.DB_HOST + ":" + process.env.DB_PORT
);

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,      // 127.0.0.1 ✔
  database: process.env.DB_NAME,  // no quotes ✔
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT), // IMPORTANT ✔
  ssl: false,
  connectionTimeoutMillis: 5000,
  idleTimeoutMillis: 30000
});

pool.on("connect", () => {
  console.log("✅ Connected to PostgreSQL successfully");
});

pool.on("error", (err) => {
  console.error("❌ Unexpected PG error", err);
});

export default pool;

import Redis from "ioredis";
import dotenv from "dotenv";
dotenv.config();

const client = new Redis({
  port: process.env.REDIS_PORT, // Redis port
  host: process.env.REDIS_HOST, // Redis host
  password: process.env.REDIS_PASSWORD,
  db: 0,
});

client.on("connect", () => console.log("🔌 Connected to Redis"));
client.on("ready", () => console.log("✅ Redis is ready to use"));
client.on("error", (err) => console.log(err.message));
client.on("end", () => console.log("❌ Client disconnected from Redis"));

export default client;

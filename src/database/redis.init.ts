import { createClient } from "redis";
import dotenv from "dotenv";

dotenv.config();

interface RedisConfig {
  username?: string;
  password?: string;
  host: string;
  port: number;
}

const redisConfig: RedisConfig = {
  username: process.env.REDIS_USERNAME || "default",
  password: process.env.REDIS_PASSWORD,
  host: process.env.REDIS_HOST || "",
  port: Number(process.env.REDIS_PORT || ""),
};

const redisClient = createClient({
  username: redisConfig.username,
  password: redisConfig.password,
  socket: {
    host: redisConfig.host,
    port: redisConfig.port,
    connectTimeout: 10000,
  },
  // commandsQueueMaxLength:5,
  // disableClientInfo: false,
});

redisClient.on("error", (err) => console.log("Redis Client Error:", err));

const connectRedis = async () => {
  try {
    // Kiểm tra trạng thái kết nối
    if (!redisClient.isOpen) {
      await redisClient.connect();
      console.log("Redis connected successfully 🚀");
    } else {
      console.log("Redis is already connected.");
    }
    // redisClient.PING().then((res) => {
    //     console.log('PING : ', res)
    // })
  } catch (err) {
    console.error("Error connecting to Redis:", err);
    process.exit(1);
  }
};

const clearAllData = async () => {
  try {
    // Xóa tất cả các dữ liệu trong Redis
    await redisClient.flushAll();
    console.log("All Redis data has been cleared.");
  } catch (err) {
    console.error("Error clearing all data from Redis:", err);
  }
};

process.on("SIGINT", async () => {
  console.log("Closing Redis connection...");
  if (redisClient.isOpen) {
    await clearAllData();
    await redisClient.disconnect();
    console.log("Redis connection closed.");
  }
  process.exit(0);
});

export { redisClient, connectRedis };

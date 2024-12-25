import { redisClient } from "database/redis.init";
import { UserService } from "modules/Users/user.services";

export const checkKeyService = async (key: string): Promise<boolean> => {
  try {
    // Check key
    const exists = await redisClient.exists(key);
    if (exists === 0) {
      return false
    }
    return true

    // // Lấy TTL của khóa (thời gian hết hạn)
    // const ttl = await redisClient.ttl(key);
    // let expirationStatus = "";
    // if (ttl === -1) {
    //   expirationStatus = "Key does not have an expiration time.";
    // } else if (ttl > 0) {
    //   expirationStatus = `Key will expire in ${ttl} seconds.`;
    // }

    // // Lấy giá trị của khóa
    // const value = await redisClient.get(key);
    // return {
    //   key,
    //   exists: true,
    //   value,
    //   expirationStatus,
    // };
  } catch (err) {
    console.error(`Error checking key: ${key} in Redis:`, err);
    throw err;
  }
};

export const saveTokensToRedis = async (
  key: string,
  accessToken: string,
  refreshToken: string
) => {
  const timeAccess = parseInt(
    process.env.ACCESS_TOKEN_EXPIRE_TIME_REDIS || "30"
  );
  const timeRefresh = parseInt(
    process.env.REFRESH_TOKEN_EXPIRE_TIME_REDIS || "300"
  );

  await redisClient.setEx(
    `accessToken:${key}`,
    timeAccess,
    accessToken
  );
  await redisClient.setEx(
    `refreshToken:${key}`,
    timeRefresh,
    refreshToken
  );
  console.log(`REDISCLIENT:: Tokens of userId:${key} saved to Redis`);
};

export const getAccessToken = async (userId: string) => {
  try {
    const accessToken = await redisClient.get(`accessToken:${userId}`);
    if (accessToken) {
      console.log(`AccessToken for user ${userId}:`, accessToken);
      return accessToken;
    } else {
      console.log(`No AccessToken found for user ${userId}`);
      return null;
    }
  } catch (err) {
    console.error("Error getting accessToken:", err);
    return null;
  }
};

export const checkKeyRefreshToken = async (userId: string) => {
  try {
    const refreshToken = await redisClient.get(`refreshToken:${userId}`);
    if (refreshToken) {
      return true;
    } else {
      console.log(`No RefreshToken found for user ${userId}`);
      return false;
    }
  } catch (err) {
    console.error("Error getting key refreshToken:", err);
    return null;
  }
};

export const checkRedisValue = async (userId: string) => {
  const accessKey = `accessToken:${userId}`;
  const refreshKey = `refreshToken:${userId}`;
  try {
    // Check access token
    const accessToken = await redisClient.get(accessKey);
    if (accessToken) {
      console.log(`Access Token for user ${userId}: ${accessToken}`);
    } else {
      console.log(`Access Tokesn for user ${userId} does not exist.`);
    }

    // Check refresh token
    const refreshToken = await redisClient.get(refreshKey);
    if (refreshToken) {
      console.log(`Refresh Token for user ${userId}: ${refreshToken}`);
    } else {
      console.log(`Refresh Token for user ${userId} does not exist.`);
    }
  } catch (err) {
    console.error("Error getting value from Redis:", err);
    
  }
};

export const deleteRedisKey = async (key: string) => {
  try {
    const result = await redisClient.del(key);
    if (result > 0) {
      return `Key: ${key} has been deleted.`
    } else {
      throw new Error("Key: does not exist.")
    }
  } catch (err) {
      console.error("Error deleting key from Redis:", err);
      throw err;
  }
};

export const getAllKeys = async () => {
  try {
    const keys = await redisClient.keys("*");
    return keys;
  } catch (err) {
    console.error("Error getting all keys from Redis:", err);
  }
};

export const clearAllData = async () => {
  try {
    await redisClient.flushAll();
    console.log("All Redis data has been cleared.");
  } catch (err) {
    console.error("Error clearing all data from Redis:", err);
  }
};

export const checkKeyExpiration = async (key: string) => {
  try {
    const ttl = await redisClient.ttl(key);
    if (ttl === -1) {
      return `Key: ${key} does not have an expiration time.`;
    } else if (ttl === -2) {
    return `Key: ${key} does not exist.`;
    } else {
    return `Key: ${key} will expire in ${ttl} seconds.`;
    }
  } catch (err) {
    console.error("Error checking key expiration in Redis:", err);
  }
};

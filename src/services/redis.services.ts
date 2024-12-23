import { redisClient } from "database/redis.init";

export const saveTokensToRedis = async (
  userId: string,
  accessToken: string,
  refreshToken: string
) => {
  const timeAccess = parseInt(
    process.env.ACCESS_TOKEN_EXPIRE_TIME_REDIS || "30"
  );
  const timeRefresh = parseInt(
    process.env.REFRESH_TOKEN_EXPIRE_TIME_REDIS || "300"
  );
  await redisClient.setEx(`accessToken:${userId}`, timeAccess, accessToken);
  await redisClient.setEx(`refreshToken:${userId}`, timeRefresh, refreshToken);
  console.log(`REDISCLIENT:: Tokens of userId:${userId} saved to Redis`);
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

export const getRefreshToken = async (userId: string) => {
  try {
    const refreshToken = await redisClient.get(`refreshToken:${userId}`);
    if (refreshToken) {
      return true;
    } else {
      console.log(`No RefreshToken found for user ${userId}`);
      return false;
    }
  } catch (err) {
    console.error("Error getting refreshToken:", err);
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
      console.log(`Key: ${key} does not have an expiration time.`);
    } else if (ttl === -2) {
      console.log(`Key: ${key} does not exist.`);
    } else {
      console.log(`Key: ${key} will expire in ${ttl} seconds.`);
    }
  } catch (err) {
    console.error("Error checking key expiration in Redis:", err);
  }
};

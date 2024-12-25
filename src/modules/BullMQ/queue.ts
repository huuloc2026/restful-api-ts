import { Queue } from "bullmq";
import dotenv from "dotenv";
import { emailWorker } from "./emai.process";
import { randomUUID } from "crypto";


dotenv.config();
const RedisConnection = {
  host: process.env.REDIS_HOST || "localhost",
  port: Number(process.env.REDIS_PORT || 6379),
  password: process.env.REDIS_PASSWORD || undefined,
};

const emailQueue = new Queue("emailQueue", {
  connection: RedisConnection,
});



const emailSending = async (data:any) => {
  await emailQueue.add("sendEmail", data);
  console.clear()
  console.log(`Job sendEmail to ${data} added!`);
};





export { emailQueue, emailSending ,RedisConnection };

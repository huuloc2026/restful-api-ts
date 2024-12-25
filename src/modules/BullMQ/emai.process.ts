// email.process.ts
import { Worker } from "bullmq";
import { emailQueue,RedisConnection } from "./queue"; // Đảm bảo emailQueue đã được khởi tạo
import { sendEmail } from "modules/nodemailer/nodemailer";

// Khởi tạo worker để xử lý các job trong queue "emailSending"

const processTak = async (job:any) => {
  await sendEmail(job.data,"Thank you for signing up for our website!")
  console.log(`Worker sending email to ${job.data}`)
  return;
}

const emailWorker = new Worker(emailQueue.name, processTak, {
  connection: RedisConnection,
});


// Đăng ký sự kiện khi job hoàn thành
emailWorker.on("completed", (job:any) => {
  console.log(`Job completed: ${job.data}`);
});

// Đăng ký sự kiện khi job thất bại
emailWorker.on("failed", (job, err) => {
  if (job) {
    console.error(`Job failed: ${job}, Error: ${err.message}`);
  } else {
    console.error("Job failed, but job object is undefined.", err);
  }
});

export { emailWorker };

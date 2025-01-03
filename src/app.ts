import "reflect-metadata";
import express from 'express';
import AppDataSource from "./database/data-source";
import cookieParser from 'cookie-parser';
import router from "Routes/Root.routes";
import errorHandler from "middlewares/errorHandler";
import cors from 'cors';
import { connectRedis } from "database/redis.init";
import { serverAdapter } from "modules/BullBoard/Bullboard";

console.clear()

const app = express();
const port = 5000;

app.use(express.json({ limit: '50kb' }));
app.use(express.urlencoded({ limit: '50kb', extended: true }));
app.use(cookieParser());
app.use('/v1',router)
app.use("/admin/queues", serverAdapter.getRouter());

app.use(errorHandler);

(async () => {
    try {
        // Connect Database
        await AppDataSource.initialize();
        console.log("Database connected successfully! 🚀");

        // Connect Redis
        await connectRedis();

        // Khởi động server
        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
        });
    } catch (error) {
        console.error("Initialization failed:", error);
        process.exit(1); // Stop server if can not connect
    }
})();


process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception: ', error);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection: ', reason);
});



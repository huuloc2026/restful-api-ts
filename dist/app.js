import "reflect-metadata";
import express from 'express';
import AppDataSource from "./database/datasource.config.ts";
import cookieParser from 'cookie-parser';
import router from "Routes/Root.routes";
import errorHandler from "middlewares/errorHandler";
import cors from 'cors';
console.clear();
const app = express();
const port = 3000;
app.use(express.json({ limit: '50kb' }));
app.use(express.urlencoded({ limit: '50kb', extended: true }));
app.use(cookieParser());
app.use('/v1', router);
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));
app.use(errorHandler);
AppDataSource.initialize()
    .then(() => {
    console.log("Database connected successfully!");
})
    .catch((error) => {
    console.error("Error during Data Source initialization:", error);
});
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception: ', error);
});
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection: ', reason);
});
//# sourceMappingURL=app.js.map
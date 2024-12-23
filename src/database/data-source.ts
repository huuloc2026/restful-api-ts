import "reflect-metadata";
import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
import { UserAdvance } from "modules/UserAdvance/UserAdvance.entity";
import { User } from "modules/Users/user.entity";
dotenv.config();

const AppDataSource = new DataSource({
    type: process.env.DB_TYPE as "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "3306"),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    logging: false,
    entities: [User, UserAdvance],
    migrations: ["src/migrations/**/*.ts"],
    synchronize: true,
});
export default AppDataSource;

import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET, ACCESS_TOKEN_EXPIRE_TIME, REFRESH_TOKEN_EXPIRE_TIME } = process.env;

export const generateAccessToken = (userId: number) => {
    return jwt.sign({ userId }, ACCESS_TOKEN_SECRET as string, { expiresIn: ACCESS_TOKEN_EXPIRE_TIME });
};

export const generateRefreshToken = (userId: number) => {
    return jwt.sign({ userId }, REFRESH_TOKEN_SECRET as string, { expiresIn: REFRESH_TOKEN_EXPIRE_TIME });
};

export const verifyAccessToken = (token: string) => {
    return jwt.verify(token, ACCESS_TOKEN_SECRET as string);
};

export const verifyRefreshToken = (token: string) => {
    return jwt.verify(token, REFRESH_TOKEN_SECRET as string);
};

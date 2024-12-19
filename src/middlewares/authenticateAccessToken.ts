import express, { Request, Response, NextFunction } from 'express';
import { verifyAccessToken } from 'utils/jwtUtil';
import responseHandler from 'utils/ResponseHandler';

export const authenticateAccessToken = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        throw new Error('Access token required');
    }
    try {
        const user = verifyAccessToken(token);
        req.accessToken = user; // Lưu thông tin user từ token vào request
        next();
    } catch (err) {
        responseHandler.error(res, 401, err,'Invalid or expired Access token ! Please get new Access Token')
    }
};

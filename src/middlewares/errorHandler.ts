import { Request, Response, NextFunction } from 'express';

function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    if (res.headersSent) {
        return next(err); // Tránh gửi phản hồi nhiều lần
    }
    res.status(500).json({
        message: err.message,
        stack: err.stack
    });
}

export default errorHandler;

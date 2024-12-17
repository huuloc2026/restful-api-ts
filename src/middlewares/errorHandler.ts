import { Request, Response, NextFunction } from 'express';

function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
    console.error(err); 
    res.status(500).json({
        message: 'Something went wrong!',
        error: err.message || err,
    });
}

export default errorHandler;

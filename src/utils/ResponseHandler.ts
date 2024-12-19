import { Response } from 'express';

interface IResponseData {
    message?: string;
    data?: any;
    error?: string;
}

const responseHandler = {
    // Phản hồi thành công
    success: (res: Response, statusCode: number, data: any, message: string = 'Request successful') => {
        return res.status(statusCode).json({
            message,
            data,
            error: null, 
        });
    },

    // Phản hồi lỗi
    error: (res: Response, statusCode: number, error: unknown, message: string = 'An error occurred') => {
        let errorMessage = 'An unexpected error occurred';

        if (error instanceof Error) {
            errorMessage = error.message; 
        } else if (typeof error === 'string') {
            errorMessage = error; // Nếu error là chuỗi
        } else if (typeof error === 'object' && error !== null && 'message' in error) {
            errorMessage = (error as any).message; // Nếu error có thuộc tính message
        }

        return res.status(statusCode).json({
            message: errorMessage,
            data: null, 
            error: message, 
        });
    },
};

export default responseHandler;

import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { Request, Response, NextFunction } from 'express';
import responseHandler from 'utils/ResponseHandler';

export const validateMiddleware = (dtoClass: any) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const dtoInstance = plainToInstance(dtoClass, req.body); // Chuyển đổi dữ liệu thành instance của DTO
        const errors = await validate(dtoInstance); // Xác thực dữ liệu
        if (errors.length > 0) {
            const messages = errors
                .map(err => Object.values(err.constraints || {})) // Lấy các lỗi từ các constraints
                .flat(); // Kết hợp tất cả thông báo lỗi thành một mảng
            
        }
        next(); 
    };
};

import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { Request, Response, NextFunction } from 'express';
import responseHandler from 'utils/ResponseHandler';

export const validateMiddleware = (dtoClass: any) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const dtoInstance = plainToInstance(dtoClass, req.body, { excludeExtraneousValues: true }); 
        const errors = await validate(dtoInstance);
        if (errors.length > 0 && errors) {
           
            const messages = errors
                .map(err => {
             
                    return Object.values(err.constraints || {}).join(', ');
                })
                .flat(); 
  
             responseHandler.error(res, 400, messages[0], 'Validation failed');
        }

        next(); // Nếu không có lỗi, tiếp tục gọi controller
    };
};

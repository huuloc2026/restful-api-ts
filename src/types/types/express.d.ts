import { JwtPayload } from 'jsonwebtoken';

declare global {
    namespace Express {
        export interface Request {
            userId?: string | JwtPayload;
            accessToken?: string | JwtPayload; 
        }
    }
}

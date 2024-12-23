import { User } from 'modules/Users/user.entity';
import AppDataSource from 'database/data-source';
import { verifyPassword } from 'utils/PasswordUtil';
import { generateAccessToken, generateRefreshToken } from 'utils/jwtUtil';

import { checkRedisValue, deleteRedisKey, saveTokensToRedis } from '../../services/redis.services';
export class AuthService {
    private userRepository = AppDataSource.getRepository(User);
    async loginUser(userName: string, password: string): Promise<any> {
        const existingUser = await this.userRepository.find({
            where: { userName: userName }
        });
        const user = existingUser[0];
        if (!existingUser || existingUser.length === 0) {
            throw new Error('Username does NOT exists');
        }
        // console.log(existingUser[0]);
        const isPasswordMatch = await verifyPassword(password, user.password);
        if (!isPasswordMatch) {
            throw new Error('Invalid password');
        }
        const accessToken = generateAccessToken(user.userId)
        const refreshToken = generateRefreshToken(user.userId)
        
        //save token to redis
        const keyRedis = user.userId.toString()
        await saveTokensToRedis(keyRedis, accessToken, refreshToken)
        // await checkRedisValue(keyRedis) 
        const UserInfo = {
            UserId: user.userId,
            userName: user.userName,
            accessToken: accessToken,
            refreshToken: refreshToken,
        }
        return UserInfo ;
    }
    async LogoutUser(userId:string):Promise<any>{
        //delete accessToken when logout
        const deleteKey = await deleteRedisKey(`accessToken:${userId}`)
        return deleteKey
    }
}
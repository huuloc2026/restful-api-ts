import { User } from 'entities/User.entity';
import AppDataSource from 'database/datasource.config.ts';
import { verifyPassword } from 'utils/PasswordUtil';
import { generateAccessToken, generateRefreshToken } from 'utils/jwtUtil';
export class AuthService {
    userRepository = AppDataSource.getRepository(User);
    async loginUser(userName, password) {
        const existingUser = await this.userRepository.find({
            where: { userName: userName }
        });
        // console.log(existingUser);
        if (!existingUser) {
            throw new Error('Username does not exists');
        }
        // console.log(existingUser[0]);
        const isPasswordMatch = await verifyPassword(password, existingUser[0].password);
        if (!isPasswordMatch) {
            throw new Error('Invalid password');
        }
        const accessToken = generateAccessToken(existingUser[0].userId);
        const refreshToken = generateRefreshToken(existingUser[0].userId);
        const UserInfo = {
            UserId: existingUser[0].userId,
            userName,
            accessToken: accessToken,
            refreshToken: refreshToken,
        };
        return UserInfo;
    }
}
//# sourceMappingURL=Auth.services.js.map

import { User } from 'entities/User.entity';
import AppDataSource from 'database/ormconfig';
import { randomUUID } from 'crypto';
import { hashPassword } from 'utils/PasswordUtil';
export class UserService {
    private userRepository = AppDataSource.getRepository(User);
    // Tạo mới User
    async createUser(userName: string, password: string,uass:string,fullName: string, email: string, phoneNumber: string): Promise<User>  {
        const existingUser = await this.userRepository.findOne({
            where: { userName: userName }
        });
        if (existingUser) {
            throw new Error('Username already exists');
        }
        const uuid: string = randomUUID();
        const hashedPassword = await hashPassword(password)
        const newUser = new User(userName, hashedPassword,uass,uuid, fullName, email, phoneNumber); 
        await this.userRepository.save(newUser);
        return newUser;
    }
    // // Lấy tất cả User
    async getUsers() {
        const users = await this.userRepository.find();
        return users;
    }

    // Lấy User theo userId
    async getUserById(userId: number) {
        const user = await this.userRepository.findOneBy({ userId });
        if (user) {
            console.log('User found:', user);
            return user;
        }
        console.log('User not found!');
        return null;
    }

    // Cập nhật User
    async updateUser(userId: number, updatedData: Partial<User>) {
        let user = await this.userRepository.findOneBy({ userId });

        if (user) {
            user = { ...user, ...updatedData }; // Cập nhật dữ liệu mới vào user
            await this.userRepository.save(user);
            console.log('User updated:', user);
            return user;
        } else {
            console.log('User not found!');
            return null;
        }
    }

    // Xóa User
    async deleteUser(userId: number) {
        const user = await this.userRepository.findOneBy({ userId });

        if (user) {
            await this.userRepository.remove(user);
            console.log('User deleted:', userId);
            return userId;
        } else {
            console.log('User not found!');
            return null;
        }
    }
}
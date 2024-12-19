import { UserAdvance } from 'entities/UserAdvance.entity';
import AppDataSource from 'database/datasource.config.ts';
export class UserAdvanceService {
    userAdvanceRepository = AppDataSource.getRepository(UserAdvance);
    // Tạo mới UserAdvance
    async createUserAdvance(userId, address, dob, profileUrl) {
        const newUserAdvance = new UserAdvance(address, dob, profileUrl, userId, new Date(), userId, new Date());
        await this.userAdvanceRepository.save(newUserAdvance);
        return newUserAdvance;
    }
    // Lấy tất cả UserAdvance
    async getUserAdvances() {
        const userAdvances = await this.userAdvanceRepository.find();
        console.log('All UserAdvances:', userAdvances);
        return userAdvances;
    }
    // Lấy UserAdvance theo userId
    async getUserAdvanceByUserId(userId) {
        const userAdvance = await this.userAdvanceRepository.findOneBy({ userId });
        if (userAdvance) {
            console.log('UserAdvance found:', userAdvance);
            return userAdvance;
        }
        console.log('UserAdvance not found!');
        return null;
    }
    // Cập nhật UserAdvance
    async updateUserAdvance(userId, updatedData) {
        let userAdvance = await this.userAdvanceRepository.findOneBy({ userId });
        if (userAdvance) {
            userAdvance = { ...userAdvance, ...updatedData }; // Cập nhật dữ liệu mới vào userAdvance
            await this.userAdvanceRepository.save(userAdvance);
            console.log('UserAdvance updated:', userAdvance);
            return userAdvance;
        }
        else {
            console.log('UserAdvance not found!');
            return null;
        }
    }
    // Xóa UserAdvance
    async deleteUserAdvance(userId) {
        const userAdvance = await this.userAdvanceRepository.findOneBy({ userId });
        if (userAdvance) {
            await this.userAdvanceRepository.remove(userAdvance);
            console.log('UserAdvance deleted:', userId);
            return userId;
        }
        else {
            console.log('UserAdvance not found!');
            return null;
        }
    }
}
//# sourceMappingURL=UserAdvance.services.js.map
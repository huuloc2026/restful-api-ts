import AppDataSource from "database/ormconfig";
import { Shop } from "entities/Shop.entity";
import { hashPassword } from "utils/PasswordUtil";

export class ShopService {
    private shopRepository = AppDataSource.getRepository(Shop);
    async SignUpShop(email: string, password: string, phoneNumber: string) {
        const existingUser = await this.shopRepository.find({
            where: { email: email }
        });
        
        const hashedPassword = await hashPassword(password)
        console.log(hashPassword);
        const newShop = new Shop(email, hashedPassword, phoneNumber);
        await this.shopRepository.save(newShop);
        return newShop;
    }

}
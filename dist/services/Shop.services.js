import AppDataSource from "database/datasource.config.ts";
import { Shop } from "entities/Shop.entity";
import { hashPassword } from "utils/PasswordUtil";
export class ShopService {
    shopRepository = AppDataSource.getRepository(Shop);
    async SignUpShop(email, password, phoneNumber) {
        const existingUser = await this.shopRepository.find({
            where: { email: email }
        });
        const hashedPassword = await hashPassword(password);
        console.log(hashPassword);
        const newShop = new Shop(email, hashedPassword, phoneNumber);
        await this.shopRepository.save(newShop);
        return newShop;
    }
}
//# sourceMappingURL=Shop.services.js.map
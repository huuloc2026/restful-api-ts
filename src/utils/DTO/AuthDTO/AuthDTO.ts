import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString} from 'class-validator';

export class AuthDTO {
    @Expose()
    @IsNotEmpty({ message: 'userName is required' })
    userName: string;

    @Expose()
    @IsNotEmpty({ message: 'password is required' })
    password: string;

    constructor(userName: string, password: string) {
        this.userName = userName;
        this.password = password;
    }
}

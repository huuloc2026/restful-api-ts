import { Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsOptional, IsString, Length, Matches } from 'class-validator';

export class CreateUserDTO {
    @Expose()
    @IsString()
    @IsNotEmpty({ message: 'userName is required' })
    userName!: string;

    @Expose()
    @IsString()
    @IsNotEmpty({ message: 'password is required' })
    password!: string;

    @Expose()
    @IsString()
    @IsNotEmpty({ message: 'fullName is required' })
    fullName!: string;

    @Expose()
    @IsEmail({}, { message: 'Invalid email format' })
    @IsOptional()
    email?: string;

    @IsString()
    @IsOptional()
    @Length(10, 15, { message: 'phoneNumber must be between 10 and 15 characters' })
    @Matches(/^\+?[1-9]\d{1,14}$/, { message: 'phoneNumber must be a valid phone number' })
    phoneNumber?: string;
    
}

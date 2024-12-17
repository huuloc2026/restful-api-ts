import { IsEmail, IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class CreateUserDTO {
    @IsString()
    @IsNotEmpty({ message: 'userName is required' })
    userName!: string;

    @IsString()
    @IsNotEmpty({ message: 'fullName is required' })
    fullName!: string;

    @IsEmail({}, { message: 'Invalid email format' })
    @IsOptional() 
    email?: string;

    @IsString()
    @IsOptional()
    @Length(10, 15, { message: 'phoneNumber must be between 10 and 15 characters' })
    phoneNumber?: string;
}

import { IsEmail, IsOptional, IsString, Length } from 'class-validator';

export class UpdateUserDTO {
    @IsString()
    @IsOptional()
    userName?: string;

    @IsString()
    @IsOptional()
    fullName?: string;

    @IsEmail({}, { message: 'Invalid email format' })
    @IsOptional()
    email?: string;

    @IsString()
    @IsOptional()
    @Length(10, 15, { message: 'phoneNumber must be between 10 and 15 characters' })
    phoneNumber?: string;
}

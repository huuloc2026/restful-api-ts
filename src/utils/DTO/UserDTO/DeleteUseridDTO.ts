import { IsInt, IsNotEmpty } from 'class-validator';

export class DeleteUserDTO {
    @IsInt()
    @IsNotEmpty()
    id!: number;
}

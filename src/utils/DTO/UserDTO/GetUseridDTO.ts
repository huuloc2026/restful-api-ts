import { IsInt, IsNotEmpty } from 'class-validator';

export class GetUserbyIdDTO {
    @IsInt()
    @IsNotEmpty()
    id!: number;
}

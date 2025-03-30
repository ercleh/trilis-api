import { IsNotEmpty, MaxLength } from "class-validator";

export class SeatsNumberCreateDto {
    @IsNotEmpty()
    value: number;
}


import { IsNotEmpty, MaxLength } from "class-validator";

export class DoorsNumberCreateDto {
    @IsNotEmpty()
    value: number;
}


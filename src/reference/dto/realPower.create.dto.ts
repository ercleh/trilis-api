import { IsNotEmpty, MaxLength } from "class-validator";

export class RealPowerCreateDto {
    @IsNotEmpty()
    value: number;
}


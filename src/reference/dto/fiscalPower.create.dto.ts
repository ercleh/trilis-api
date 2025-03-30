import { IsNotEmpty, MaxLength } from "class-validator";

export class FiscalPowerCreateDto {
    @IsNotEmpty()
    value: number;
}


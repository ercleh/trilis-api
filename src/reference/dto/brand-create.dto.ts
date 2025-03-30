import { IsNotEmpty, MaxLength } from "class-validator";

export class BrandCreateDto {
    @IsNotEmpty()
    @MaxLength(100)
    name: string;
    imagePath?: string;
    common: boolean;
}


/* eslint-disable prettier/prettier */
import { IsNotEmpty, MaxLength } from "class-validator";

export class PackageTypeCreateDto {
    @IsNotEmpty()  id: number;
    @IsNotEmpty() @MaxLength(50) name: string
    imagePath: string;
 }

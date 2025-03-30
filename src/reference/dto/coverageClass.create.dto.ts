import { IsNotEmpty, MaxLength } from "class-validator";

export class CoverageClassCreateDto {
    @IsNotEmpty()
    @MaxLength(100)
    name: string;
  
    imagePath?:string;
 }

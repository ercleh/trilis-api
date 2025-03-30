/* eslint-disable prettier/prettier */
import { IsNotEmpty, MaxLength } from "class-validator";

export class DriverExperienceCreateDto {
    @IsNotEmpty()
    numberOrder: number;
  
    @IsNotEmpty()
    @MaxLength(100)
    name: string;
  
    @IsNotEmpty()
    @MaxLength(20)
    shortName: string;
}

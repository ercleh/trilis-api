import { IsNotEmpty, MaxLength } from "class-validator";

export class CarBodyCreateDto {
   @IsNotEmpty() @MaxLength(100) name:string;
  }

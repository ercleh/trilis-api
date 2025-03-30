import { IsNotEmpty, MaxLength } from "class-validator";
export class CarModelCreateDto {
   @IsNotEmpty() @MaxLength(100) name:string;
   @MaxLength(20) from:string;
   @MaxLength(20) to:string;

 }

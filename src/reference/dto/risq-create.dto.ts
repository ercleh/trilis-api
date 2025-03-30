/* eslint-disable prettier/prettier */
import { IsNotEmpty, MaxLength } from "class-validator";

export class RisqCreateDto {
    @IsNotEmpty() @MaxLength(50) name: string;
    @IsNotEmpty() @MaxLength(20) shortName: string;
    @MaxLength(100)imagePath:string;
    @MaxLength(50)icon:string ;
    @MaxLength(50)color:string ;


 }

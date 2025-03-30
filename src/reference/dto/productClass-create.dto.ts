/* eslint-disable prettier/prettier */
import { IsNotEmpty, MaxLength } from "class-validator";
import { Company } from "../entity/company.entity";

export class ProductClassCreateDto {

  @IsNotEmpty() companyId:number;
  @IsNotEmpty() @MaxLength(50) name: string
  imagePath: string
  description:string
  color:string;
 }

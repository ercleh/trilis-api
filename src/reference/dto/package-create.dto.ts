/* eslint-disable prettier/prettier */
import { IsNotEmpty, MaxLength } from "class-validator";

export class PackageCreateDto {

  @IsNotEmpty() packageTypeId:number;
  @IsNotEmpty() productId:number;

  @MaxLength(50) name?: string
  summary: string
  description: string
  imagePath: string
  @IsNotEmpty()startDate :Date;
  endDate?:Date;
 }

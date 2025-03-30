/* eslint-disable prettier/prettier */
import { IsNotEmpty, MaxLength } from "class-validator";

export class CoverageCreateDto {

  @IsNotEmpty()companyId: number;

  coverageClassId?:number;
  @IsNotEmpty()risqId: number;

  @IsNotEmpty()@MaxLength(100) name: string

  @IsNotEmpty()@MaxLength(50) shortName: string;

  @IsNotEmpty()@MaxLength(200)description: string;

  imagePath?: string;
  @IsNotEmpty()startDate :Date;
  endDate?:Date;
}

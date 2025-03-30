/* eslint-disable prettier/prettier */
import { IsNotEmpty, MaxLength } from "class-validator";

export class CoveragePackageCreateDto {

  coverageId: number;
  packageId: number;
  @MaxLength(1)status: string;
  @IsNotEmpty()startDate :Date;
  endDate?:Date;

}

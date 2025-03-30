/* eslint-disable prettier/prettier */

import { IsNotEmpty } from "class-validator";

export class CeilingCreateDto {
  coverageId?: number;
  packageId?: number;
  @IsNotEmpty()startDate: Date; 
  @IsNotEmpty()endDate?: Date;
}

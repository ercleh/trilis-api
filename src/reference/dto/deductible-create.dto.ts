/* eslint-disable prettier/prettier */

import { IsNotEmpty } from "class-validator";

export class DeductibleCreateDto {
    coverageId?: number;
    packageId?: number;
    startDate: Date; 
    endDate?: Date;
  }
  
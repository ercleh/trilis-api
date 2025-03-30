/* eslint-disable prettier/prettier */

import { IsNotEmpty } from "class-validator";

export class DeductibleCreateDto {
    deductibleId?: number;
    @IsNotEmpty()currencyId:number;
    startDate: Date; 
    endDate?: Date;
    @IsNotEmpty()amount:number;
    @IsNotEmpty()active:boolean;
  }
  
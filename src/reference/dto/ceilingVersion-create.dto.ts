/* eslint-disable prettier/prettier */

import { IsNotEmpty } from "class-validator";

export class CeilingVersionCreateDto {
  ceilingId?: number;
  @IsNotEmpty()currencyId :number; 
  @IsNotEmpty()startDate: Date; 
  @IsNotEmpty()endDate?: Date;
  @IsNotEmpty()amount:number;
  @IsNotEmpty()active:boolean;
}

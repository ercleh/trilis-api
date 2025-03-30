import { IsNotEmpty, MaxLength } from "class-validator";

export class CarMotorizationCreateDto {
   @IsNotEmpty() carModelId: number;
   carBodyId: number;
   energyId:number;
   transmissionId:number 
   @IsNotEmpty() @MaxLength(100) name:string;
   from:string;
   to:string;
   doorsNumber:number;
   seatsNumber:number;
   realPower:number;
   fiscalPower:number;
   mine:string;
  }

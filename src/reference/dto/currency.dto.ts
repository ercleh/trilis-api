/* eslint-disable prettier/prettier */
import { IsNotEmpty, MaxLength } from "class-validator";

export class CurrencyDto {
  id:number
  name: string;
  shortName: string;
  symbol:string;
  imagePath?: string;
}

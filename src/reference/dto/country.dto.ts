/* eslint-disable prettier/prettier */
import { IsNotEmpty, MaxLength } from "class-validator";

export class CountryDto {
  id:number
  country: string;
  nationality: string;
  symbol:string;
  imagePath?: string;
}

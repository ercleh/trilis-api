/* eslint-disable prettier/prettier */
import { IsNotEmpty, MaxLength } from "class-validator";

export class InsuranceStatusDto {
  id:number;
  numberOrder:number;
  name: string;
  shortName: string;
}

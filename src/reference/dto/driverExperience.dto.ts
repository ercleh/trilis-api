/* eslint-disable prettier/prettier */
import { IsNotEmpty, MaxLength } from "class-validator";

export class DriverExperienceDto {
  id:number;
  numberOrder:number;
  name: string;
  shortName: string;
}

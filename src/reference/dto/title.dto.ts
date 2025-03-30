/* eslint-disable prettier/prettier */
import { IsNotEmpty, MaxLength } from "class-validator";

export class TitleDto {
  id:number
  name: string;
  shortName: string;
  type: string;
}

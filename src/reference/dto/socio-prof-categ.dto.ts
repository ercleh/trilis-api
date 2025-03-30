/* eslint-disable prettier/prettier */
import { IsNotEmpty, MaxLength } from "class-validator";

export class SocioProfCategDto {
  id:number
  name: string;
  code: string;
}

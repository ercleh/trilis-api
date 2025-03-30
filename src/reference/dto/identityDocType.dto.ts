/* eslint-disable prettier/prettier */
import { IsNotEmpty, MaxLength } from "class-validator";

export class IdentityDocTypeDto {
  id: number;
  numberOrder: number;
  code: string;
  name: string; 
}

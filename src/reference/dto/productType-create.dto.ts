/* eslint-disable prettier/prettier */
import { MaxLength } from "class-validator";

export class ProductTypeCreateDto {

  @MaxLength(50)
  name?: string
 }

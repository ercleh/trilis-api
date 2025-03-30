/* eslint-disable prettier/prettier */
import { IsNotEmpty, MaxLength } from "class-validator";

export class CSPDto {
  @IsNotEmpty()
    id: number;

  @IsNotEmpty()
  @MaxLength(6)
  code: string;

  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  createdAt?: Date;
  updatedAt?: Date;
}

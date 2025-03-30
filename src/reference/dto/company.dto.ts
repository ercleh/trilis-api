/* eslint-disable prettier/prettier */
import { IsNotEmpty, MaxLength } from "class-validator";

export class CompanyDto {
  @IsNotEmpty()
    id: number;

  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsNotEmpty()
  @MaxLength(50)
  shortName: string;

  imagePath?: string;
  iconPath?: string;
  color?: string;

  createdAt?: Date;
  updatedAt?: Date;
}

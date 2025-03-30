/* eslint-disable prettier/prettier */
import { IsNotEmpty, MaxLength } from "class-validator";

export class ProductCreateDto {

//------------------
//clé
//------------------
  @IsNotEmpty()productTypeId: number;
  @IsNotEmpty()productClassId: number;
  @MaxLength(100) name: string;
  imagePath: string;
  iconPath:string;
  common:boolean;
  description:string;
}

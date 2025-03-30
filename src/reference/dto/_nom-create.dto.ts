/* eslint-disable prettier/prettier */
import { IsNotEmpty, MaxLength } from "class-validator";

export class NomCreateDto {

//------------------
//clé
//------------------
  @IsNotEmpty()id: number;
//------------------
//clé étrangère
//------------------
// @IsNotEmpty()
// companyId: number;

//---------------------
// champs obligatoire
//---------------------
@IsNotEmpty({message:"ce champs est obligatoie"})
champs_obligatoire: string;
//------------------
//longueur
//------------------
  @MaxLength(100)
  name?: string

  @MaxLength(50)
  shortName?: string;

  @MaxLength(200)
  description?: string;

}

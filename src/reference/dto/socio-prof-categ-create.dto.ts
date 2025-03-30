import { IsNotEmpty, MaxLength } from "class-validator";

export class SocioProfCategCreateDto {

  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsNotEmpty()
  @MaxLength(6)
  code: string;
}

import { IsNotEmpty, MaxLength } from "class-validator";

export class MaritalStatusCreateDto {

  @IsNotEmpty()
  numberOrder: number;

  @IsNotEmpty()
  @MaxLength(50)
  name: string;

  @IsNotEmpty()
  @MaxLength(2)
  shortName: string;
}

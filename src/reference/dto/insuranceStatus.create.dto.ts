import { IsNotEmpty, MaxLength } from "class-validator";

export class InsuranceStatusCreateDto {

  @IsNotEmpty()
  numberOrder: number;

  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsNotEmpty()
  @MaxLength(20)
  shortName: string;
}

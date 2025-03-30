import { IsNotEmpty, MaxLength } from "class-validator";

export class CSPCreateDto {

  @IsNotEmpty()
  @MaxLength(6)
  code: string;

  @IsNotEmpty()
  @MaxLength(100)
  name: string;
}

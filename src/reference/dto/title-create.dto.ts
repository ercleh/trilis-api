import { IsNotEmpty, MaxLength } from "class-validator";

export class TitleCreateDto {

  @IsNotEmpty()
  @MaxLength(50)
  name: string;

  @IsNotEmpty()
  @MaxLength(6)
  shortName: string;

  @IsNotEmpty()
  @MaxLength(1)
  type: string;
}

import { IsNotEmpty, MaxLength } from "class-validator";

export class OccupationCreateDto {

  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsNotEmpty()
  @MaxLength(6)
  code: string;
}

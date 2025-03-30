import { IsNotEmpty, MaxLength } from "class-validator";

export class DriverCategoryCreateDto {

  @IsNotEmpty()
  numberOrder: number;

  @IsNotEmpty()
  @MaxLength(50)
  name: string;

  @IsNotEmpty()
  @MaxLength(6)
  shortName: string;
}

 import { IsNotEmpty, MaxLength } from "class-validator";

export class EnergyCreateDto {

  @IsNotEmpty()
  @MaxLength(50)
  name: string;
}

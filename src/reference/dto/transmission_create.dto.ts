import { IsNotEmpty, MaxLength } from "class-validator";

export class TransmissionCreateDto {

  @IsNotEmpty()
  @MaxLength(50)
  name: string;
}

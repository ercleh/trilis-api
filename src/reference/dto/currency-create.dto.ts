import { IsNotEmpty, MaxLength } from "class-validator";

export class CurrencyCreateDto {

  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsNotEmpty()
  @MaxLength(50)
  shortName: string;

  symbol:string;

  imagePath?: string;
}

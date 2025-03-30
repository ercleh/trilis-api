import { IsNotEmpty, MaxLength } from "class-validator";

export class CountryCreateDto {

  @IsNotEmpty()
  @MaxLength(100)
  country: string;

  @IsNotEmpty()
  @MaxLength(100)
  nationality: string;

  @MaxLength(6)
  symbol:string;

  @MaxLength(256)
  imagePath?: string;
}

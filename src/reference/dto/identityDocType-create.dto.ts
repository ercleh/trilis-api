import { IsNotEmpty, MaxLength } from "class-validator";

export class IdentityDocTypeCreateDto {

  @IsNotEmpty()
  numberOrder: number;
  
  @IsNotEmpty()
  @MaxLength(6)
  code: string;

  @IsNotEmpty()
  @MaxLength(100)
  name: string;
}

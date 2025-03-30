import { IsNotEmpty, isNotEmpty, IsOptional } from "class-validator";

export class ParamKeyValueCreateDto {
  @IsNotEmpty()name: string;
  @IsNotEmpty()value: string;
  @IsOptional() description: string;
  @IsNotEmpty()type: string;
}

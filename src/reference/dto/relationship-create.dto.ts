 import { IsNotEmpty, MaxLength } from "class-validator";

export class RelationshipCreateDto {

  numberOrder=0;

  @IsNotEmpty()
  @MaxLength(50)
  name: string;
}

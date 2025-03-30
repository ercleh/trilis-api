/* lien de parenté */
import { IsNotEmpty, MaxLength } from "class-validator";

export class RelationshipDto {

  id:number;
  numberOrder:number;
  @IsNotEmpty()
  @MaxLength(50)
  name: string;

}

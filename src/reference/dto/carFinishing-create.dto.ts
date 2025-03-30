import { IsNotEmpty, MaxLength } from "class-validator";

export class CarFinishingCreateDto {
   @IsNotEmpty() carMotorizationId: number;
   @IsNotEmpty() @MaxLength(100) name:string;
   from:string;
   to:string;
  }

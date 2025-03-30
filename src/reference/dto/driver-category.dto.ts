import { IsNotEmpty, MaxLength } from "class-validator";

export class DriverCategoryDto {
  id:number;
  numberOrder:number;
  name: string;
  shortName: string;
}

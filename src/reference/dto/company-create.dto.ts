/* eslint-disable prettier/prettier */
import { IsNotEmpty, MaxLength } from "class-validator";
import { InsuranceStatus } from "../entity/insuranceStatus.entity";
import { DriverExperience } from "../entity/driverExperience.entity";

export class CompanyCreateDto {

  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsNotEmpty()
  @MaxLength(50)
  shortName: string;

  imagePath?: string;
  iconPath?: string;
  color?: string;
  insuranceStatuss?: InsuranceStatus[];
  driverExperiences?: DriverExperience[];  
}

import { IsNotEmpty, MaxLength } from "class-validator";

export class DriverExperienceCompanyCreateDto {

  @IsNotEmpty()
 driverExperienceId: number;

 @IsNotEmpty()
 companyId: number;
}

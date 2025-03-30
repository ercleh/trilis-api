import { IsNotEmpty, MaxLength } from "class-validator";

export class InsuranceStatusCompanyCreateDto {

  @IsNotEmpty()
 insuranceStatusId: number;

 @IsNotEmpty()
 companyId: number;
}

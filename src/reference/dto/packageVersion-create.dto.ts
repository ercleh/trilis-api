/* eslint-disable prettier/prettier */
import { IsNotEmpty} from "class-validator";

export class PackageVersionCreateDto {

    @IsNotEmpty() packageId:number;
    @IsNotEmpty() currencyId:number;
    @IsNotEmpty() startDate: Date;
    @IsNotEmpty() endDate: Date;
    preTaxValueYear: number;
    preTaxValueMonth: number
   }

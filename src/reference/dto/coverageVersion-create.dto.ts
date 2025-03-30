/* eslint-disable prettier/prettier */
import { IsNotEmpty} from "class-validator";

export class CoverageVersionCreateDto {

    @IsNotEmpty() coverageId:number;
    @IsNotEmpty() currencyId:number;
    @IsNotEmpty() startDate: Date;
    @IsNotEmpty() endDate: Date;
    preTaxValueYear: number;
    preTaxValueMonth: number;
    active:boolean;
   }

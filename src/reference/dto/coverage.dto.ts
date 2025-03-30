
export class CoverageDto {
  id:number
  companyId: number;
  coverageClassId:number;
  risqId:number;
  name: string;
  shortName:string;
  description:string;
  imagePath: string;
  startDate :Date;
  endDate?:Date;
}
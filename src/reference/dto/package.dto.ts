import { Expose } from "class-transformer";

export class PackageDto {
    id:number;
    packageTypeId:number;
    productId:number;
    name: string;
    summary:string;
    description:string;
    imagePath:string;
    startDate :Date;
    endDate:Date;
   
    // @Expose()
    // get active(): boolean {
    //   const today = new Date();
    //   return this.startDate <= today && (this.endDate == null || this.endDate >= today);  
    // }
  
 }


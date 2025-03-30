/* eslint-disable prettier/prettier */
/* eslint-disable no-var */
/* eslint-disable prettier/prettier */
import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    UsePipes,
    ValidationPipe,
  } from '@nestjs/common';
import { getConnection } from 'typeorm';
import { PackageVersionCreateDto } from '../dto/packageVersion-create.dto';
import { PackageVersionDto } from '../dto/packageVersion.dto';
import { PackageVersion } from '../entity/packageVersion.entity';
import { PackageVersionService } from '../service/packageVersion.service';
     
  @Controller('package-detail')
  export class packageVersionController {
    constructor(private readonly packageVersionService: PackageVersionService) {}
  
    @Get()
    async read(): Promise<PackageVersionDto[]> {
      return this.packageVersionService.findAll();
    }
    @Get(':packageId')
    async findByPackage(@Param('packageId') packageId){
    return this.packageVersionService.findByPackage(packageId);
    }

    @Post('create')
    @UsePipes(new ValidationPipe())
    async create(@Body() item: PackageVersionCreateDto): Promise<PackageVersionDto> {
      return this.packageVersionService.create(item);
    }
    static seed_package_detail(packageVersionService:PackageVersionService){
    var item: PackageVersionCreateDto;

    item =   {   
        packageId:9,
        currencyId:1,
        startDate:new Date(2022,1,1),
        endDate:new Date(2100,12,31),
        preTaxValueYear:256000,
        preTaxValueMonth:32000
    };
    packageVersionService.create(item);
    item =   {   
        packageId:10,
        currencyId:1,
        startDate:new Date(2022,1,1),
        endDate:new Date(2100,12,31),
        preTaxValueYear:521000,
        preTaxValueMonth:49000,
    };
    packageVersionService.create(item);

    item =   {   
        packageId:11,
        currencyId:1,
        startDate:new Date(2022,1,1),
        endDate:new Date(2100,12,31),
        preTaxValueYear:1350000,
        preTaxValueMonth:121000,
    };
    packageVersionService.create(item);
    item =   {   
        packageId:1,
        currencyId:2,
        startDate:new Date(2022,1,1),
        endDate:new Date(2100,12,31),
        preTaxValueYear:308,
        preTaxValueMonth:40,
    };
    packageVersionService.create(item);
    item =   {   
        packageId:12,
        currencyId:2,
        startDate:new Date(2022,1,1),
        endDate:new Date(2100,12,31),
        preTaxValueYear:425,
        preTaxValueMonth:62,
    };
    packageVersionService.create(item);
    item =   {   
        packageId:3,
        currencyId:2,
        startDate:new Date(2022,1,1),
        endDate:new Date(2100,12,31),
        preTaxValueYear:790,
        preTaxValueMonth:85,
    };
    packageVersionService.create(item);
    item =   {   
        packageId:4,
        currencyId:2,
        startDate:new Date(2022,1,1),
        endDate:new Date(2100,12,31),
        preTaxValueYear:1200,
        preTaxValueMonth:100,
    };
    packageVersionService.create(item);
  }
  static async delete_package_detail(){
   await getConnection()
   .createQueryBuilder()
   .delete()
   .from(PackageVersion)
   .execute();
  }
}
  
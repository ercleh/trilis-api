/* eslint-disable prettier/prettier */
/* eslint-disable no-var */
/* eslint-disable prettier/prettier */
import {
    Body,
    Controller,
    Get,
    Post,
    UsePipes,
    ValidationPipe,
  } from '@nestjs/common';
import { getConnection } from 'typeorm';
import { PackageTypeCreateDto } from '../dto/packageType-create.dto';
import { PackageTypeDto } from '../dto/packageType.dto';
import { PackageType } from '../entity/packageType.entity';
import { PackageTypeService } from '../service/packageType.service';
    
  @Controller('package-type')
  export class PackageTypeController {
    constructor(private readonly packageTypeService: PackageTypeService) {}
  
    @Get()
    async read(): Promise<PackageType[]> {
      return this.packageTypeService.findAll();
    }
    @Post('create')
    @UsePipes(new ValidationPipe())
    async create(@Body() item: PackageTypeCreateDto): Promise<PackageTypeDto> {
      return this.packageTypeService.create(item);
    }
  
    static seed_packageType(packageTypeService:PackageTypeService){
      var item: PackageTypeCreateDto;
      item = {
        id:1,
        name: "Tiers",
        imagePath:""
      }
      packageTypeService.create(item);
      item = {
        id:2,
        name: "Tous risques",
        imagePath:""
      }
      packageTypeService.create(item);
     } 

      static async delete_package_type(){
      await getConnection()
      .createQueryBuilder()
      .delete()
      .from(PackageType)
      .execute();
     }
  }
  
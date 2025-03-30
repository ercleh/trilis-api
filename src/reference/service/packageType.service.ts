/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository} from 'typeorm';
import { PackageTypeCreateDto } from '../dto/packageType-create.dto';
import { PackageTypeDto } from '../dto/packageType.dto';
import { PackageType } from '../entity/packageType.entity';
  
@Injectable()
export class PackageTypeService {
 
  constructor(
    @InjectRepository(PackageType)
    private repo:Repository<PackageType>,
  ) {}

 
  findAll(): Promise<PackageType[]> {
    return this.repo.find();
  }
  findByName(param: string): Promise<PackageType> {
    const packageType =  this.repo.findOne({ where: { name: param } })
    return packageType;
  }

  create(item: PackageTypeCreateDto): Promise<PackageTypeDto> {
    return this.repo.save(item);
  }
  clearPackageTypes(){
    getConnection()
  .createQueryBuilder()
  .delete()
  .from(PackageType)
  .execute()
}

seed(){
  this.clearPackageTypes();
  let item: PackageTypeCreateDto;
  item = {
    id:1,
    name: "Tiers",
    imagePath:""
  }
  this.create(item);
  item = {
    id:2,
    name: "Tous risques",
    imagePath:""
  }
  this.create(item);
}

 }


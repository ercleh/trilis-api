import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection} from 'typeorm';
import { DriverCategory } from '../entity/driver-category.entity';
import { DriverCategoryDto } from '../dto/driver-category.dto';
import { DriverCategoryCreateDto } from '../dto/driver-category-create.dto';
  
@Injectable()
export class DriverCategoryService {
 
  constructor(
    @InjectRepository(DriverCategory)
    private repo:Repository<DriverCategoryDto>,
  ) {}

 
  findAll(): Promise<DriverCategoryDto[]> {
    return this.repo.find();
  }
  findByShortName(param: string): Promise<DriverCategoryDto> {
    const result =  this.repo.findOne({ where: { shortName: param } })
    return result;
  }

  create(item: DriverCategoryCreateDto): Promise<DriverCategoryDto> {
    return this.repo.save(item);
  }
  
  clear(){
    getConnection()
  .createQueryBuilder()
  .delete()
  .from(DriverCategory)
  .execute()
}

 }


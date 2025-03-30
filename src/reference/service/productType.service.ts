/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository} from 'typeorm';
import { ProductTypeCreateDto } from '../dto/productType-create.dto';
import { ProductType } from '../entity/productType.entity';
  
@Injectable()
export class ProductTypeService {
 
  constructor(
    @InjectRepository(ProductType)
    private repo:Repository<ProductType>,
  ) {}

 
  findAll(): Promise<ProductType[]> {
    return this.repo.find();
  }

  create(item: ProductTypeCreateDto): Promise<ProductType> {
    return this.repo.save(item);
  }
  clearProductTypes(){
    getConnection()
  .createQueryBuilder()
  .delete()
  .from(ProductType)
  .execute()
}

seed(){
  this.clearProductTypes();
  let item: ProductTypeCreateDto;
  item = {
    name: "Particuliers",
  }
  this.create(item);
  item = {
    name: "Professionnels",
  }
  this.create(item);
}

 }


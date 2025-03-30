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
import { ProductTypeCreateDto } from '../dto/productType-create.dto';
import { ProductType } from '../entity/productType.entity';
import { ProductTypeService } from '../service/productType.service';
    
  @Controller('product-type')
  export class ProductTypeController {
    constructor(private readonly productTypeService: ProductTypeService) {}
  
    @Get()
    async read(): Promise<ProductType[]> {
      return this.productTypeService.findAll();
    }
    @Post('create')
    @UsePipes(new ValidationPipe())
    async create(@Body() item: ProductTypeCreateDto): Promise<ProductType> {
      return this.productTypeService.create(item);
    }
  
    static seed_productType(productTypeService : ProductTypeService){
      var item: ProductTypeCreateDto;
      item = {
        name: "Particuliers",
      }
      productTypeService.create(item);
      item = {
        name: "Professionnels",
      }
      productTypeService.create(item);
     }

     static async delete_product_type(){
      await getConnection()
      .createQueryBuilder()
      .delete()
      .from(ProductType)
      .execute();
     }
  }
  
/* eslint-disable prettier/prettier */
/* eslint-disable no-var */
/* eslint-disable prettier/prettier */
import {
    Body,
    Controller,
    Get,
    Logger,
    Param,
    Post,
    UsePipes,
    
    ValidationPipe,
  } from '@nestjs/common';
import { getConnection } from 'typeorm';
import { ProductCreateDto } from '../dto/product-create.dto';
import { ProductDto } from '../dto/product.dto';
import { Product } from '../entity/product.entity';
import { ProductService } from '../service/product.service';
   
  @Controller('product')
  export class ProductController {
    constructor(private readonly productService: ProductService) {}
  
    @Get()
    async read(): Promise<ProductDto[]> {
      return this.productService.findAll();
    }
    @Get(':productClassId')
    async findByProductClass(@Param('productClassId') productClassId){
    return this.productService.findByProductClass(productClassId);
  }

    @Get('company/:companyId/risq/:risqId')
    async getProductsByCompanyAndRisq(
      @Param('companyId') companyId: number,
      @Param('risqId') risqId: number
    ): Promise<ProductDto[]> {
      return this.productService.findByCompanyAndRisq(Number(companyId), Number(risqId));
    }

    @Post('create')
    @UsePipes(new ValidationPipe())
    async create(@Body() item: ProductCreateDto): Promise<ProductDto> {
      return this.productService.create(item);
    }
  
    static seed(productService : ProductService, logger:Logger){
      try{
        productService.seed();
      }
      catch (error){
        logger.error(error?.message ?? "");
        throw error;
      }
     }

     static clearProducts(_productService:ProductService, _logger:Logger)
     {
      try
      {   
       _productService.clearProducts();
      }
       catch (error) {
        _logger.error(error?.message ?? "");
        throw error;
      }   
    }  
}
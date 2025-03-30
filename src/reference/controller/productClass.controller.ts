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
import { getConnection} from 'typeorm';
import { ProductClassCreateDto } from '../dto/productClass-create.dto';
import { ProductClassDto } from '../dto/productClass.dto';
import { ProductClass } from '../entity/productClass.entity';
import { CompanyService } from '../service/company.service';
import { ProductClassService } from '../service/productClass.service';
    
  @Controller('product-class')
  export class ProductClassController {
    constructor(private readonly productClassService: ProductClassService
               ,private readonly companyService:CompanyService) {}

  logger: Logger = new Logger(ProductClassController.name);

    @Get()
    async read(): Promise<ProductClassDto[]> {
      return this.productClassService.findAll();
    }

    @Get(':companyId')
    async findByCompany(@Param('companyId') companyId){
    return this.productClassService.findByCompany(companyId)
  }

    @Get(':companyId/:risqId')
    async findByCompanyAndRisq(
      @Param('companyId') companyId, 
      @Param('risqId') risqId
    ) {
      return this.productClassService.findByCompanyAndRisq(companyId, risqId);
    }

    @Get('risq/:risqId')
    async findByRisq(
      @Param('risqId') risqId
    ) {
      return this.productClassService.findByRisq(risqId);  
    }

    @Post('create')
    @UsePipes(new ValidationPipe())
    async create(@Body() item: ProductClassCreateDto): Promise<ProductClassDto> {
      return this.productClassService.create(item);
    }
  
    static seed(productClassService : ProductClassService, logger:Logger){
      try{
        productClassService.seed();
      }
      catch (error){
        logger.error(error?.message ?? "");
        throw error;
      }
     }

  static clearProductClasses(_productClassService:ProductClassService, _logger:Logger)
  {
   try
   {   
    _productClassService.clearProductClasses();
   }
    catch (error) {
     _logger.error(error?.message ?? "");
     throw error;
   }   
 }  
}
  
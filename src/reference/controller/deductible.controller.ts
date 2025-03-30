/* eslint-disable prettier/prettier */
/* eslint-disable no-var */
/* eslint-disable prettier/prettier */
import {
    Body,
    Controller,
    Get,
    Logger,
    Post,
    UsePipes,
    ValidationPipe,
  } from '@nestjs/common';
import { getConnection } from 'typeorm';
import { DeductibleCreateDto } from '../dto/deductible-create.dto';
import { Deductible } from '../entity/deductible.entity';
import { DeductibleService } from '../service/deductible.service';
  
  @Controller('deductible')
  export class DeductibleController {
    constructor(private readonly deductibleService: DeductibleService) {}
  
    @Get()
    async read(): Promise<Deductible[]> {
      return this.deductibleService.findAll();
    }
    @Post('create')
    @UsePipes(new ValidationPipe())
    async create(@Body() deductible: DeductibleCreateDto): Promise<Deductible> {
      return this.deductibleService.create(deductible);
    }

    static seed(deductibleService : DeductibleService, _logger:Logger){
      var deductible: DeductibleCreateDto;
    /////////////////
    //  
    /////////////////////////////////////////////////////////////
      // deductible = {
      //   coverageId:12,
      //   packageId:null,
      //   currencyId:2,
      //   startDate: new Date(2022,1,1),
      //   endDate: new Date(2100,12,31),
      //   amount :1750,
      // }
      // deductibleService.create(deductible);
      /////////////////
      //  
      /////////////////////////////////////////////////////////////
      // deductible = {
      //   coverageId:12,
      //   packageId:null,
      //   currencyId:2,
      //   startDate: new Date(2022,1,1),
      //   endDate: new Date(2100,12,31),
      //   amount :5000,
      // }
      // deductibleService.create(deductible);
     }

    static clearDeductibles(_deductibleService:DeductibleService, _logger:Logger)
    {
     try
     {   
      _deductibleService.clearDeductibles();
     }
      catch (error) {
       _logger.error(error?.message ?? "");
       throw error;
     }   
   }

}
  
import {
    Body,
    Controller,
    Get,
    Logger,
    Post,
    UsePipes,
    ValidationPipe,
  } from '@nestjs/common';
import { getConnection, QueryRunner } from 'typeorm';
import { DoorsNumberCreateDto } from '../dto/doorsNumber.create.dto';
import { DoorsNumberDto } from '../dto/doorsNumber.dto';
import { DoorsNumber } from '../entity/doorsNumber.entity';
import { DoorsNumberService } from '../service/doorsNumber.service';
  
  @Controller('doors-number')
  export class DoorsNumberController {
    constructor(private readonly doorsNumberService: DoorsNumberService) {}
  
    @Post('create')
    @UsePipes(new ValidationPipe())
    async create(@Body() item: DoorsNumberCreateDto): Promise<DoorsNumberDto> {
      return this.doorsNumberService.create(item);
    }
  
    @Get()
    async read(): Promise<DoorsNumberDto[]> {
      return this.doorsNumberService.findAll();
    }

     static async delete_doorsNumbers(){
      await getConnection()
      .createQueryBuilder()
      .delete()
      .from(DoorsNumber)
      .execute();
     }
     static async clearDoorsNumber(_doorsNumberService:DoorsNumberService, _logger:Logger)
     {
      try
      {   
         _doorsNumberService.clearDoorsNumbers();
      }
       catch (error) {
        _logger.error(error?.message ?? "");
        throw error;
      }   
    }  
    static seed(_doorsNumberService:DoorsNumberService,_logger:Logger) {
      try{
        _doorsNumberService.seed();
      }
      catch (error){
        _logger.error(error?.message ?? "");
        throw error;
      }
    }
  }
  
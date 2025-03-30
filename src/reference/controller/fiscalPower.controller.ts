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
import { FiscalPowerCreateDto } from '../dto/fiscalPower.create.dto';
import { FiscalPowerDto } from '../dto/fiscalPower.dto';
import { FiscalPower } from '../entity/fiscalPower.entity';
import { FiscalPowerService } from '../service/fiscalPower.service';
  
  @Controller('fiscal-power')
  export class FiscalPowerController {
    constructor(private readonly fiscalPowerService: FiscalPowerService) {}
  
    @Post('create')
    @UsePipes(new ValidationPipe())
    async create(@Body() item: FiscalPowerCreateDto): Promise<FiscalPowerDto> {
      return this.fiscalPowerService.create(item);
    }
  
    @Get()
    async read(): Promise<FiscalPowerDto[]> {
      return this.fiscalPowerService.findAll();
    }

     static async delete_fiscalPowers(){
      await getConnection()
      .createQueryBuilder()
      .delete()
      .from(FiscalPower)
      .execute();
     }
     static async clearFiscalPower(_fiscalPowerService:FiscalPowerService, _logger:Logger)
     {
      try
      {   
         _fiscalPowerService.clearFiscalPowers();
      }
       catch (error) {
        _logger.error(error?.message ?? "");
        throw error;
      }   
    }  
    static seed(_fiscalPowerService:FiscalPowerService,_logger:Logger) {
      try{
        _fiscalPowerService.seed();
      }
      catch (error){
        _logger.error(error?.message ?? "");
        throw error;
      }
    }
  }
  
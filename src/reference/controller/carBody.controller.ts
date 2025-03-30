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
import { CarBodyCreateDto } from '../dto/carBody-create.dto';
import { CarBodyDto } from '../dto/carBody.dto';
import { CarBody } from '../entity/carBody.entity';
import { CarBodyService } from '../service/carBody.service';
  
  @Controller('car-body')
  export class CarBodyController {
    constructor(private readonly carBodyService: CarBodyService) {}
  
    @Post('create')
    @UsePipes(new ValidationPipe())
    async create(@Body() carModel: CarBodyCreateDto): Promise<CarBodyDto> {
      return this.carBodyService.create(carModel);
    }
  
    @Get()
    async read(): Promise<CarBodyDto[]> {
      return this.carBodyService.findAll();
    }

     static async delete_carBody(){
      await getConnection()
      .createQueryBuilder()
      .delete()
      .from(CarBody)
      .execute();
     }
     static async clearCarBodies(_carBodyService:CarBodyService, _logger:Logger)
     {
      try
      {   
         _carBodyService.clearCarBodies();
      }
       catch (error) {
        _logger.error(error?.message ?? "");
        throw error;
      }   
    }  
    static seed(_carBodyService:CarBodyService,_logger:Logger) {
      try{
        _carBodyService.seed();
      }
      catch (error){
        _logger.error(error?.message ?? "");
        throw error;
      }
    }
  }
  
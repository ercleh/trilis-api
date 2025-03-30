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
import { CarFinishingService } from '../service/carFinishing.service';
import { CarFinishingCreateDto } from '../dto/carFinishing-create.dto';
import { CarFinishingDto } from '../dto/carFinishing.dto';
  
  @Controller('car-finishing')
  export class CarFinishingController {
    constructor(private readonly carFinishingService: CarFinishingService) {}
  
    @Post('create')
    @UsePipes(new ValidationPipe())
    async create(@Body() carFinishing: CarFinishingCreateDto): Promise<CarFinishingDto> {
      return this.carFinishingService.create(carFinishing);
    }
  
    @Get()
    async read(): Promise<CarFinishingDto[]> {
      return this.carFinishingService.findAll();
    }

    @Get(":carMotorizationId")
    async carFinishing(@Param("carMotorizationId") carMotorizationId: number) {
        return this.carFinishingService.findByCarMotorizationIdRepo(carMotorizationId)
    }

    static async clearCarFinishings(_carFinishingService:CarFinishingService, _logger:Logger)
    {
     try
     {   
        _carFinishingService.clearCarFinishings();
     }
      catch (error) {
       _logger.error(error?.message ?? "");
       throw error;
     }   
   }   
  }
  
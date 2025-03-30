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
import { Connection, getConnection, QueryRunner } from 'typeorm';
import { InsuranceStatusDto } from '../dto/insuranceStatus.dto';
import { InsuranceStatusService } from '../service/insuranceStatus.service';
import { InsuranceStatusCreateDto } from '../dto/insuranceStatus.create.dto';
   
  @Controller('insurance-status')
  export class InsuranceStatusController {
    constructor(private readonly insuranceStatusService: InsuranceStatusService) {}
    logger: Logger = new Logger(InsuranceStatusController.name);
    
    @Get()
    async read(): Promise<InsuranceStatusDto[]> {
      return this.insuranceStatusService.findAll();
    }
    
    @Post('create')
    @UsePipes(new ValidationPipe())
    async create(@Body() item: InsuranceStatusCreateDto): Promise<InsuranceStatusDto> {
      return this.insuranceStatusService.create(item);
    }
   }

  
  
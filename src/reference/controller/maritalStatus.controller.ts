import {
    Body,
    Controller,
    Get,
    Logger,
    Post,
    UsePipes,
    ValidationPipe,
  } from '@nestjs/common';
import { Connection, getConnection, QueryRunner } from 'typeorm';
import { MaritalStatusService } from '../service/maritalStatus.service';
import { MaritalStatusDto } from '../dto/marital-status.dto';
import { MaritalStatusCreateDto } from '../dto/marital-status-create.dto';
  
  @Controller('marital-status')
  export class MaritalStatusController {
    constructor(private readonly maritalStatusService: MaritalStatusService) {}
  
    logger: Logger = new Logger(MaritalStatusController.name);

    @Get()
    async read(): Promise<MaritalStatusDto[]> {
      return this.maritalStatusService.findAll();
    }
    @Post('create')
    @UsePipes(new ValidationPipe())
    async create(@Body() item: MaritalStatusCreateDto): Promise<MaritalStatusDto> {
      return this.maritalStatusService.create(item);
    }
   }

  
  
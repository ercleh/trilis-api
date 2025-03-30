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
import { CeilingCreateDto } from '../dto/ceiling-create.dto';
import { CeilingDto } from '../dto/ceiling.dto';
   import { CeilingService } from '../service/ceiling.service';
  
  @Controller('ceiling')
  export class CeilingController {
    constructor(private readonly ceilingService: CeilingService) {}
  
    @Get()
    async read(): Promise<CeilingDto[]> {
      return this.ceilingService.findAll();
    }
    @Post('create')
    @UsePipes(new ValidationPipe())
    async create(@Body() ceiling: CeilingCreateDto): Promise<CeilingDto> {
      return this.ceilingService.create(ceiling);
    }
  
    static seed_ceiling(ceilingService : CeilingService, _logger:Logger){
      var ceiling: CeilingCreateDto;
    /////////////////
    // plafond 1 de 1750 euros de la garantie objets transportés
    /////////////////////////////////////////////////////////////
      ceiling = {
        coverageId:12,
        packageId:null,
        startDate: new Date(2022,1,1),
        endDate: new Date(2100,12,31),
      }
      ceilingService.create(ceiling);
      /////////////////
      // plafond 2 de 5000 euros de la garantie objets transportés
      /////////////////////////////////////////////////////////////
      ceiling = {
        coverageId:12,
        packageId:null,
        startDate: new Date(2022,1,1),
        endDate: new Date(2100,12,31),
      }
      ceilingService.create(ceiling);
     }

     static clearceilings(_ceilingService:CeilingService, _logger:Logger)
     {
      try
      {   
       _ceilingService.clearCeilings();
      }
       catch (error) {
        _logger.error(error?.message ?? "");
        throw error;
      }   
    }

  }
  
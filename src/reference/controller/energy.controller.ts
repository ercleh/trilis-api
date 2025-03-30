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
import { EnergyCreateDto } from '../dto/energy-create.dto';
import { EnergyDto } from '../dto/energy.dto';
import { Energy } from '../entity/energy.entity';
import { EnergyService } from '../service/energy.service';
  
  @Controller('energy')
  export class EnergyController {
    constructor(private readonly energyService: EnergyService) {}
  
    @Get()
    async read(): Promise<EnergyDto[]> {
      return this.energyService.findAll();
    }
    @Post('create')
    @UsePipes(new ValidationPipe())
    async create(@Body() energy: EnergyCreateDto): Promise<EnergyDto> {
      return this.energyService.create(energy);
    }
  
    static seedEnergies(_logger:Logger,energyService:EnergyService){
      try
     { 
      let energy: EnergyCreateDto;
      energy = {
        name: "Essence" 
      }
      energyService.create(energy);
      energy = {
        name: "Diesel"
       }
       energyService.create(energy);
       energy = {
        name: "Gaz"
       }
       energyService.create(energy);
       energy = {
        name: "Diesel,gaz"
       }
       energyService.create(energy);
       energy = {
        name: "Hybride"
       }
       energyService.create(energy);
       energy = {
        name: "Electrique"
       }
       energyService.create(energy);
      }
      catch (error) {
        _logger.error(error?.message ?? "");
        throw error;
      }    
     }
     static async delete_energy(){
      await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Energy)
      .execute();
     }
  }
  
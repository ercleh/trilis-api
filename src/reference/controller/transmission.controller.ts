import {
    Body,
    Controller,
    Get,
    Logger,
    Post,
    UsePipes,
    ValidationPipe,
  } from '@nestjs/common';
import { getConnection} from 'typeorm';
import { TransmissionDto } from '../dto/transmission.dto';
import { TransmissionCreateDto } from '../dto/transmission_create.dto';
import { Transmission } from '../entity/transmission.entity';
import { TransmissionService } from '../service/transmission.service';
   
  @Controller('transmission')
  export class TransmissionController {
    constructor(private readonly transmissionService: TransmissionService) {}
  
    @Get()
    async read(): Promise<TransmissionDto[]> {
      return this.transmissionService.findAll();
    }
    @Post('create')
    @UsePipes(new ValidationPipe())
    async create(@Body() energy: TransmissionCreateDto): Promise<TransmissionDto> {
      return this.transmissionService.create(energy);
    }
  
    static seedTransmissions(_logger:Logger,transmissionService:TransmissionService){
      try{
      let transmission: TransmissionCreateDto;
      transmission = {
        name: "Manuelle" 
      }
      transmissionService.create(transmission);
      transmission = {
        name: "Automatique" 
      }
      transmissionService.create(transmission);
      transmission = {
        name: "Electronique" 
      }
      transmissionService.create(transmission);
      transmission = {
        name: "Mécanique" 
      }
      transmissionService.create(transmission);
      transmission = {
        name: "Variateur" 
      }
      transmissionService.create(transmission);
    }
    catch (error) {
      _logger.error(error?.message ?? "");
      throw error;
    }   

    }
     static async delete_transmission(){
      await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Transmission)
      .execute();
     }
  }
  
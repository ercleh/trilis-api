/* eslint-disable prettier/prettier */
/* eslint-disable no-var */
/* eslint-disable prettier/prettier */
import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    UsePipes,
    ValidationPipe,
  } from '@nestjs/common';
import { RisqCreateDto } from '../dto/risq-create.dto';
import { RisqDto } from '../dto/risq.dto';
import { Risq } from '../entity/risq.entity';
import { RisqService } from '../service/risq.service';
    
  @Controller('risq')
  export class RisqController {
    constructor(private readonly risqService: RisqService) {}
  
    @Get()
    async read(): Promise<RisqDto[]> {
      return this.risqService.findAll();
    }
    @Get('short-name/:shortName')
    async readByShortName(@Param("shortName") shortName){
      return this.risqService.findByShortName(shortName)
    }
    @Get(':id')
    async readById(@Param("id") id){
      return this.risqService.findById(id)
    }
    @Post('create')
    @UsePipes(new ValidationPipe())
    async create(@Body() item: RisqCreateDto): Promise<RisqDto> {
      return this.risqService.create(item);
    }
  
    static seed_risq(risqService:RisqService){      
      var item: RisqCreateDto;
      item = {
        name: "",
        shortName:"",
        imagePath:"",
        icon:"",
        color:""
      }
      risqService.create(item);
      item = {
        name: "auto",
        shortName:"",
        imagePath:"",
        icon:"",
        color:""
      }
      risqService.create(item);
     }
  }
  
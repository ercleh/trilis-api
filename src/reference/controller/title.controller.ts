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
import { TitleService } from '../service/title.service';
import { TitleDto } from '../dto/title.dto';
import { TitleCreateDto } from '../dto/title-create.dto';
  
  @Controller('title')
  export class TitleController {
    constructor(private readonly titleService: TitleService) {}
  
    logger: Logger = new Logger(TitleController.name);

    @Get()
    async read(): Promise<TitleDto[]> {
      return this.titleService.findAll();
    }
    @Post('create')
    @UsePipes(new ValidationPipe())
    async create(@Body() item: TitleCreateDto): Promise<TitleDto> {
      return this.titleService.create(item);
    }
    
    static seed(service:TitleService,logger:Logger){
      try
        { 
          service.seed();
        }
        catch (error) {
          logger.error(error?.message ?? "");
          throw error;
        }    
       } 
   }

  
  
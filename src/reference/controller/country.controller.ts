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
import { CountryService } from '../service/country.service';
import { CountryDto } from '../dto/country.dto';
import { CountryCreateDto } from '../dto/country-create.dto';
  
  @Controller('country')
  export class CountryController {
    constructor(private readonly countryService: CountryService) {}
  
    logger: Logger = new Logger(CountryController.name);

    @Get()
    async read(): Promise<CountryDto[]> {
      return this.countryService.findAll();
    }
    @Post('create')
    @UsePipes(new ValidationPipe())
    async create(@Body() item: CountryCreateDto): Promise<CountryDto> {
      return this.countryService.create(item);
    }
    @Get('seed')
    async seed_countries(){
      try {
        const connection: Connection = getConnection();
        const queryRunner: QueryRunner = connection.createQueryRunner();
        await queryRunner.connect();  
        queryRunner.query(`ALTER TABLE \`country\`AUTO_INCREMENT = 1`); 
        CountryController.seed(this.countryService, this.logger);
        }
        catch (error) {
          this.logger.error(error?.message ?? "");
          throw error;
      }
     }

  @Get('clear')
  async clearCountries(){
    CountryController.clear(this.countryService,this.logger);
  } 

     static seed(countryService:CountryService,logger:Logger){
        try
          { 
            countryService.seed();
          }
          catch (error) {
            logger.error(error?.message ?? "");
            throw error;
          }    
         }
    
     static clear(countryService:CountryService, _logger:Logger)
     {
      try
      {   
       countryService.clear();
      }
       catch (error) {
        _logger.error(error?.message ?? "");
        throw error;
      }   
    }
  }

  
  
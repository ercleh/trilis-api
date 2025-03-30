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
import { getConnection, QueryRunner } from 'typeorm';
import { CarMotorizationCreateDto } from '../dto/carMotorization-create.dto';
import { CarMotorizationDto } from '../dto/carMotorization.dto';import { CarMotorization } from '../entity/carMotorization.entity';
import { CarMotorizationService } from '../service/carMotorization.service';
  
  @Controller('car-motorization')
  export class CarMotorizationController {
    constructor(private readonly carMotorizationService: CarMotorizationService) {}
  
    @Post('create')
    @UsePipes(new ValidationPipe())
    async create(@Body() carMotorization: CarMotorizationCreateDto): Promise<CarMotorizationDto> {
      return this.carMotorizationService.create(carMotorization);
    }
  
    @Get()
    async read(): Promise<CarMotorizationDto[]> {
      return this.carMotorizationService.findAll();
    }

    @Get(":carModelId")
    async carMotorization(@Param("carModelId") carModelId: number) {
        return this.carMotorizationService.findByCarModelIdRepo(carModelId)
    }

    // @Get('/carModelId')
    // async read(): Promise<CarMotorizationDto[]> {
    //   return this.carMotorizationService.findByCarModelId(carModelId)
    // }

    static async clearCarMotorizations(_carMotorizationService:CarMotorizationService, _logger:Logger)
    {
     try
     {   
        _carMotorizationService.clearCarMotorizations();
     }
      catch (error) {
       _logger.error(error?.message ?? "");
       throw error;
     }   
   }  

     static async seedCarMotorizations1(_carMotorizationService:CarMotorizationService,_logger:Logger) {
      await this.carMotorizationsSeeded1(_carMotorizationService,_logger)
        .then(completed => {
          _logger.debug('Motorisations de véhicules créés avec succès...');
          Promise.resolve(completed);
        })
        .catch(error => {
          _logger.error('Erreur survenue lors de la créations des motorisations de véhicules...');
          Promise.reject(error);
        });
    }
    
    static async carMotorizationsSeeded1(_carMotorizationService:CarMotorizationService,_logger:Logger) {
      return await Promise.all(_carMotorizationService.seed1())
        .then(createdCarMotorizations => {
          // Can also use this.logger.verbose('...');
          _logger.debug(
            'Nombre de motorisations créées : ' +
              // Remove all null values and return only created carModels.
              createdCarMotorizations.filter(
                nullValueOrCreatedLanguage => nullValueOrCreatedLanguage,
              ).length,
          );
          return Promise.resolve(true);
        })
        .catch(error => Promise.reject(error));
    }    
    static async seedCarMotorizations2(_carMotorizationService:CarMotorizationService,_logger:Logger) {
      await this.carMotorizationsSeeded2(_carMotorizationService,_logger)
        .then(completed => {
          _logger.debug('Motorisations de véhicules créés avec succès...');
          Promise.resolve(completed);
        })
        .catch(error => {
          _logger.error('Erreur survenue lors de la créations des motorisations de véhicules...');
          Promise.reject(error);
        });
    }

    static async carMotorizationsSeeded2(_carMotorizationService:CarMotorizationService,_logger:Logger) {
      return await Promise.all(_carMotorizationService.seed2())
        .then(createdCarMotorizations => {
          // Can also use this.logger.verbose('...');
          _logger.debug(
            'Nombre de motorisations créées : ' +
              // Remove all null values and return only created carModels.
              createdCarMotorizations.filter(
                nullValueOrCreatedLanguage => nullValueOrCreatedLanguage,
              ).length,
          );
          return Promise.resolve(true);
        })
        .catch(error => Promise.reject(error));
    }    

  }
  
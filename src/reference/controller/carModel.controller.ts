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
import { CarModelCreateDto } from '../dto/carModel-create.dto';
import { CarModelDto } from '../dto/carModel.dto';
import { CarModel } from '../entity/carModel.entity';
import { BrandService } from '../service/brand.service';
import { CarModelService } from '../service/carModel.service';

  @Controller('car-model')
  export class CarModelController {
    constructor(private readonly logger: Logger,
                private readonly carModelService: CarModelService,
                private readonly brandService:BrandService) {}
  
    @Post('create')
    @UsePipes(new ValidationPipe())
    async create(@Body() carModel: CarModelCreateDto): Promise<CarModelDto> {
      return this.carModelService.create(carModel);
    }
  
    @Get()
    async read(): Promise<CarModelDto[]> {
      return this.carModelService.findAll();
    }

    @Get(":brandId")
    async readByBrandId(@Param("brandId") brandId: number) {
        return this.carModelService.findByBrandId(brandId);
    }
    @Get(':brandId/:from')
    async readByBrandIdAndStartDate(
      @Param('brandId') brandId: number, 
      @Param('from') from: string,
    ) 
    {
      return this.carModelService.findByBrandAndStartDate(brandId,from);
    }

   static recherche_marque(brandService:BrandService, value:string)
    {
      const brand = brandService.findByName(value);
      return brand;
    }

    // static reinit_autoincrement(){
    //   getConnection()
    //   .createQueryRunner()
    //   .query(`ALTER TABLE \`car_model\`AUTO_INCREMENT = 1`)
    // }
    static async seedCarModels(_carModelService:CarModelService,_logger:Logger) {
      await this.carModelsSeeded(_logger,_carModelService)
        .then(completed => {
          _logger.debug('Modèles de véhicules créés avec succès...');
          Promise.resolve(completed);
        })
        .catch(error => {
          _logger.error('Erreur survenue lors de la créations des modèles de véhicules...');
          Promise.reject(error);
        });
    }
    
    static async carModelsSeeded(_logger:Logger, _carModelService:CarModelService) {
      return await Promise.all(_carModelService.seed())
        .then(createdCarModels => {
          // Can also use this.logger.verbose('...');
          _logger.debug(
            'Nombre de modèles créés : ' +
              // Remove all null values and return only created carModels.
              createdCarModels.filter(
                nullValueOrCreatedLanguage => nullValueOrCreatedLanguage,
              ).length,
          );
          return Promise.resolve(true);
        })
        .catch(error => Promise.reject(error));
    }    
  }
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
import { DriverCategoryService } from '../service/drivercategory.service';
import { DriverCategoryDto } from '../dto/driver-category.dto';
import { DriverCategoryCreateDto } from '../dto/driver-category-create.dto';
  @Controller('driver-category')
  export class DriverCategoryController {
    constructor(private readonly driverCategoryService: DriverCategoryService) {}
  
    logger: Logger = new Logger(DriverCategoryController.name);

    @Get()
    async read(): Promise<DriverCategoryDto[]> {
      return this.driverCategoryService.findAll();
    }
    @Post('create')
    @UsePipes(new ValidationPipe())
    async create(@Body() item: DriverCategoryCreateDto): Promise<DriverCategoryDto> {
      return this.driverCategoryService.create(item);
    }

    static seed(driverCategoryService:DriverCategoryService,logger:Logger){
        try
       { 
        let driverCategory: DriverCategoryCreateDto;
          driverCategory = {
          numberOrder:1,
          shortName:"B",
          name: "Permis AUTO" 
        }
        driverCategoryService.create(driverCategory);
        driverCategory = {
          numberOrder:2,
          shortName:"A",
          name: "Permis MOTO" 
         }
         driverCategoryService.create(driverCategory);
         driverCategory = {
          numberOrder:3,
          shortName:"AM",
          name: "Permis CYCLOMOTEURS" 
         }
         driverCategoryService.create(driverCategory);
         driverCategory = {
          numberOrder:4,
          shortName:"C et D",
          name: "Permis Professionnel C et D" 
         }
         driverCategoryService.create(driverCategory);
         driverCategory = {
          numberOrder:5,
          shortName:"E",
          name: "Permis REMORQUE" 
         }
         driverCategoryService.create(driverCategory);
        }
        catch (error) {
          logger.error(error?.message ?? "");
          throw error;
        }    
       }
  
       static clear(_driverCategoryService:DriverCategoryService, _logger:Logger)
       {
        try
        {   
         _driverCategoryService.clear();
        }
         catch (error) {
          _logger.error(error?.message ?? "");
          throw error;
        }   
      }
  
       @Get('seed')
        async seed_driverCategories(){
          try {
            const connection: Connection = getConnection();
            const queryRunner: QueryRunner = connection.createQueryRunner();
            await queryRunner.connect();  
            queryRunner.query(`ALTER TABLE \`driverCategory\`AUTO_INCREMENT = 1`); 
            DriverCategoryController.seed(this.driverCategoryService, this.logger);
            }
            catch (error) {
              this.logger.error(error?.message ?? "");
              throw error;
          }
         }
  
      @Get('clear')
      async cleardriverCategorys(){
        DriverCategoryController.clear(this.driverCategoryService,this.logger);
      }
  
      @Get('reinit-autoincrement')
      async reinit_autoincrement(){
  
        const connection: Connection = getConnection();
        const queryRunner: QueryRunner = connection.createQueryRunner();
        await queryRunner.connect(); // performs connection 
  
        try {
              queryRunner.query(`ALTER TABLE \`driverCategory\`AUTO_INCREMENT = 1`); 
        }
        catch (error) {
          this.logger.error(error?.message ?? "");
          throw error;
         }
         
        }
    }
  

  
  
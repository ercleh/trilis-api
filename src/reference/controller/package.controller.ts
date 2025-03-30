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
import { PackageCreateDto } from '../dto/package-create.dto';
import { PackageDto } from '../dto/package.dto';
import { PackageService } from '../service/package.service';
    
  @Controller('package')
  export class PackageController {
    constructor(private readonly packageService: PackageService) {}
  
    @Get()
    async read(): Promise<PackageDto[]> {
      return this.packageService.findAll();
    }

    @Get(':productId')
    async findByProduct(@Param('productId') productId){
    return this.packageService.findByProduct(productId);
    }
    
    @Post('create')
    @UsePipes(new ValidationPipe())
    async create(@Body() item: PackageCreateDto): Promise<PackageDto> {
      return this.packageService.create(item);
    }  
    static seed(packageService : PackageService, logger:Logger){
      try{
        packageService.seed();
      }
      catch (error){
        logger.error(error?.message ?? "");
        throw error;
      }
     }

     static clearPackages(_packageService:PackageService, _logger:Logger)
     {
      try
      {   
       _packageService.clearPackages();
      }
       catch (error) {
        _logger.error(error?.message ?? "");
        throw error;
      }   
    }
  }
  
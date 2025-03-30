/* eslint-disable prettier/prettier */
/* eslint-disable no-var */
/* eslint-disable prettier/prettier */
import {
    Body,
    Controller,
    Delete,
    Get,
    Logger,
    Param,
    Post,
    Put,
    UsePipes,
    ValidationPipe,
  } from '@nestjs/common';
import { getConnection } from 'typeorm';
import { CoverageCreateDto } from '../dto/coverage-create.dto';
import { CoverageDto } from '../dto/coverage.dto';
import { CoveragePackageDto } from '../dto/coveragePackage.dto';
import { Coverage } from '../entity/coverage.entity';
import { CoveragePackage } from '../entity/coveragePackage.entity';
import { CoverageService } from '../service/coverage.service';
import { CoveragePackageService } from '../service/coveragePackage.service';
  
  @Controller('coverage')
  export class CoverageController {
    constructor(
      private readonly coverageService: CoverageService
     ,private readonly coveragePackageService: CoveragePackageService) {}
  
    @Get()
    async read(): Promise<CoverageDto[]> {
      return this.coverageService.findAll();
    }

    @Post('create')
    @UsePipes(new ValidationPipe())
    async create(@Body() coverage: CoverageCreateDto): Promise<CoverageDto> {
      return this.coverageService.create(coverage);
    }
  
    @Put(':id')
    @UsePipes(new ValidationPipe())
    async update(@Param('id') id, @Body() coverage: CoverageDto): Promise<any> {
      coverage.id = Number(id);
      return await this.coverageService.update(coverage);
    }
  
    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return await this.coverageService.delete(id);
    }
    static seed(coverageService : CoverageService, coveragePackageService:CoveragePackageService, logger:Logger){
      try{
        //coverageService.seed();
        coveragePackageService.seed();
      }
      catch (error){
        logger.error(error?.message ?? "");
        throw error;
      }
     }

     static clearcoverages(_coverageService:CoverageService, _coveragePackageService:CoveragePackageService,_logger:Logger)
     {
      try
      {   
        _coveragePackageService.clearCoveragePackages();
        _coverageService.clearCoverages();
      }
       catch (error) {
        _logger.error(error?.message ?? "");
        throw error;
      }   
    }
  }
  
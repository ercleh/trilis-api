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
import { CoverageClassCreateDto } from '../dto/coverageClass.create.dto';
import { CoverageClassDto } from '../dto/coverageClass.dto';
import { CoveragePackageDto } from '../dto/coveragePackage.dto';
import { Coverage } from '../entity/coverage.entity';
import { CoverageClass } from '../entity/coverageClass.entity';
import { CoveragePackage } from '../entity/coveragePackage.entity';
import { CoverageService } from '../service/coverage.service';
import { CoverageClassService } from '../service/coverageClass.service';
import { CoveragePackageService } from '../service/coveragePackage.service';
  
  @Controller('coverage-class')
  export class CoverageClassController {
    constructor(
      private readonly coverageClassService: CoverageClassService) {}
  
    @Get()
    async read(): Promise<CoverageClassDto[]> {
      return this.coverageClassService.findAll();
    }

    @Post('create')
    @UsePipes(new ValidationPipe())
    async create(@Body() coverageClass: CoverageClassCreateDto): Promise<CoverageClassDto> {
      return this.coverageClassService.create(coverageClass);
    }
  
    @Put(':id')
    @UsePipes(new ValidationPipe())
    async update(@Param('id') id, @Body() coverageClass: CoverageClass): Promise<any> {
      coverageClass.id = Number(id);
      return await this.coverageClassService.update(coverageClass);
    }
  
    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return await this.coverageClassService.delete(id);
    }
    static seed(coverageClassService : CoverageClassService, logger:Logger){
      try{
        coverageClassService.seed();
      }
      catch (error){
        logger.error(error?.message ?? "");
        throw error;
      }
     }

     static clearCoverageClasses(_coverageClassService:CoverageClassService, _logger:Logger)
     {
      try
      {   
       _coverageClassService.clearCoverageClasses();
      }
       catch (error) {
        _logger.error(error?.message ?? "");
        throw error;
      }   
    }
  }
  
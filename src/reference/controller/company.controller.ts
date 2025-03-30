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
import { Connection, DeleteResult, QueryRunner, getConnection } from 'typeorm';
import { CompanyCreateDto } from '../dto/company-create.dto';
import { CompanyDto } from '../dto/company.dto';
import { Company } from '../entity/company.entity';
import { CompanyService } from '../service/company.service';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  logger: Logger = new Logger(CompanyController.name)
//#region find
@Get()
async read(): Promise<CompanyDto[]> {
  return this.companyService.findAll();
}

@Get(':id')
async readById(@Param('id') id): Promise<CompanyDto> {
  return this.companyService.findOne(id);
}
@Get('shortName/:shortName')
async readByName(@Param("shortName") shortName): Promise<CompanyDto> {
  return this.companyService.findByShortName(shortName);
}

@Get(':id/insurance-statuss')
async readInsuranceStatuss(@Param('id') id){
  return this.companyService.findInsuranceStatuss(id);
}
//#endregion

//#region create
@Post('create')
@UsePipes(new ValidationPipe())
async create(@Body() item: CompanyCreateDto): Promise<CompanyDto> {
  let result:CompanyDto;
  try{
    result = await this.companyService.create(item) 
    return result  
  }
  catch (error) {
    console.error(error?.message ?? "");
    throw error;
} 
}

//#endregion
//#region update
@Post(':id/update')
@UsePipes(new ValidationPipe())
async update(
  @Param('id') id, 
  @Body() item: CompanyDto)
  : Promise<any> {
  try {
    console.log("entree dans la méthode update de CompanyController")

    item.id = Number(id);
    //return await this.companyService.update_query(item);
    return await this.companyService.update_repo(item); 
  }
  catch (error) {
    console.error(error?.message ?? "");
    throw error;
} 
}
//#endregion
//#region delete
//fonctionne
@Delete(':id/delete')
async delete(@Param('id') id): Promise<DeleteResult> {
  const result = await this.companyService.delete(id);
  console.log(result);
  return result;
}

//#endregion
  //#region clear/chargement
    // fonctionne
    @Delete('clear-companies')
    async clear_companies(){
     try
     {   
       await this.companyService.clearCompanies()
       .then (r=> console.log(r))
       .catch  (r=> console.log(r))
      }
      catch (error) {
       this.logger.error(error?.message ?? "");
       throw error;
     }   
   } 
   
    // fonctionne
   @Post('seed-companies')
   async seed_companies(){
    console.log("entree dans seed_companies de companyController")
     try {
      await this.companyService.seedCompanies()
      .then (r=> console.log(r))
      .catch  (r=> console.log(r))
      }
       catch (error) {
         this.logger.error(error?.message ?? "");
         throw error;
     }
    }
//#endregion

}

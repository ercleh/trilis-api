/* eslint-disable prettier/prettier */
/* eslint-disable no-var */
/* eslint-disable prettier/prettier */
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
import { ParamKeyValueCreateDto } from './param-key-value.create.dto';
import { ParamKeyValueService } from './param-key-value.service';
import { ParamKeyValueDto } from './param-key-value.dto';

@Controller('setting/param-key-value')
export class ParamKeyValueController {
  constructor(private readonly paramKeyValueService: ParamKeyValueService) {}
  logger = new Logger(ParamKeyValueController.name);

  @Get()
  async read(): Promise<ParamKeyValueDto[]> {
    return this.paramKeyValueService.findAll();
  }
  @Get('name/:name')
  async readByName(@Param('name') name) {
    return this.paramKeyValueService.findByName(name);
  }
  @Post('create')
  async create(
    @Body() item: ParamKeyValueCreateDto,
  ): Promise<ParamKeyValueDto> {
    this.logger.log("Données reçues:");
    this.logger.log(JSON.stringify(item));
    // Vérifiez chaque champ
    console.log('Name:', item.name, 'Type:', typeof item.name);
    console.log('Value:', item.value, 'Type:', typeof item.value);
    console.log('Description:', item.description, 'Type:', typeof item.description);
    console.log('Type:', item.type, 'Type:', typeof item.type);
    return this.paramKeyValueService.create(item);
  }

@Post(':id/update')
@UsePipes(new ValidationPipe())
async update(
  @Param('id') id, 
  @Body() item: ParamKeyValueDto)
  : Promise<any> {
  try {
    console.log("entree dans la méthode update de ParamKeyValueController")

    item.id = Number(id);
    //return await this.companyService.update_query(item);
    return await this.paramKeyValueService.update(item); 
  }
  catch (error) {
    console.error(error?.message ?? "");
    throw error;
} 
}
}

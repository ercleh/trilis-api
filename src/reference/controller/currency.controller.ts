/* eslint-disable prettier/prettier */
/* eslint-disable no-var */
/* eslint-disable prettier/prettier */
import {
    Body,
    Controller,
    Get,
    Post,
    UsePipes,
    ValidationPipe,
  } from '@nestjs/common';
import { getConnection } from 'typeorm';
import { CurrencyCreateDto } from '../dto/currency-create.dto';
import { CurrencyDto } from '../dto/currency.dto';
import { Currency } from '../entity/currency.entity';
   import { CurrencyService } from '../service/currency.service';
  
  @Controller('currency')
  export class CurrencyController {
    constructor(private readonly currencyService: CurrencyService) {}
  
    @Get()
    async read(): Promise<CurrencyDto[]> {
      return this.currencyService.findAll();
    }
    @Post('create')
    @UsePipes(new ValidationPipe())
    async create(@Body() currency: CurrencyDto): Promise<CurrencyDto> {
      return this.currencyService.create(currency);
    }
  
    static seed_currency(currencyService:CurrencyService){
      var currency: CurrencyCreateDto;
      currency = {
        name: "Franc CFA",
        shortName: "FCFA",
        symbol:"XOF",
        imagePath: ""
      }
      currencyService.create(currency);
      currency = {
        name: "EURO",
        shortName: "EURO",
        symbol:"€",
        imagePath: ""
      }
      currencyService.create(currency);
      currency = {
        name: "Dollar",
        shortName: "Dollar",
        symbol:"$",
        imagePath: ""
      }
      currencyService.create(currency);
     }
     static async delete_currency(){
      await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Currency)
      .execute();
     }
  }
  
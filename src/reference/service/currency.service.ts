/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository} from 'typeorm';
import { CurrencyCreateDto } from '../dto/currency-create.dto';
import { CurrencyDto } from '../dto/currency.dto';
import { Currency } from '../entity/currency.entity';
  
@Injectable()
export class CurrencyService {
 
  constructor(
    @InjectRepository(Currency)
    private currencyRepo:Repository<CurrencyDto>,
  ) {}

 
  findAll(): Promise<CurrencyDto[]> {
    return this.currencyRepo.find();
  }
  findByName(param: string): Promise<CurrencyDto> {
    const currency =  this.currencyRepo.findOne({ where: { name: param } })
    return currency;
  }

  create(currency: CurrencyCreateDto): Promise<CurrencyDto> {
    return this.currencyRepo.save(currency);
  }
  clearCurrencies(){
    getConnection()
  .createQueryBuilder()
  .delete()
  .from(Currency)
  .execute()
}

seed(){
  this.clearCurrencies();
  let currency: CurrencyCreateDto;
  currency = {
    name: "Franc CFA",
    shortName: "FCFA",
    symbol:"XOF",
    imagePath: ""
  }
  this.create(currency);
  currency = {
    name: "EURO",
    shortName: "EURO",
    symbol:"€",
    imagePath: ""
  }
  this.create(currency);
  currency = {
    name: "Dollar",
    shortName: "Dollar",
    symbol:"$",
    imagePath: ""
  }
  this.create(currency);
}

 }


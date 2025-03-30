/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository} from 'typeorm';
import { FiscalPowerCreateDto } from '../dto/fiscalPower.create.dto';
import { FiscalPowerDto } from '../dto/fiscalPower.dto';
import { FiscalPower } from '../entity/fiscalPower.entity';
  
@Injectable()
export class FiscalPowerService {
 
  constructor(
    @InjectRepository(FiscalPower)
    private repo:Repository<FiscalPower>,
  ) {}

 
  findAll(): Promise<FiscalPowerDto[]> {
    return this.repo.find();
  }
  findByValue(param: number): Promise<FiscalPowerDto> {
    const c =  this.repo.findOne({ where: { value: param } })
    return c;
  }

  create(item: FiscalPowerCreateDto): Promise<FiscalPowerDto> {
    return this.repo.save(item);
  }
  clearFiscalPowers(){
    getConnection()
  .createQueryBuilder()
  .delete()
  .from(FiscalPower)
  .execute()
}

seed(){
    this.clearFiscalPowers();
    let c: FiscalPowerCreateDto;
    c = {
        value: 2
    }
    this.create(c);
    c = {
        value: 3
    }
    this.create(c);
    c = {
        value: 4
    }
    this.create(c);
    c = {
        value: 5
    }
    this.create(c);
    c = {
        value: 6
    }
    this.create(c);
    c = {
        value: 7
    }
    this.create(c);
    c = {
        value: 8
    }
    this.create(c);
    c = {
        value: 9
    }
    this.create(c);
    c = {
        value: 10
    }
    this.create(c);
    c = {
        value: 11
    }
    this.create(c);
    c = {
        value: 12
    }
    this.create(c);
    c = {
        value: 13
    }
    this.create(c);
    c = {
        value: 14
    }
    this.create(c);
    c = {
        value: 15
    }
    this.create(c);
    c = {
        value: 16
    }
    this.create(c);
    c = {
        value: 17
    }
    this.create(c);
    c = {
        value: 18
    }
    this.create(c);
    c = {
        value: 19
    }
    this.create(c);
    c = {
        value: 20
    }
    this.create(c);
    c = {
        value: 21
    }
    this.create(c);
    c = {
        value: 22
    }
    this.create(c);
    c = {
        value: 23
    }
    this.create(c);
    c = {
        value: 24
    }
    this.create(c);
    c = {
        value: 25
    }
    this.create(c);
    c = {
        value: 26
    }
    this.create(c);
    c = {
        value: 27
    }
    this.create(c);
    c = {
        value: 28
    }
    this.create(c);
    c = {
        value: 29
    }
    this.create(c);
    c = {
        value: 30
    }
    this.create(c);
    c = {
        value: 31
    }
    this.create(c);
    c = {
        value: 32
    }
    this.create(c);
    c = {
        value: 33
    }
    this.create(c);
    c = {
        value: 34
    }
    this.create(c);
    c = {
        value: 35
    }
    this.create(c);
    c = {
        value: 36
    }
    this.create(c);
    c = {
        value: 37
    }
    this.create(c);
    c = {
        value: 38
    }
    this.create(c);
    c = {
        value: 39
    }
    this.create(c);
    c = {
        value: 40
    }
    this.create(c);
    }
 }


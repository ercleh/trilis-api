/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository} from 'typeorm';
import { DoorsNumberCreateDto } from '../dto/doorsNumber.create.dto';
import { DoorsNumberDto } from '../dto/doorsNumber.dto';
import { DoorsNumber } from '../entity/doorsNumber.entity';
  
@Injectable()
export class DoorsNumberService {
 
  constructor(
    @InjectRepository(DoorsNumber)
    private repo:Repository<DoorsNumber>,
  ) {}

 
  findAll(): Promise<DoorsNumberDto[]> {
    return this.repo.find();
  }
  findByValue(param: number): Promise<DoorsNumberDto> {
    const c =  this.repo.findOne({ where: { value: param } })
    return c;
  }

  create(item: DoorsNumberCreateDto): Promise<DoorsNumberDto> {
    return this.repo.save(item);
  }
  clearDoorsNumbers(){
    getConnection()
  .createQueryBuilder()
  .delete()
  .from(DoorsNumber)
  .execute()
}

seed(){
    this.clearDoorsNumbers();
    let c: DoorsNumberCreateDto;
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
        value: 7
    }
    this.create(c);
    }
 }


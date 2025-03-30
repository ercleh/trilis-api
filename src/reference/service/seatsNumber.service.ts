/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository} from 'typeorm';
import { SeatsNumberCreateDto } from '../dto/seatsNumber.create.dto';
import { SeatsNumberDto } from '../dto/seatsNumber.dto';
import { SeatsNumber } from '../entity/seatsNumber.entity';
  
@Injectable()
export class SeatsNumberService {
 
  constructor(
    @InjectRepository(SeatsNumber)
    private repo:Repository<SeatsNumber>,
  ) {}

 
  findAll(): Promise<SeatsNumberDto[]> {
    return this.repo.find();
  }
  findByValue(param: number): Promise<SeatsNumberDto> {
    const c =  this.repo.findOne({ where: { value: param } })
    return c;
  }

  create(item: SeatsNumberCreateDto): Promise<SeatsNumberDto> {
    return this.repo.save(item);
  }
  clearSeatsNumbers(){
    getConnection()
  .createQueryBuilder()
  .delete()
  .from(SeatsNumber)
  .execute()
}

seed(){
    this.clearSeatsNumbers();
    let c: SeatsNumberCreateDto;
    c = {
        value: 2
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
    }
 }


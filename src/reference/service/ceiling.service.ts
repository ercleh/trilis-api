/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository} from 'typeorm';
import { CeilingCreateDto } from '../dto/ceiling-create.dto';
import { CeilingDto } from '../dto/ceiling.dto';
import { Ceiling } from '../entity/ceiling.entity';
  
@Injectable()
export class CeilingService {
 
  constructor(
    @InjectRepository(Ceiling)
    private ceilingRepo:Repository<Ceiling>,
  ) {}

 
  findAll(): Promise<CeilingDto[]> {
    return this.ceilingRepo.find();
  }

  create(ceiling: CeilingCreateDto): Promise<CeilingDto> {
    return this.ceilingRepo.save(ceiling);
  }
  clearCeilings(){
    getConnection()
  .createQueryBuilder()
  .delete()
  .from(Ceiling)
  .execute()
}

 }


/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository} from 'typeorm';
import { DeductibleCreateDto } from '../dto/deductible-create.dto';
import { Deductible } from '../entity/deductible.entity';
  
@Injectable()
export class DeductibleService {
 
  constructor(
    @InjectRepository(Deductible)
    private deductibleRepo:Repository<Deductible>,
  ) {}

 
  findAll(): Promise<Deductible[]> {
    return this.deductibleRepo.find();
  }

  create(deductible: DeductibleCreateDto): Promise<Deductible> {
    return this.deductibleRepo.save(deductible);
  }
  clearDeductibles(){
    getConnection()
  .createQueryBuilder()
  .delete()
  .from(Deductible)
  .execute()
}

 }


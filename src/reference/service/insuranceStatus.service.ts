import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection} from 'typeorm';
import { InsuranceStatus } from '../entity/insuranceStatus.entity';
import { InsuranceStatusDto } from '../dto/insuranceStatus.dto';
import { InsuranceStatusCreateDto } from '../dto/insuranceStatus.create.dto';
   
@Injectable()
export class InsuranceStatusService {
 
  constructor(
    @InjectRepository(InsuranceStatus)
    private repo:Repository<InsuranceStatusDto>,
  ) {}

  findAll(): Promise<InsuranceStatusDto[]> {
    return this.repo.find();
  }
  findByName(param: string): Promise<InsuranceStatusDto> {
    const result =  this.repo.findOne({ where: { name: param } })
    return result;
  }
  create(item: InsuranceStatusCreateDto): Promise<InsuranceStatusDto> {
    return this.repo.save(item);
  }
  clear(){
    getConnection()
  .createQueryBuilder()
  .delete()
  .from(InsuranceStatus)
  .execute()
}

 }


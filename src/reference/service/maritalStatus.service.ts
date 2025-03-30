import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection} from 'typeorm';
import { MaritalStatus } from '../entity/maritalStatus.entity';
import { MaritalStatusDto } from '../dto/marital-status.dto';
import { MaritalStatusCreateDto } from '../dto/marital-status-create.dto';
  
@Injectable()
export class MaritalStatusService {
 
  constructor(
    @InjectRepository(MaritalStatus)
    private repo:Repository<MaritalStatusDto>,
  ) {}

 
  findAll(): Promise<MaritalStatusDto[]> {
    return this.repo.find();
  }
  findByName(param: string): Promise<MaritalStatusDto> {
    const result =  this.repo.findOne({ where: { name: param } })
    return result;
  }

  create(item: MaritalStatusCreateDto): Promise<MaritalStatusDto> {
    return this.repo.save(item);
  }
  
  clear(){
    getConnection()
  .createQueryBuilder()
  .delete()
  .from(MaritalStatus)
  .execute()
}

 }


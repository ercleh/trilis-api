import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection} from 'typeorm';
import { DriverExperience } from '../entity/driverExperience.entity';
import { DriverExperienceDto } from '../dto/driverExperience.dto';
import { DriverExperienceCreateDto } from '../dto/driverExperience.create.dto';
    
@Injectable()
export class DriverExperienceService {
 
  constructor(
    @InjectRepository(DriverExperience)
    private repo:Repository<DriverExperienceDto>,
  ) {}

 
  findAll(): Promise<DriverExperienceDto[]> {
    return this.repo.find();
  }
  findByName(param: string): Promise<DriverExperienceDto> {
    const result =  this.repo.findOne({ where: { name: param } })
    return result;
  }
  findAllByCompanyId(id: number): Promise<DriverExperienceDto[]> {
    return this.repo.find();
  }
  create(item: DriverExperienceCreateDto): Promise<DriverExperienceDto> {
    return this.repo.save(item);
  }
  
  clear(){
    getConnection()
  .createQueryBuilder()
  .delete()
  .from(DriverExperience)
  .execute()
}

 }


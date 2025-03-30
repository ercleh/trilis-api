import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection} from 'typeorm';
import { RelationshipCreateDto } from '../dto/relationship-create.dto';
import { RelationshipDto } from '../dto/relationship.dto';
import { Relationship } from '../entity/relationship.entity';
  
@Injectable()
export class RelationshipService {
 
  constructor(
    @InjectRepository(Relationship)
    private repo:Repository<RelationshipDto>,
  ) {}

 
  findAll(): Promise<RelationshipDto[]> {
    return this.repo.find();
  }
  findByName(param: string): Promise<RelationshipDto> {
    const result =  this.repo.findOne({ where: { name: param } })
    return result;
  }

  create(item: RelationshipCreateDto): Promise<RelationshipDto> {
    return this.repo.save(item);
  }
  
  clear(){
    getConnection()
  .createQueryBuilder()
  .delete()
  .from(Relationship)
  .execute()
}

 }


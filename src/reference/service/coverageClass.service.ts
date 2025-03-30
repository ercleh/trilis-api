import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult, getConnection } from 'typeorm';
import { CoverageCreateDto } from '../dto/coverage-create.dto';
import { Coverage } from 'src/reference/entity/coverage.entity';
import { CoverageClass } from '../entity/coverageClass.entity';
import { CoverageClassDto } from '../dto/coverageClass.dto';
import { CoverageClassCreateDto } from '../dto/coverageClass.create.dto';
import { CoverageDto } from '../dto/coverage.dto';

@Injectable()
export class CoverageClassService {

  constructor(
    @InjectRepository(CoverageClass)
    private repo:Repository<CoverageClass>,
  ) 
  {}

  create(coverageClass: CoverageClassCreateDto): Promise<CoverageClassDto> {
    return this.repo.save(coverageClass);
  }
  findAll(): Promise<CoverageClassDto[]> {
    return this.repo.find();
  }

  findOne(id: number): Promise<CoverageClassDto> {
    return this.repo.findOne({ where: { id: id } });
  }
  findByName(param: string): Promise<CoverageClassDto> {
    const coverageClass=  this.repo.findOne({ where: { name: param } })
    return coverageClass;
  }

  update(coverageClass: CoverageClassDto): Promise<UpdateResult> {
    return this.repo.update(coverageClass.id,coverageClass);
  }

  delete(id): Promise<DeleteResult> {
    return  this.repo.delete(id);
  }

  clearCoverageClasses(){
    getConnection()
  .createQueryBuilder()
  .delete()
  .from(CoverageClass)
  .execute()
}
seed(){
    this.clearCoverageClasses();
        let item = {
            "name": "Garanties essentielles",
            "imagePath":""
        };
        this.create(item);
        item = {
            "name": "Garanties dommage",
            "imagePath":""
            };
            this.create(item);
        item = {
        "name": "Garanties optionnelles",
        "imagePath":""
        };
        this.create(item);
}
}

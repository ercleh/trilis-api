/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { CoverageVersion } from '../entity/coverageVersion.entity';
import { CoverageVersionCreateDto } from '../dto/coverageVersion-create.dto';
 
@Injectable()
export class CoverageVersionService {

  constructor(
    @InjectRepository(CoverageVersion)
    private coverageVersionRepo:Repository<CoverageVersion>,
  ) {}

  create(coverageVersion: CoverageVersionCreateDto): Promise<CoverageVersion> {
    return this.coverageVersionRepo.save(coverageVersion);
  }

  findAll(): Promise<CoverageVersion[]> {
    return this.coverageVersionRepo.find();
  }

  findOne(id: number): Promise<CoverageVersion> {
    return this.coverageVersionRepo.findOne({ where: { coverageId: id } });
  }
  update(coverage: CoverageVersion): Promise<UpdateResult> {
    return this.coverageVersionRepo.update(coverage.coverageId, coverage);
  }

  delete(id): Promise<DeleteResult> {
    return  this.coverageVersionRepo.delete(id);
  }
}


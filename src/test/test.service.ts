/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource } from 'typeorm';
import { Test } from './test.entity';
import { TestDto } from './test.dto';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(Test)
    private readonly repo: Repository<TestDto>,
    private readonly dataSource: DataSource,
  ) {}

  findAll(): Promise<TestDto[]> {
    return this.repo.find();
  }
}

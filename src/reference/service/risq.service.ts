/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm';
import { RisqCreateDto } from '../dto/risq-create.dto';
import { RisqDto } from '../dto/risq.dto';
import { Risq } from '../entity/risq.entity';
   
@Injectable()
export class RisqService {
 
  constructor(
    @InjectRepository(Risq)
    private repo:Repository<Risq>,
  ) {}

  findAll(): Promise<RisqDto[]> {
    return this.repo.find();
  }
  create(item: RisqCreateDto): Promise<RisqDto> {
    return this.repo.save(item);
  }
  findByShortName(param: string): Promise<RisqDto> {
    const risq =  this.repo.findOne({ where: { shortName: param } })
    return risq;
  }
  findById(id: number): Promise<RisqDto> {
    const risq =  this.repo.findOne({ where: { id: id } })
     if (!risq) {
          throw new HttpException(
          `Risque inexistant`,
          HttpStatus.BAD_REQUEST,
         );
    }
    return risq;
  }

 }


import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm';
import { TransmissionDto } from '../dto/transmission.dto';
import { TransmissionCreateDto } from '../dto/transmission_create.dto';
import { Transmission } from '../entity/transmission.entity';
   
@Injectable()
export class TransmissionService {
 
  constructor(
    @InjectRepository(Transmission)
    private transmissionRepo:Repository<TransmissionDto>,
  ) {}

  findAll(): Promise<TransmissionDto[]> {
    return this.transmissionRepo.find();
  }
  findByName(param: string): Promise<TransmissionDto> {
    const transmission =  this.transmissionRepo.findOne({ where: { name: param } })
    return transmission;
  }

  create(transmission: TransmissionCreateDto): Promise<TransmissionDto> {
    return this.transmissionRepo.save(transmission);
  }
 }


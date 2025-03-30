import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm';
import { EnergyCreateDto } from '../dto/energy-create.dto';
import { EnergyDto } from '../dto/energy.dto';
import { Energy } from '../entity/energy.entity';
  
@Injectable()
export class EnergyService {
 
  constructor(
    @InjectRepository(Energy)
    private energyRepo:Repository<EnergyDto>,
  ) {}

 
  findAll(): Promise<EnergyDto[]> {
    return this.energyRepo.find();
  }
  findByName(param: string): Promise<EnergyDto> {
    const energy =  this.energyRepo.findOne({ where: { name: param } })
    return energy;
  }

  create(energy: EnergyCreateDto): Promise<EnergyDto> {
    return this.energyRepo.save(energy);
  }

 }


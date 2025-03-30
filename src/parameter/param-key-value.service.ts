/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DataSource } from 'typeorm';
import { ParamKeyValue } from './param-key-value.entity';
import { ParamKeyValueDto } from './param-key-value.dto';
import { ParamKeyValueCreateDto } from './param-key-value.create.dto';

@Injectable()
export class ParamKeyValueService {
  constructor(
    @InjectRepository(ParamKeyValue)
    private readonly repo: Repository<ParamKeyValueDto>,
    private readonly dataSource: DataSource,
  ) {}

  findAll(): Promise<ParamKeyValueDto[]> {
    return this.repo.find();
  }
  async findByName(param: string): Promise<ParamKeyValueDto | undefined> {
    const c = await this.repo.findOne({ where: { name: param } }); // Correctement utilisé avec `where`
    return c;
  }
  async create(item: ParamKeyValueCreateDto): Promise<ParamKeyValueDto> {
    Logger.log('service param-key-value, create')
    const name = item.name;
    // check if exists in the db    
    let itemInDb = await this.repo.findOne({ 
        where: {name} 
    });
    if (itemInDb) {
      console.log(name + " existe deja") 
      throw new HttpException('Entité " + name + " déjà existante', HttpStatus.BAD_REQUEST);    
    }
    const newEntity = this.repo.create(item);
    const savedEntity = this.repo.save(newEntity);
    return savedEntity; 
  }
  
  async update(item: ParamKeyValueDto): Promise<UpdateResult> {
    const { id,name,value,description,type} = item

    // check if exists in the db    
    const itemInDb = await this.repo.findOne({ 
        where: {id} 
    });
    if (!itemInDb) {
        throw new HttpException('Entité inexistante', HttpStatus.BAD_REQUEST);    
    }
    return this.repo.update(item.id, item);
  }

  async updateQB(paramKeyValueDto: ParamKeyValueDto): Promise<UpdateResult> {
    const { id, name, value, description, type } = paramKeyValueDto;

    // Vérifiez si le paramètre existe dans la base de données
    const paramKeyValueInDb = await this.repo.findOne({ where: { id } });
    if (!paramKeyValueInDb) {
      throw new HttpException('Paramètre inexistant', HttpStatus.BAD_REQUEST);
    }

    // Utilisez QueryBuilder avec DataSource
    return this.dataSource
      .createQueryBuilder()
      .update(ParamKeyValue)
      .set({
        name,
        value,
        description,
        type,
      })
      .where('id = :id', { id })
      .execute();
  }
}

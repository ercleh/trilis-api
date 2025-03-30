import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createQueryBuilder, getConnection, getRepository, Repository} from 'typeorm';
import { carMotorizationData } from '../data/car-motorization-data';
import { CarFinishing } from '../entity/carFinishing.entity';
import { CarFinishingDto } from '../dto/carFinishing.dto';
import { CarFinishingCreateDto } from '../dto/carFinishing-create.dto';
  
@Injectable()
export class CarFinishingService {
 
  constructor(
    @InjectRepository(CarFinishing)
    private carFinishingRepo:Repository<CarFinishingDto>,
   ) {}
 
  findAll(): Promise<CarFinishingDto[]> {
    return this.carFinishingRepo.find();
  }

  //filtre sur carMotorizationId
  //avec queryBuilder
  async findByCarMotorizationId(id_param: number): Promise<CarFinishingDto[]| undefined> {
    try{   
 
      const carFinishing = await this.carFinishingRepo.createQueryBuilder("car_finishing") 
      .where("car_finishing.carMotorizationId= :id", { id: id_param }) 
      .getMany();
      return carFinishing;
     }
    catch
    {
    }
    return null;
   }

  //filtre sur carMotorizationId
  //avec repository
  findByCarMotorizationIdRepo(carMotorizationId: number): Promise<CarFinishingDto[]| undefined> {
    try{   
      const carFinishings = this.carFinishingRepo.find({ 
      select: ['id','carMotorizationId','name','from','to'],  //si on ne met pas de select, on récupère tout l'objet
      where: { carMotorizationId} 
    });
      return carFinishings;
    }
    catch
    {
    }
    return null;
   } 

  create(carFinishing: CarFinishingCreateDto): Promise<CarFinishingDto> {
    return this.carFinishingRepo.save(carFinishing);
  }

  clearCarFinishings(){
    getConnection()
   .createQueryBuilder()
   .delete()
   .from(CarFinishing)
   .execute()
   .then(r=>getConnection().createQueryRunner().query(`ALTER TABLE \`car_finishing\`AUTO_INCREMENT = 1`)
 )
 }

}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createQueryBuilder, getConnection, getRepository, Repository} from 'typeorm';
import { carMotorizationData } from '../data/car-motorization-data';
import { CarMotorizationCreateDto } from '../dto/carMotorization-create.dto';
import { CarMotorizationDto } from '../dto/carMotorization.dto';
import { CarMotorization } from '../entity/carMotorization.entity';
import { ICarMotorization } from '../Interfaces/iCarMotorization';
import { BrandService } from './brand.service';
import { CarBodyService } from './carBody.service';
import { CarModelService } from './carModel.service';
import { EnergyService } from './energy.service';
import { TransmissionService } from './transmission.service';
  
@Injectable()
export class CarMotorizationService {
 
  constructor(
    @InjectRepository(CarMotorization)
    private carMotorizationRepo:Repository<CarMotorizationDto>,
    private carBodyService:CarBodyService,
    private carModelService:CarModelService,
    private brandService:BrandService,
    private energyService:EnergyService,
    private transmissionService:TransmissionService

   ) {}
 
  findAll(): Promise<CarMotorizationDto[]> {
    return this.carMotorizationRepo.find();
  }

  //filtre sur carModelId
  //avec queryBuilder
  async findByCarModelId(id_param: number): Promise<CarMotorizationDto[]| undefined> {
    try{   
 
      const carMotorization = await this.carMotorizationRepo.createQueryBuilder("car_motorization") 
      .where("car_motorization.carModelId= :id", { id: id_param }) 
      .getMany();
      return carMotorization;
     }
    catch
    {
    }
    return null;
   }

  //filtre sur carModelId
  //avec repository
  findByCarModelIdRepo(carModelId: number): Promise<CarMotorizationDto[]| undefined> {
    try{   
      const carMotorizations = this.carMotorizationRepo.find({ 
      select: ['id','carModelId','carBodyId','energyId','transmissionId','name','doorsNumber', 'seatsNumber','fiscalPower', 'realPower','mine','from','to'],  //si on ne met pas de select, on récupère tout l'objet
      where: { carModelId} 
    });
      return carMotorizations;
    }
    catch
    {
    }
    return null;
   } 

  create(carMotorization: CarMotorizationCreateDto): Promise<CarMotorizationDto> {
    return this.carMotorizationRepo.save(carMotorization);
  }

  clearCarMotorizations(){
    getConnection()
   .createQueryBuilder()
   .delete()
   .from(CarMotorization)
   .execute()
   .then(r=>getConnection().createQueryRunner().query(`ALTER TABLE \`car_motorization\`AUTO_INCREMENT = 1`)
 )
 }

 seed1(): Array<Promise<CarMotorizationDto>> {
  this.clearCarMotorizations();
 
  return carMotorizationData.filter(item=>item.serie.length > 0)
    .map(async (data: ICarMotorization) => {
    return await this.brandService.findByName(data.brand)
      .then(async brand => {
      if (brand) {

        return await this.carModelService.findByBrandAndName(brand.id,data.model)
        .then(async carModel => {
          if (carModel){

            return await this.carBodyService.findByName(data.serie)
            .then (async carBody => {
              if (carBody){

                return await this.energyService.findByName(data.energy)
              .then (async energy => {
                if (energy){

                  return await this.transmissionService.findByName(data.transmission)
                .then (async transmission => {
                  if (transmission){
                    const carMotorizationCreateDto = {
                        "carModelId":  carModel.id, 
                        "carBodyId" :carBody.id,
                        "energyId":energy.id,
                        "transmissionId":transmission.id,
                        "name": data.motorization,
                        "from": data.from,
                        "to" : data.to,
                        "doorsNumber":0,
                        "seatsNumber":0,
                        "realPower":0,
                        "fiscalPower":0,
                        "mine":""
                        };
                        this.create(carMotorizationCreateDto);
                        }
                      })
                    }
                  })
                }
              })
            }
          })
        }
        return Promise.resolve(null);
      })
      .catch(error => Promise.reject(error));
  });
}

seed2(): Array<Promise<CarMotorizationDto>> {
 
  return carMotorizationData.filter(item=>item.serie.length == 0)
    .map(async (data: ICarMotorization) => {
    return await this.brandService.findByName(data.brand)
      .then(async brand => {
      if (brand) {

        return await this.carModelService.findByBrandAndName(brand.id,data.model)
        .then(async carModel => {
          if (carModel){

                    const carMotorizationCreateDto = {
                      "carModelId":  carModel.id, 
                      "carBodyId" :null,
                      "energyId":null,
                      "transmissionId":null,
                      "name": data.model,
                      "from": data.from,
                      "to" : data.to,
                      "doorsNumber":0,
                      "seatsNumber":0,
                      "realPower": 0,
                      "fiscalPower":0,
                      "mine":""

                        };
                        this.create(carMotorizationCreateDto);
                        
            }
          })
        }
        return Promise.resolve(null);
      })
      .catch(error => Promise.reject(error));
  });
}

}

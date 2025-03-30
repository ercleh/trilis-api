import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository} from 'typeorm';
import { carMotorizationData } from '../data/car-motorization-data';
import { CarBodyCreateDto } from '../dto/carBody-create.dto';
import { CarBodyDto } from '../dto/carBody.dto';
import { CarBody } from '../entity/carBody.entity';
import { ICarBody } from '../Interfaces/iCarBody';
import { BrandService } from './brand.service';
import { CarModelService } from './carModel.service';
  
@Injectable()
export class CarBodyService {
 
  constructor(
    @InjectRepository(CarBody) 
    private carBodyRepo:Repository<CarBodyDto>,
    private carModelService:CarModelService,
    private brandService:BrandService
   ) {}
 
  findAll(): Promise<CarBodyDto[]> {
    return this.carBodyRepo.find();
  }
  findByName(name:string): Promise<CarBodyDto> {
    const carBody =  this.carBodyRepo.findOne({select: ['id'],
    where: {
      name,
    },
  });
    return carBody;
  }
  create(carBody: CarBodyCreateDto): Promise<CarBodyDto> {
    return this.carBodyRepo.save(carBody);
  }
  clearCarBodies(){
    getConnection()
   .createQueryBuilder()
   .delete()
   .from(CarBody)
   .execute()
   .then(r=>getConnection().createQueryRunner().query(`ALTER TABLE \`car_body\`AUTO_INCREMENT = 1`)
 )
  }

  seed() {
    this.clearCarBodies();
    let carBodyCreateDto = {
      "name":"Berline"
    }; 
    this.create(carBodyCreateDto); 
    carBodyCreateDto = {
      "name":"Break"
    }; 
    this.create(carBodyCreateDto); 
    carBodyCreateDto = {
      "name":"Cabriolet"
    }; 
    this.create(carBodyCreateDto); 
    carBodyCreateDto = {
      "name":"Coupe"
    }; 
    this.create(carBodyCreateDto); 
    carBodyCreateDto = {
      "name":"SUV"
    }; 
    this.create(carBodyCreateDto); 
  }
}

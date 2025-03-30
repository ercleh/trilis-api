/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import internal from 'stream';
import { Between, LessThan, Repository} from 'typeorm';
import { carMotorizationData } from '../data/car-motorization-data';
import { CarModelCreateDto } from '../dto/carModel-create.dto';
import { CarModelDto } from '../dto/carModel.dto';
import { Brand } from '../entity/brand.entity';
import { CarModel } from '../entity/carModel.entity';
import { ICarModel } from '../Interfaces/iCarModel';
import { ICarMotorization } from '../Interfaces/iCarMotorization';
import { BrandService } from './brand.service';
  
@Injectable()
export class CarModelService {
 
  constructor(
    @InjectRepository(CarModel) 
    private carModelRepo:Repository<CarModelDto>,
    private brandService:BrandService
  ) {}

  findAll(): Promise<CarModelDto[]> {
    return this.carModelRepo.find();
  }

  create(carModel: CarModelCreateDto): Promise<CarModelDto> {
    return this.carModelRepo.save(carModel);
  }

  findByBrandAndName(brandId: number, name:string): Promise<CarModelDto> {
    const carModel =  this.carModelRepo.findOne({
      select: ['id'],
      where: {
        brandId,
        name,
      },
    });
    return carModel;
  }
  
  findByBrandAndStartDate(brandId: number, referenceDate:string): Promise<CarModelDto[]> {
    const carModels =  this.carModelRepo.find({
      select: ['id','brandId','name','from'],
      where: [
      { brandId, from: '' }, // Inclure les enregistrements où `from` est vide
      {
        brandId,
        from: LessThan(referenceDate), // Filtrer les dates antérieures à referenceDate
      }
    ]
    });
    return carModels;
  }
  //test
  findByBrandId(brandId: number): Promise<CarModelDto[]> {
    const carModels =  this.carModelRepo.find({
      select: ['id','brandId','name'],  //si on ne met pas de select, on récupère tout l'objet
      where: {
        brandId
      },
    });
    return carModels;
  }
  //fin test
  
 

  seed(): Array<Promise<CarModelDto>> {
  
    // extraire les couples distincts (brand,model)
    const carModelData:ICarModel[] = [];
    carMotorizationData.forEach(function(val, key) {  
    const re = new RegExp(val.brand + "|" + val.model);
    if (!carModelData.some(function(v, k) {
      return re.test(v.brand) && re.test(v.model)
    })) {
      carModelData.push(val)
    } 
    });
    return carModelData.map(async (data: ICarModel) => {
      return await this.brandService.findByName(data.brand)
        .then(async brand => {
          // We check if brand exists.
            if (brand) {
            const carModelCreateDto = {
                  "brandId":  brand.id,  
                  "name": data.model,
                  "from":"",
                  "to":""
                };
                this.create(carModelCreateDto);
          }
          return Promise.resolve(null);
        })
        .catch(error => Promise.reject(error));
    });
}

}

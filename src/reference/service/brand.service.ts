import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BehaviorSubject, from } from 'rxjs';
import { createQueryBuilder, getConnection, Repository} from 'typeorm';
import { BrandCreateDto } from '../dto/brand-create.dto';
import { BrandDto } from '../dto/brand.dto';
import { Brand } from '../entity/brand.entity';
  
@Injectable()
export class BrandService {
 
  constructor(
    @InjectRepository(Brand)
    private brandRepo:Repository<BrandDto>,
  ) {}

  brandIdSource = new BehaviorSubject<number>(0);
  brandIdObs = this.brandIdSource.asObservable();

  findAll(): Promise<BrandDto[]> {
    return this.brandRepo.find();
  }

  async findByIdRepo(id_param: number): Promise<BrandDto| undefined> {

    try{
      const brand = await this.brandRepo.createQueryBuilder("brand") 
                   .where("brand.id = :id", { id: id_param }) 
                   .getOne();
      return brand;
    }
    catch
    {
    }
    return null;
   }

   findByName(param: string): Promise<BrandDto> {
    const brand =  this.brandRepo.findOne({ where: { name: param } })
    return brand;
  }

   findByName1(param: string): Promise<BrandDto> {

    try{
      const brand = this.brandRepo.createQueryBuilder("brand") 
                   .where("brand.name = :name", { name:param  })
                   .getOne();
      return brand;
    }
    catch
    {
    }
    return null;
   }

   // common brands
  findCommonBrands(): Promise<BrandDto[]> {
    const commonBrands =  this.brandRepo.find({
      where: {
        common : true
      },
    });
    return commonBrands;
  }
  // other brands
  findOthersBrands(): Promise<BrandDto[]> {
    const commonBrands =  this.brandRepo.find({
      where: {
        common : false
      },
    });
    return commonBrands;
  }
   
   async getBrandId(param: string){
    try{
      this.brandRepo.createQueryBuilder("brand") 
                   .where("brand.name = :name", { name:param  })
                   .getOne()
                   .then( response => {
                    this.brandIdSource.next(response.id) ; 
                    }); 
    }
    catch
    {
      return -1;
    }
   }

  create(brand: BrandCreateDto): Promise<BrandDto> {
    return this.brandRepo.save(brand);
  }

  clearBrands(){
    getConnection()
  .createQueryBuilder()
  .delete()
  .from(Brand)
  .execute()
}
  seed(){ 
    this.clearBrands();
    let brand: BrandCreateDto;
    brand = {
      name: "Acura",
      imagePath: "assets/images-trilis/voitures/Acura_logo.jpg",
      common:false
  };
this.create(brand);
    brand = {
      name: "Renault",
      imagePath: "assets/images-trilis/voitures/Renault_logo.jpg",
      common:true
  };
this.create(brand);
  brand = {
      name: "Peugeot",
      imagePath: "assets/images-trilis/voitures/Peugeot-a-change-son-logo.png",
      common:true
  };
this.create(brand);
  brand = {
      name:"Citroën",
      imagePath: "assets/images-trilis/voitures/logo-voiture-citroen.jpg",
      common : true};
this.create(brand);
  brand = {    
      name:"BMW",
      imagePath: "assets/images-trilis/voitures/logo-BMW.jpg",
      common : true
  };
this.create(brand);
  brand = {
      name:"Ford",
      imagePath: "assets/images-trilis/voitures/ford-logo-2017.png",
      common : true
  };
this.create(brand);
  brand = {
      name:"Fiat",
      imagePath: "assets/images-trilis/voitures/Fiat-Logo.jpg",
      common : true
  };
this.create(brand);
  brand = {
      name:"Opel",
      imagePath: "assets/images-trilis/voitures/Logo-Opel.jpg",
      common : true
  };
this.create(brand);
  brand = {
      name:"Mercedes",
      imagePath: "assets/images-trilis/voitures/mercedes-logo.png",
      common : true
  };
this.create(brand);
  brand = {
      name:"Nissan",
      imagePath: "assets/images-trilis/voitures/Logo-Nissan.png",
      common : true
  };
this.create(brand);
  brand = {
      name:"Toyota",
      imagePath: "assets/images-trilis/voitures/Logo-Toyota.jpg",
      common : true
  };
this.create(brand);
  brand = {
      name:"Volkswagen",
      imagePath: "assets/images-trilis/voitures/logo-VW.png",
      common : true
  };
this.create(brand);
  brand = {
      name:"Audi",
      imagePath: "assets/images-trilis/voitures/logo-audi.png",
      common : true
  };
this.create(brand);
  brand = {
      name:"Hyundai",
      imagePath: "assets/images-trilis/voitures/hyundai-logo.jpeg",
      common : true
  };
this.create(brand);
  brand = {
      name:"Kia",
      imagePath: "assets/images-trilis/voitures/logo-kia.jpg",
      common : true
  };
this.create(brand);
  brand = {
      name:"Honda",
      imagePath: "assets/images-trilis/voitures/honda-logo.jpg",
      common : true
  };
this.create(brand);
  brand = {
      name:"Abarth",
      imagePath: "assets/images-trilis/voitures/Abarth-logo.jpg",
      common : false
  };
this.create(brand);
  brand = {
      name:"Alfa-Romeo",
      imagePath: "assets/images-trilis/voitures/Alfa-Romeo.png",
      common : false
  };
this.create(brand);
  brand = {
      name:"Aleko",
      imagePath: "assets/images-trilis/voitures/logo-aleko.png",
      common : false
  };
this.create(brand);
  brand = {
      name:"Alpina",
      imagePath: "assets/images-trilis/voitures/Alpina-logo.png",
      common : false
  };
this.create(brand);
  brand = {
      name:"Alpine-Renault",
      imagePath: "assets/images-trilis/voitures/logo-alpine -renault.jpg",
      common:false
  };
this.create(brand);
  brand = {
      name:"Aro",
      imagePath: "assets/images-trilis/voitures/logo-aro.jpg",
      common : false
  };
this.create(brand);
  brand = {
      name:"Asia",
      imagePath: "assets/images-trilis/voitures/asia-logo.png",
      common : false
  };
this.create(brand);
  brand = {
      name:"Austin",
      imagePath: "assets/images-trilis/voitures/Austin-logo.jpg",
      common : false
  };
this.create(brand);
  brand = {
      name:"Aston-Martin",
      imagePath: "assets/images-trilis/voitures/Aston-Martin-logo.jpg",
      common : false
  };
this.create(brand);
  brand = {
      name:"Autobianchi",
      imagePath: "assets/images-trilis/voitures/logo-autobianchi.jpg",
      common : false
  };
this.create(brand);
  brand = {
      name:"Auverland",
      imagePath: "assets/images-trilis/voitures/logo-auverland.png",
      common : false
  };
this.create(brand);
  brand = {
      name:"Bedford",
      imagePath: "assets/images-trilis/voitures/bedford-logo.jpg",
      common : false
  };
this.create(brand);
  brand = {
      name:"Buick",
      imagePath: "assets/images-trilis/voitures/Buick-logo.jpg",
      common : false
  };
this.create(brand);
  brand = {
      name:"Bentley",
      imagePath: "assets/images-trilis/voitures/bentley-logo.jpg",
      common : false
  };
this.create(brand);
  brand = {
      name:"Bertone",
      imagePath: "assets/images-trilis/voitures/Bertone-logo.jpg",
      common : false
  };
this.create(brand);
  brand = {
      name:"Cadillac",
      imagePath: "assets/images-trilis/voitures/logo-cadillac.jpg",
      common : false
  };
this.create(brand);
  brand = {
      name:"Caterham",
      imagePath: "assets/images-trilis/voitures/logo-Caterham.jpg",
      common : false
  };
this.create(brand);
  brand = {
      name:"Chevrolet",
      imagePath: "assets/images-trilis/voitures/logo-chevrolet.jpg",
      common : false
  };
this.create(brand);
  brand = {
      name:"CHANGAN",
      imagePath: "assets/images-trilis/voitures/Changan-logo-2010.jpg",
      common : false
  };
this.create(brand);
  brand = {
      name:"CHANGENG",
      imagePath: "assets/images-trilis/voitures/Changfeng-logo.jpg",
      common : false
  };
this.create(brand);
  brand = {
      name:"Cupra",
      imagePath: "assets/images-trilis/voitures/logo-cupra.png",
      common : false
  };
this.create(brand);
  brand = {
      name:"Dacia",
      imagePath: "assets/images-trilis/voitures/dacia-logo.png",
      common : false
  };
this.create(brand);
  brand = {
      name:"Daewoo",
      imagePath: "assets/images-trilis/voitures/Daewoo-logo.png",
      common : false
  };
this.create(brand);
  brand = {
      name:"DAF",
      imagePath: "assets/images-trilis/voitures/logo-DAF.png",
      common : false
  };
this.create(brand);
  brand = {
      name:"Daihatsu",
      imagePath: "assets/images-trilis/voitures/daihatsu-logo.png",
      common : false
  };
this.create(brand);
  brand = {
      name:"Daimler",
      imagePath: "assets/images-trilis/voitures/daimler-logo.jpg",
      common : false
  };
this.create(brand);
  brand = {
      name:"Datsun",
      imagePath: "assets/images-trilis/voitures/logo-datsun.png",
      common : false
  };
this.create(brand);
  brand = {
      name:"Dodge",
      imagePath: "assets/images-trilis/voitures/Dodge-logo.jpg",
      common : false
  };
this.create(brand);
  brand = {
      name:"DONFENG",
      imagePath: "assets/images-trilis/voitures/Dongfeng-logo.jpg",
      common : false
  };
  this.create(brand);
  brand = {
      name:"DS",
      imagePath: "assets/images-trilis/voitures/DS-Logo.jpg",
      common : false
  };
this.create(brand);
  brand = {
      name:"Ebro",
      imagePath: "assets/images-trilis/voitures/logo-EBRO.png",
      common:false
  };
this.create(brand);
  brand = {
      name:"Exeed",
      imagePath: "assets/images-trilis/voitures/exeed-logo.png",
      common:false
  };
this.create(brand);
brand = {
      name:"Englon",
      imagePath: "assets/images-trilis/voitures/Englon-logo.jpg",
      common:false
  };
this.create(brand);
  brand = {
      name:"Ferrari",
      imagePath: "assets/images-trilis/voitures/Ferrari-logo.jpg",
      common:false
  };
this.create(brand);
  brand = {
      name:"Fisker",
      imagePath: "assets/images-trilis/voitures/logo-Fisker.png",
      common:false
  };
this.create(brand);
  brand = {
      name:"Fso",
      imagePath: "assets/images-trilis/voitures/logo-fso.png",
      common:false
  };	
this.create(brand);
  brand = {
      name:"GMC",
      imagePath: "assets/images-trilis/voitures/Le-logo-GMC.png",
      common:false
  };	
this.create(brand);
  brand = {
      name:"Geely",
      imagePath: "assets/images-trilis/voitures/Geely-logo.png",
      common:false
  };
this.create(brand);
  brand = {
      name:"Gembella",
      imagePath: "assets/images-trilis/voitures/Gemballa-logo.png",
      common:false
  };
this.create(brand);
  brand = {
      name:"Genesis",
      imagePath: "assets/images-trilis/voitures/Logo-Genesis.png",
      common:false
  };
this.create(brand);
  brand = {
      name:"Gumpert",
      imagePath: "assets/images-trilis/voitures/Gumpert-logo.png",
      common:false
  };
this.create(brand);
  brand = {
      name:"Great-Wall",
      imagePath: "assets/images-trilis/voitures/Great-Wall-logo-2007.jpg",
      common:false
  };
this.create(brand);
  brand = {
      name:"Haval",
      imagePath: "assets/images-trilis/voitures/Haval-logo.jpg",
      common : false
  };
this.create(brand);
brand = {
      name:"Harley-Davidson",
      imagePath: "assets/images-trilis/voitures/Logo-Harley-Davidson.png",
      common:false
  };
this.create(brand);
  brand = {
  name:"HONGYAN",
      imagePath: "assets/images-trilis/voitures/hongyan-logo.png",
      common:false
  };
this.create(brand);
  brand = {
      name:"Hino",
      imagePath: "assets/images-trilis/voitures/Hino-logo.jpg",
      common:false
  };
this.create(brand);
brand = {
      name:"Hummer",
      imagePath: "assets/images-trilis/voitures/Logo-Hummer.jpg",
      common:false
  };
this.create(brand);    
  brand = {
      name:"Iveco",
      imagePath: "assets/images-trilis/voitures/IVECO-logo.jpg",
      common:false
  };
this.create(brand);
  brand = {
      name:"Infiniti",
      imagePath: "assets/images-trilis/voitures/logo-Infiniti.png",
      common:false
  };
this.create(brand);
  brand = {
      name:"Ionic",
      imagePath: "assets/images-trilis/voitures/Ioniq-logo.png",
      common:false
  };
this.create(brand);
    brand = {
      name:"Isuzu",
      imagePath: "assets/images-trilis/voitures/logo-Isuzu.png",
      common:false
  };
this.create(brand);
  brand = {
      name:"Jac",
      imagePath: "assets/images-trilis/voitures/Jac-logo.png",
      common:false
  };
this.create(brand);
  brand = {
      name:"Jaguar",
      imagePath: "assets/images-trilis/voitures/Logo-Jaguar.png",
      common:false
  };
this.create(brand);
  brand = {
      name:"Jeep",
      imagePath: "assets/images-trilis/voitures/logo-Jeep.png",
      common:false
  };
this.create(brand);
  brand = {
      name:"Kia",
      imagePath: "assets/images-trilis/voitures/kia_logo.png",
      common:false
  };
this.create(brand);
  brand = {
      name:"Ktm",
      imagePath: "assets/images-trilis/voitures/Logo-Ktm.jpg",
      common:false
  };
this.create(brand);
  brand = {
      name:"Kawasaki",
      imagePath: "assets/images-trilis/voitures/Logo-Kawasaki.png",
      common:false
  };
this.create(brand);
  brand = {
      name:"Lada",
      imagePath: "assets/images-trilis/voitures/Logo-Lada.jpg",
      common:false
  };
this.create(brand);
  brand = {
      name:"Lamborghini",
      imagePath: "assets/images-trilis/voitures/Couleur-Lamborghini-logo.jpg",
      common:false
  };
this.create(brand);
  brand = {
      name:"Lancia",
      imagePath: "assets/images-trilis/voitures/Logo-Lancia.png",
      common:false
  };
this.create(brand);
  brand = {
      name:"Land-Rover",
      imagePath: "assets/images-trilis/voitures/logo-Land-Rover.png",
      common:false
  };
this.create(brand);
  brand = {
      name:"Lexus",
      imagePath: "assets/images-trilis/voitures/Logo-Lexus.png",
      common:false
  };
this.create(brand);
  brand = {
      name:"Lotus",
      imagePath: "assets/images-trilis/voitures/Logo-Lotus.png",
      common:false
  };
this.create(brand);
  brand = {
      name:"Lincoln",
      imagePath: "assets/images-trilis/voitures/Logo-Lincoln.jpg",
      common:false
  };
this.create(brand);
  brand = {
      name:"Ligier",
      imagePath: "assets/images-trilis/voitures/Ligier-logo.jpg",
      common:false
  };
this.create(brand);
  brand = {
      name:"Lister",
      imagePath: "assets/images-trilis/voitures/Lister-Cars-logo.jpg",
      common:false
  };
this.create(brand);
  brand = {
      name:"MAN",
      imagePath: "assets/images-trilis/voitures/MAN-logo.jpg",
      common:false
  };
this.create(brand);
brand = {
      name:"Maserati",
      imagePath: "assets/images-trilis/voitures/Maserati-logo.jpg",
      common:false
  };
this.create(brand);
  brand = {
      name:"MG",
      imagePath: "assets/images-trilis/voitures/MG-logo.png",
      common:false
  };
this.create(brand);
  brand = {
      name:"Mini",
      imagePath: "assets/images-trilis/voitures/logo-Mini.jpg",
      common:false
  };
this.create(brand);
  brand = {
      name:"Misubishi",
      imagePath: "assets/images-trilis/voitures/Logo-Mitsubishi.jpg",
      common:false
  };
this.create(brand);
  brand = {
      name:"Mazda",
      imagePath: "assets/images-trilis/voitures/logo-mazda.jpg",
      common:false
  };
this.create(brand);
  brand = {
      name:"McLaren",
      imagePath: "assets/images-trilis/voitures/Logo-McLaren.png",
      common:false
  };
this.create(brand);
  brand = {
      name:"Mustang",
      imagePath: "assets/images-trilis/voitures/Ford-Mustang-logo.jpg",
      common:false
  };
this.create(brand);
brand = {
      name:"Nio",
      imagePath: "assets/images-trilis/voitures/nio_logo.png",
      common:false
  };
this.create(brand);
  brand = {
      name:"Noble",
      imagePath: "assets/images-trilis/voitures/Noble-logo.png",
      common:false
  };
this.create(brand);
brand = {
      name:"Pontiac",
      imagePath: "assets/images-trilis/voitures/Logo-Pontiac.png",
      common:false
  };
this.create(brand);
  brand = {
      name:"Porsche",
      imagePath: "assets/images-trilis/voitures/porsche-logo.png",
      common:false
  };
this.create(brand);
  brand = {
      name:"OSCA",
      imagePath: "assets/images-trilis/voitures/OSCA-logo.png",
      common:false
  };
this.create(brand);
  brand = {
      name:"Oldsmobile",
      imagePath: "assets/images-trilis/voitures/Oldsmobile-logo.jpg",
      common:false
  };
this.create(brand);
  brand = {
      name:"Subaru",
      imagePath: "assets/images-trilis/voitures/Subaru-logo-2003.jpg",
      common:false
  };
this.create(brand);
  brand = {
      name:"Saab",
      imagePath: "assets/images-trilis/voitures/Saab-logo-2013.jpg",
      common:false
  };
this.create(brand);
  brand = {
      name:"Suzuki",
      imagePath: "assets/images-trilis/voitures/Suzuki-logo.jpg",
      common:false
  };
this.create(brand);
  brand = {
      name:"Skoda",
      imagePath: "assets/images-trilis/voitures/Skoda-logo.jpg",
      common:false
  };
this.create(brand);
  brand = {
      name:"Smart",
      imagePath: "assets/images-trilis/voitures/Smart-logo.jpg",
      common:false
  };
  this.create(brand);
  brand = {
      name:"Seat",
      imagePath: "assets/images-trilis/voitures/SEAT-logo.jpg",
      common:false
  };
this.create(brand);
  brand = {
      name:"Scania",
      imagePath: "assets/images-trilis/voitures/Scania-logo.jpg",
      common:false
  };
this.create(brand);
  brand = {
      name:"SsangYong",
      imagePath: "assets/images-trilis/voitures/SsangYong-logo.jpg",
      common:false
  };
this.create(brand);
  brand = {
      name:"Sterling",
      imagePath: "assets/images-trilis/voitures/Sterling-logo.jpg",
      common:false
  };
this.create(brand);
  brand = {
      name:"SAIC",
      imagePath: "assets/images-trilis/voitures/SAIC-Motor-logo.jpg",
      common:false
  };
this.create(brand);
  brand = {
      name:"Rolls-Royce",
      imagePath: "assets/images-trilis/voitures/Rolls-Royce-logo.jpg",
      common:false
  };
this.create(brand);
  brand = {
      name:"Qoros",
      imagePath: "assets/images-trilis/voitures/Qoros-logo-2007.jpg",
      common:false
  };
this.create(brand);
  brand = {
      name:"Rover",
      imagePath: "assets/images-trilis/voitures/Rover-logo-2003.jpg",
      common:false
  };
this.create(brand);
  brand = {
      name:"Tesla",
      imagePath: "assets/images-trilis/voitures/tesla-logo.png",
      common:false
  };
this.create(brand);
  brand = {
      name:"Tata",
      imagePath: "assets/images-trilis/voitures/Tata-logo-2000.jpg",
      common:false
  };
this.create(brand);
  brand = {
      name:"Toyota-Crown",
      imagePath: "assets/images-trilis/voitures/Toyota-Crown-logo.png",
      common:false
  };
this.create(brand);
  brand = {
      name:"Volvo",
      imagePath: "assets/images-trilis/voitures/Volvo-logo.jpg",
      common:false
  };	
this.create(brand);
  brand = {
      name:"Venturi",
      imagePath: "assets/images-trilis/voitures/logo-venturi-large.jpg",
      common:false
  };	
  this.create(brand);

  brand = {
      name:"Xpeng",
      imagePath: "assets/images-trilis/voitures/xpeng-logo.png",
      common:false
  };
this.create(brand);

  brand = {
      name:"Zastava",
      imagePath: "assets/images-trilis/voitures/Zastava-logo.jpg",
      common:false
  }
this.create(brand);

}

 }


/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository} from 'typeorm';
import { PackageCreateDto } from '../dto/package-create.dto';
import { PackageDto } from '../dto/package.dto';
import { Package } from '../entity/package.entity';
import { CompanyService } from './company.service';
import { PackageTypeService } from './packageType.service';
import { ProductService } from './product.service';
import { ProductClassService } from './productClass.service';
  
@Injectable()
export class PackageService {
 
  constructor(
    @InjectRepository(Package)
    private repo:Repository<PackageDto>,
    private packageTypeService:PackageTypeService,
    private productClassService:ProductClassService,
    private productService:ProductService,
    private companyService:CompanyService,
  ) {}

 
  findAll(): Promise<PackageDto[]> {
    return this.repo.find();
  }

  findByProduct(productId: number): Promise<PackageDto[]> {
    return this.repo.find({
      where: [
          { productId},
      ],
    })
  }

  findByProductAndName(productId: number, name:string): Promise<PackageDto> {
    const pk =  this.repo.findOne({
      select: ['id'],
      where: {
        productId,
        name,
      },
    });
    return pk;
  }

  create(item: PackageCreateDto): Promise<PackageDto> {
    return this.repo.save(item);
  }
  clearPackages(){
    getConnection()
  .createQueryBuilder()
  .delete()
  .from(Package)
  .execute()
}

seed(){
  this.clearPackages();
  this.packageTypeService.findByName("Tiers").then
  (pt=>
    {
    //**** */
     //MAIF
     //**** */
     this.companyService.findByShortName("MAIF")
     .then( c=>
     {
      this.productClassService.findByCompanyAndName(c.id,"Véhicule et mobilité")
        .then (pc =>
        {
          this.productService.findByProductClassAndName(pc.id,"Auto")
          .then (p =>
          {
            let packageCreateDto = {
              "packageTypeId": pt.id, 
              "productId":p.id,
              "name": "INITIALE",
              "summary":"Formule tiers de base",
              "description":"",
              "startDate":new Date(2022,1,1),
              "endDate":new Date(2100,12,31),
              "imagePath":"assets\/images-trilis\/types\/voituremoderne.png"
            };
            this.create(packageCreateDto);
           packageCreateDto = {
              "packageTypeId": pt.id, 
              "productId":p.id,
              "name": "ESSENTIELLE",
              "summary":"Tiers enrichie",
              "description":"Avec incendie et bris de glace",
              "startDate":new Date(2022,1,1),
              "endDate":new Date(2100,12,31),
              "imagePath":"assets\/images-trilis\/types\/voituremoderne.png"
            };
            this.create(packageCreateDto);
            packageCreateDto = {
              "packageTypeId": pt.id, 
              "productId":p.id,
              "name": "DIFFERENCE",
              "summary":"Tous risques",
              "description":"Tous risques sans garantie renforcée du véhicule",
              "startDate":new Date(2022,1,1),
              "endDate":new Date(2100,12,31),
              "imagePath":"assets\/images-trilis\/types\/voituremoderne.png"
            };
            this.create(packageCreateDto);
            packageCreateDto = {
              "packageTypeId": pt.id, 
              "productId":p.id,
              "name": "PLENITUDE",
              "summary":"Tous risques intégrale",
              "description":"Tous risques avec garantie renforcée du véhicule",
              "startDate":new Date(2022,1,1),
              "endDate":new Date(2100,12,31),
              "imagePath":"assets\/images-trilis\/types\/voituremoderne.png"
            };
            this.create(packageCreateDto);
          })
        })
      })
     //**** */
     //GROUPAMA
     //**** */
     this.companyService.findByShortName("GROUPAMA")
     .then( c=>
     {
      this.productClassService.findByCompanyAndName(c.id,"Auto")
        .then (pc =>
        {
          this.productService.findByProductClassAndName(pc.id,"Auto")
          .then (p =>
          {
            let packageCreateDto = {
              "packageTypeId": pt.id, 
              "productId":p.id,
              "name": "FORMULE MINI",
              "summary":"Tiers de base",
              "description":"Budget léger, couvre l'indispensable (responsabilité civile, assurance corporelle du conducteur, assistance...)",
              "startDate":new Date(2022,1,1),
              "endDate":new Date(2100,12,31),
              "imagePath":"assets\/images-trilis\/types\/voituremoderne.png"
            };
            this.create(packageCreateDto);
            packageCreateDto = {
              "packageTypeId": pt.id, 
              "productId":p.id,
              "name": "FORMULE ECO",
              "summary":"Tiers étendue",
              "description":"Protège en plus votre voiture des dommages (vol, incendie...).",
              "startDate":new Date(2022,1,1),
              "endDate":new Date(2100,12,31),
              "imagePath":"assets\/images-trilis\/types\/voituremoderne.png"
            };
            this.create(packageCreateDto);
            packageCreateDto = {
              "packageTypeId": pt.id, 
              "productId":p.id,
              "name": "FORMULE CONFORT",
              "summary":"Tous risques confort",
              "description":"Couvre la quasi totalité des accidents (responsables ou non avec tiers identifié ou non, vandalisme...).",
              "startDate":new Date(2022,1,1),
              "endDate":new Date(2100,12,31),
              "imagePath":"assets\/images-trilis\/types\/voituremoderne.png"
            };
            this.create(packageCreateDto);
            packageCreateDto = {
              "packageTypeId": pt.id, 
              "productId":p.id,
              "name": "FORMULE MOBILITE",
              "summary":"Tous risques et pack assistance",
              "description":"Apporte en plus un pack complet de garanties en cas de panne (véhicule de remplacement, assistance 0 km..).",
              "startDate":new Date(2022,1,1),
              "endDate":new Date(2100,12,31),
              "imagePath":"assets\/images-trilis\/types\/voituremoderne.png"
            };
            this.create(packageCreateDto);

          })
        })
      })
    //**** */
     //ALLIANZ
     //**** */
     this.companyService.findByShortName("ALLIANZ")
     .then( c=>
     {
      this.productClassService.findByCompanyAndName(c.id,"Assurance Auto classique")
        .then (pc =>
        {
          this.productService.findByProductClassAndName(pc.id,"AZ Assurance Auto Sécurité")
          .then (p =>
          {
            let packageCreateDto = {
              "packageTypeId": pt.id, 
              "productId":p.id,
              "name": "TIERS SIMPLE",
              "summary":"Formule tiers simple",
              "description":"Garantie minimale",
              "startDate":new Date(2022,1,1),
              "endDate":new Date(2100,12,31),
              "imagePath":"assets\/images-trilis\/types\/voituremoderne.png"
            };
            this.create(packageCreateDto);
            packageCreateDto = {
              "packageTypeId": pt.id, 
              "productId":p.id,
              "name": "TIERS COMPLET",
              "summary":"Formule tiers complet",
              "description":"Tiers simple + Recours anticipé + Incendie + Vol + Bris de glaces + Vol accessoire sans déplacement",
              "startDate":new Date(2022,1,1),
              "endDate":new Date(2100,12,31),
              "imagePath":"assets\/images-trilis\/types\/voituremoderne.png"
            };
            this.create(packageCreateDto);
            packageCreateDto = {
              "packageTypeId": pt.id, 
              "productId":p.id,
              "name": "TOUS RISQUES",
              "summary":"Formule tous risques",
              "description":"Tiers complet + Dommages tous accidents",
              "startDate":new Date(2022,1,1),
              "endDate":new Date(2100,12,31),
              "imagePath":"assets\/images-trilis\/types\/voituremoderne.png"
            };
            this.create(packageCreateDto);
          })
        })
      })
    })
 }
}


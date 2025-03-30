/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, Repository} from 'typeorm';
import { PackageVersionCreateDto } from '../dto/packageVersion-create.dto';
import { PackageVersionDto } from '../dto/packageVersion.dto';
import { PackageVersion } from '../entity/packageVersion.entity';
import { CompanyService } from './company.service';
import { CurrencyService } from './currency.service';
import { PackageService } from './package.service';
import { ProductService } from './product.service';
import { ProductClassService } from './productClass.service';
  
@Injectable()
export class PackageVersionService {
 
  constructor(
    @InjectRepository(PackageVersion)
    private packageVersionRepo:Repository<PackageVersion>,
    private packageService:PackageService,
    private productClassService:ProductClassService,
    private productService:ProductService,
    private companyService:CompanyService,
    private currencyService:CurrencyService
  ) {}

 
  findAll(): Promise<PackageVersionDto[]> {
    return this.packageVersionRepo.find();
  }
  findByPackage(packageId: number): Promise<PackageVersionDto> {
    return this.packageVersionRepo.findOne({
      where: [
          { packageId},
      ],
    })
  }

  create(item: PackageVersionCreateDto): Promise<PackageVersionDto> {
    return this.packageVersionRepo.save(item);
  }
  clearPackageVersions(){
    getConnection()
  .createQueryBuilder()
  .delete()
  .from(PackageVersion)
  .execute()
}
seed(){
  this.clearPackageVersions();
  this.currencyService.findByName("EURO").then
  (cy=>
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
            this.packageService.findByProductAndName(p.id,"INITIALE")
            .then (pk =>
            {
              const pkVersionCreateDto = {
              "currencyId": cy.id, 
              "packageId":pk.productId,
              "startDate":new Date(2022,1,1),
              "endDate":new Date(2100,12,31),
              "preTaxValueYear":0,
              "preTaxValueMonth":0,
            };
            this.create(pkVersionCreateDto);
            })
          })
        })
     })
    })

 }
}

/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Company } from "src/reference/entity/company.entity";
import { BrandController } from "./controller/brand.controller";
import { CarBodyController } from "./controller/carBody.controller";
import { CarModelController } from "./controller/carModel.controller";
import { CarMotorizationController } from "./controller/carMotorization.controller";
import { CeilingController } from "./controller/ceiling.controller";
import { CompanyController } from "./controller/company.controller";
import { CoverageController } from "./controller/coverage.controller";
import { CoverageClassController } from "./controller/coverageClass.controller";
import { CurrencyController } from "./controller/currency.controller";
import { DeductibleController } from "./controller/deductible.controller";
import { DoorsNumberController } from "./controller/doorNumber.controller";
import { EnergyController } from "./controller/energy.controller";
import { FiscalPowerController } from "./controller/fiscalPower.controller";
import { InsuranceStatusController } from "./controller/insuranceStatus.controller";
import { PackageController } from "./controller/package.controller";
import { PackageTypeController } from "./controller/packageType.controller";
import { ProductController } from "./controller/product.controller";
import { ProductClassController } from "./controller/productClass.controller";
import { ProductTypeController } from "./controller/productType.controller";
import { ReferencesController } from "./controller/references.controller";
import { RisqController } from "./controller/risq.controller";
import { TransmissionController } from "./controller/transmission.controller";
import { RelationshipController } from "./controller/relationship.controller";

import { Brand } from "./entity/brand.entity";
import { CarBody } from "./entity/carBody.entity";
import { CarModel } from "./entity/carModel.entity";
import { CarMotorization } from "./entity/carMotorization.entity";
import { Ceiling } from "./entity/ceiling.entity";
import { CeilingVersion } from "./entity/ceilingVersion.entity";
import { Coverage } from "./entity/coverage.entity";
import { CoverageClass } from "./entity/coverageClass.entity";
import { CoverageVersion} from "./entity/coverageVersion.entity";
import { CoveragePackage } from "./entity/coveragePackage.entity";
import { Currency } from "./entity/currency.entity";
import { Deductible } from "./entity/deductible.entity";
import { DoorsNumber } from "./entity/doorsNumber.entity";
import { Energy } from "./entity/energy.entity";
import { FiscalPower } from "./entity/fiscalPower.entity";
import { InsuranceStatus } from "./entity/insuranceStatus.entity";
import { Package } from "./entity/package.entity";
import { PackageVersion } from "./entity/packageVersion.entity";
import { PackageType } from "./entity/packageType.entity";
import { Product } from "./entity/product.entity";
import { ProductClass } from "./entity/productClass.entity";
import { ProductType } from "./entity/productType.entity";
import { Risq } from "./entity/risq.entity";
import { Transmission } from "./entity/transmission.entity";
 import { BrandService } from './service/brand.service';
import { CarBodyService } from "./service/carBody.service";
import { CarModelService } from "./service/carModel.service";
import { CarMotorizationService } from "./service/carMotorization.service";
import { CeilingService } from "./service/ceiling.service";
import { CompanyService } from "./service/company.service";
import { CoverageService } from "./service/coverage.service";
import { CoverageClassService } from "./service/coverageClass.service";
import { CoverageVersionService } from "./service/coverageVersion.service";
import { CoveragePackageService } from "./service/coveragePackage.service";
import { CurrencyService } from "./service/currency.service";
import { DeductibleService } from "./service/deductible.service";
import { DoorsNumberService } from "./service/doorsNumber.service";
import { EnergyService } from "./service/energy.service";
import { FiscalPowerService } from "./service/fiscalPower.service";
import { InsuranceStatusService } from "./service/insuranceStatus.service";
import { PackageService } from "./service/package.service";
import { PackageVersionService } from "./service/packageVersion.service";
import { PackageTypeService } from "./service/packageType.service";
import { ProductService } from "./service/product.service";
import { ProductClassService } from "./service/productClass.service";
import { ProductTypeService } from "./service/productType.service";
import { RisqService } from "./service/risq.service";
import { TransmissionService } from "./service/transmission.service";
import { Relationship } from "./entity/relationship.entity";
import { RelationshipService } from "./service/relationship.service";
import { Occupation } from "./entity/occupation.entity";
import { SocioProfCateg } from "./entity/socioProgCateg.entity";
import { Title } from "./entity/title.entity";
import { Country } from "./entity/country.entity";
import { CountryController } from "./controller/country.controller";
import { CountryService } from "./service/country.service";
import { MaritalStatus } from "./entity/maritalStatus.entity";
import { MaritalStatusController } from "./controller/maritalStatus.controller";
import { MaritalStatusService } from "./service/maritalStatus.service";
import { CSP } from "./entity/csp.entity";
import { CSPController } from "./controller/csp.controller";
import { CSPService } from "./service/csp.service";
import { IdentityDocType } from "./entity/identityDocType.entity";
import { IdentityDocTypeService } from "./service/identityDocType.service";
import { IdentityDocTypeController } from "./controller/identityDocType.controller";
import { DriverCategoryService } from "./service/drivercategory.service";
import { DriverCategoryController } from "./controller/driverCategory.controller";
import { DriverCategory } from "./entity/driver-category.entity";
import { TitleService } from "./service/title.service";
import { TitleController } from "./controller/title.controller";
import { CarFinishing } from "./entity/carFinishing.entity";
import { CarFinishingController } from "./controller/carFinishing.controller";
import { CarFinishingService } from "./service/carFinishing.service";
import { SharedModule } from "src/shared/shared.module";

@Module({
  imports: [TypeOrmModule.forFeature([
            Brand, 
            CarFinishing,
            CarModel,
            CarMotorization,
            CarBody,
            DoorsNumber,
            Energy,
            FiscalPower,
            Transmission,
            Ceiling, 
            CeilingVersion,
            Company,
            Country,
            CoverageClass,
            Coverage, 
            CoverageVersion,
            CoveragePackage,
            CSP,
            Currency,
            Deductible,
            DriverCategory,
            IdentityDocType,
            InsuranceStatus,
            MaritalStatus,
            Occupation,
            Package,
            PackageVersion,
            PackageType,
            Product,
            ProductClass,
            ProductType,
            SocioProfCateg,
            Relationship,
            Risq,
            Title
          ])
          ,SharedModule
        ], // <-- here
  controllers: [BrandController
                ,CarBodyController
                ,CarFinishingController
                ,CarModelController
                ,CarMotorizationController
                ,DoorsNumberController
                ,EnergyController
                ,FiscalPowerController
                ,CeilingController,CompanyController
                ,CountryController
                ,CoverageClassController
                ,CoverageController
                ,CSPController
                ,CurrencyController
                ,DeductibleController
                ,DriverCategoryController
                ,IdentityDocTypeController
                ,InsuranceStatusController
                ,MaritalStatusController
                ,PackageController,PackageTypeController
                ,ProductController,ProductClassController,ProductTypeController,RisqController
                ,ReferencesController
                ,RelationshipController
                ,TitleController
                ,TransmissionController
              ],
  providers: [BrandService
    ,CarFinishingService
    ,CarModelService
    ,CarMotorizationService
    ,CarBodyService
              ,CeilingService
              ,CompanyService
              ,CountryService
              , CoverageClassService
              ,CoverageService
              ,CoveragePackageService
              ,CoverageVersionService
              ,CSPService
              ,CurrencyService
               ,DeductibleService
               ,DoorsNumberService
               ,DriverCategoryService
               , EnergyService
               , FiscalPowerService
               ,IdentityDocTypeService
               ,InsuranceStatusService
               ,MaritalStatusService
               ,PackageService,PackageVersionService,PackageTypeService
               ,ProductService,ProductClassService,ProductTypeService
               ,RelationshipService, RisqService
              ,TitleService
              , TransmissionService
            ]
              // ,Logger]
})
export class ReferenceModule {}

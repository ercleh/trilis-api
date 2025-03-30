import {
    Controller,
    Get,
    HttpException,
    HttpStatus,
    Logger,
    Post,
    Res,
    UseFilters
 } from '@nestjs/common';
import { Console } from 'console';
import { HttpExceptionFilter } from 'src/Exception/http-exception.filter';
import { Connection, getConnection, QueryRunner } from 'typeorm';
import { BrandService } from '../service/brand.service';
import { CarBodyService } from '../service/carBody.service';
import { CarModelService } from '../service/carModel.service';
import { CarMotorizationService } from '../service/carMotorization.service';
import { CeilingService } from '../service/ceiling.service';
import { CompanyService } from '../service/company.service';
import { CoverageClassService } from '../service/coverageClass.service';
import { CoverageService } from '../service/coverage.service';
import { CoveragePackageService } from '../service/coveragePackage.service';
import { CurrencyService } from '../service/currency.service';
import { DeductibleService } from '../service/deductible.service';
import { EnergyService } from '../service/energy.service';
import { PackageService } from '../service/package.service';
import { PackageVersionService } from '../service/packageVersion.service';
import { PackageTypeService } from '../service/packageType.service';
import { ProductService } from '../service/product.service';
import { ProductClassService } from '../service/productClass.service';
import { ProductTypeService } from '../service/productType.service';
import { RisqService } from '../service/risq.service';
import { TransmissionService } from '../service/transmission.service';
import { DoorsNumberService } from '../service/doorsNumber.service';
import { FiscalPowerService } from '../service/fiscalPower.service';
import { BrandController } from './brand.controller';
import { CarBodyController } from './carBody.controller';
import { CarModelController } from './carModel.controller';
import { CarMotorizationController } from './carMotorization.controller';
import { CeilingController } from './ceiling.controller';
import { CompanyController } from './company.controller';
import { CoverageController } from './coverage.controller';
import { CoverageClassController } from './coverageClass.controller';
import { CurrencyController } from './currency.controller';
import { DeductibleController } from './deductible.controller';
import { EnergyController } from './energy.controller';
import { PackageController } from './package.controller';
import { PackageTypeController } from './packageType.controller';
import { ProductController } from './product.controller';
import { ProductClassController } from './productClass.controller';
import { ProductTypeController } from './productType.controller';
import { RisqController } from './risq.controller';
import { TransmissionController } from './transmission.controller';
import { FiscalPowerController } from './fiscalPower.controller';
import { DoorsNumberController } from './doorNumber.controller';
import { RelationshipService } from '../service/relationship.service';
import { RelationshipController } from './relationship.controller';
import { TitleService } from '../service/title.service';
import { TitleController } from './title.controller';

  @Controller('references')
  export class ReferencesController {
    constructor(
         //private readonly logger: Logger,
         private readonly brandService:BrandService
         ,private readonly carModelService: CarModelService
         ,private readonly carBodyService: CarBodyService
         ,private readonly carMotorizationService: CarMotorizationService
         ,private readonly energyService: EnergyService
         ,private readonly transmissionService: TransmissionService
         ,private readonly ceilingService :CeilingService
         ,private readonly companyService:CompanyService
         ,private readonly coverageClassService:CoverageClassService
         ,private readonly coverageService:CoverageService
         ,private readonly coveragePackageService:CoveragePackageService
         ,private readonly currencyService:CurrencyService
         ,private readonly deductibleService:DeductibleService
         ,private readonly packageService:PackageService
         ,private readonly packageVersionService : PackageVersionService
         ,private readonly packageTypeService:PackageTypeService
         ,private readonly productService:ProductService
         ,private readonly productClassService:ProductClassService
         ,private readonly productTypeService:ProductTypeService
         ,private readonly risqService: RisqService
         ,private readonly doorsNumberService:DoorsNumberService
         ,private readonly fiscalPowerService:FiscalPowerService
         ,private readonly relationshipService:RelationshipService
         ,private readonly titleService:TitleService
        ) {}
    
    logger: Logger = new Logger(ReferencesController.name)

    // @Get('recherche-marque')
    // async recherche_marque()
    // {
    //   CarModelController.recherche_marque(this.carModelService);
    // }

    @Post('seed-references')
    async seed_references(){

      try {
        BrandController.seed_brand(this.brandService);
        CarModelController.seedCarModels(this.carModelService,this.logger);
        CarBodyController.seed(this.carBodyService,this.logger);
        EnergyController.seedEnergies(this.logger,this.energyService);
        TransmissionController.seedTransmissions(this.logger,this.transmissionService);
        CarMotorizationController.seedCarMotorizations1(this.carMotorizationService,this.logger);
        RisqController.seed_risq(this.risqService);
        CurrencyController.seed_currency(this.currencyService);
        ProductTypeController.seed_productType(this.productTypeService);
        ProductClassController.seed(this.productClassService,this.logger);
        ProductController.seed(this.productService, this.logger);
        PackageTypeController.seed_packageType(this.packageTypeService);
        PackageController.seed(this.packageService, this.logger);
        CoverageController.seed(this.coverageService, this.coveragePackageService,this.logger);
        CeilingController.seed_ceiling(this.ceilingService,this.logger);
        DeductibleController.seed(this.deductibleService, this.logger);
        DoorsNumberController.seed(this.doorsNumberService,this.logger);
        FiscalPowerController.seed(this.fiscalPowerService, this.logger);
        RelationshipController.seed(this.relationshipService, this.logger);
        TitleController.seed(this.titleService, this.logger);
        }
        catch (error) {
          this.logger.error(error?.message ?? "");
          throw error;
      }
     }

     @Post('reinit-key-references-primaires')
     async reinit_key_references_primaires(){

      const connection: Connection = getConnection();
      const queryRunner: QueryRunner = connection.createQueryRunner();
      await queryRunner.connect(); // performs connection 

       try {
          //queryRunner.query(`ALTER TABLE \`brand\`AUTO_INCREMENT = 1`);   
          //queryRunner.query(`ALTER TABLE \`car_body\`AUTO_INCREMENT = 1`); 
          //queryRunner.query(`ALTER TABLE \`car_model\`AUTO_INCREMENT = 1`); 
          //queryRunner.query(`ALTER TABLE \`car_motorization\`AUTO_INCREMENT = 1`); 
        queryRunner.query(`ALTER TABLE \`doors-number\`AUTO_INCREMENT = 1`); 
        queryRunner.query(`ALTER TABLE \`fiscal-power\`AUTO_INCREMENT = 1`); 
        queryRunner.query(`ALTER TABLE \`relationship\`AUTO_INCREMENT = 1`); 
         }
         catch (error) {
           this.logger.error(error?.message ?? "");
           throw error;
       }
      }

     @Post('seed-references-primaires')
     async seed_references_primaires(){

      const connection: Connection = getConnection();
      const queryRunner: QueryRunner = connection.createQueryRunner();
      await queryRunner.connect(); // performs connection 

       try {
         //BrandController.seed_brand(this.brandService);
        //CarBodyController.seed(this.carBodyService,this.logger);
        // CarModelController.seedCarModels(this.carModelService, this.logger);
        //CarMotorizationController.seedCarMotorizations1(this.carMotorizationService,this.logger);
        DoorsNumberController.seed(this.doorsNumberService,this.logger);

        //  RisqController.seed_risq(this.risqService);
        //  CurrencyController.seed_currency(this.currencyService);
        //  ProductTypeController.seed_productType(this.productTypeService);
        //  CompanyController.seed_company(this.companyService);
        //  PackageTypeController.seed_packageType(this.packageTypeService);
         }
         catch (error) {
           this.logger.error(error?.message ?? "");
           throw error;
       }
      }
 
      @Post('seed-references-secondaires')
      async seed_references_secondaires(){
  
        try {

          const connection: Connection = getConnection();
          const queryRunner: QueryRunner = connection.createQueryRunner();
          await queryRunner.connect(); // performs connection 
    
          //EnergyController.seedEnergies(this.logger,this.energyService);
          //queryRunner.query(`ALTER TABLE \`transmission\`AUTO_INCREMENT = 1`); 
          //TransmissionController.seedTransmissions(this.logger,this.transmissionService);
          //queryRunner.query(`ALTER TABLE \`car_body\`AUTO_INCREMENT = 1`); 
          //CarBodyController.seedCarBodies(this.logger,this.carBodyService);
          //queryRunner.query(`ALTER TABLE \`car_motorization\`AUTO_INCREMENT = 1`); 
          //CarMotorizationController.seedCarMotorizations1(this.logger,this.carMotorizationService);
          //CarMotorizationController.seedCarMotorizations2(this.logger,this.carMotorizationService);
          //queryRunner.query(`ALTER TABLE \`company\`AUTO_INCREMENT = 1`); 
          //CompanyController.seed_company(this.companyService);
          // queryRunner.query(`ALTER TABLE \`product_class\`AUTO_INCREMENT = 1`);  
          // ProductClassController.seed(this.productClassService,this.logger);
          // queryRunner.query(`ALTER TABLE \`product\`AUTO_INCREMENT = 1`);  
          // ProductController.seed(this.productService,this.logger);
          // PackageTypeController.seed_packageType(this.packageTypeService);
          // queryRunner.query(`ALTER TABLE \`package\`AUTO_INCREMENT = 1`); 
          // PackageController.seed(this.packageService,this.logger);
          // PackageDetailController.seed_package_detail(this.packageDetailService);
          //queryRunner.query(`ALTER TABLE \`coverage_class\`AUTO_INCREMENT = 1`);     
          //CoverageClassController.seed(this.coverageClassService,this.logger);
          //queryRunner.query(`ALTER TABLE \`coverage\`AUTO_INCREMENT = 1`);  
          //queryRunner.query(`ALTER TABLE \`coverage_package\`AUTO_INCREMENT = 1`);        
          //CoverageController.seed(this.coverageService,this.coveragePackageService,this.logger);
 
          // CoverageController.seed_coverage(this.coverageService,this.coveragePackageService);
          // CoverageDetailController.seed_coverage_detail(this.coverageDetailService);
          // CeilingController.seed_ceiling(this.ceilingService);
          // DeductibleController.seed_deductible(this.deductibleService);
          //RelationshipController.seed(this.relationshipService, this.logger);

          }
          catch (error) {
            this.logger.error(error?.message ?? "");
            throw error;
        }
       }

     @Get('delete-references')
     async delete_references(){
      const connection: Connection = getConnection();
      const queryRunner: QueryRunner = connection.createQueryRunner();
      await queryRunner.connect(); // performs connection 
      try
      {  
        CarMotorizationController.clearCarMotorizations(this.carMotorizationService,this.logger);
        DoorsNumberController.clearDoorsNumber(this.doorsNumberService,this.logger);
        CarBodyController.clearCarBodies(this.carBodyService,this.logger) ;
        //CarModelController.clearCarModels(this.carModelService,this.logger);
        BrandController.clearBrands(this.brandService,this.logger);
        CoverageController.clearcoverages(this.coverageService,this.coveragePackageService,this.logger);
        CoverageClassController.clearCoverageClasses(this.coverageClassService,this.logger);
        PackageController.clearPackages(this.packageService,this.logger);
        PackageTypeController.delete_package_type();
        ProductController.clearProducts(this.productService,this.logger);
        ProductClassController.clearProductClasses(this.productClassService,this.logger);
        ProductTypeController.delete_product_type();
        CeilingController.clearceilings(this.ceilingService,this.logger);
        DeductibleController.clearDeductibles(this.deductibleService,this.logger);
         CurrencyController.delete_currency();
        RelationshipController.clear(this.relationshipService,this.logger);

        //réinitialisation de l'auto incrément
        queryRunner.query(`ALTER TABLE \`brand\`AUTO_INCREMENT = 1`);   
        queryRunner.query(`ALTER TABLE \`car_model\`AUTO_INCREMENT = 1`); 
        queryRunner.query(`ALTER TABLE \`car_body\`AUTO_INCREMENT = 1`); 
        queryRunner.query(`ALTER TABLE \`car_motorization\`AUTO_INCREMENT = 1`); 
        queryRunner.query(`ALTER TABLE \`doors-number\`AUTO_INCREMENT = 1`); 
        queryRunner.query(`ALTER TABLE \`fiscal-power\`AUTO_INCREMENT = 1`); 
        queryRunner.query(`ALTER TABLE \`ceiling\`AUTO_INCREMENT = 1`);   
        queryRunner.query(`ALTER TABLE \`company\`AUTO_INCREMENT = 1`); 
        queryRunner.query(`ALTER TABLE \`coverage_class\`AUTO_INCREMENT = 1`);     
        queryRunner.query(`ALTER TABLE \`coverage\`AUTO_INCREMENT = 1`);     
        queryRunner.query(`ALTER TABLE \`coverage_detail\`AUTO_INCREMENT = 1`);   
        queryRunner.query(`ALTER TABLE \`coverage_package\`AUTO_INCREMENT = 1`); 
        queryRunner.query(`ALTER TABLE \`currency\`AUTO_INCREMENT = 1`);     
        queryRunner.query(`ALTER TABLE \`deductible\`AUTO_INCREMENT = 1`);  
        queryRunner.query(`ALTER TABLE \`package\`AUTO_INCREMENT = 1`);      
        queryRunner.query(`ALTER TABLE \`package_detail\`AUTO_INCREMENT = 1`); 
        queryRunner.query(`ALTER TABLE \`package_type\`AUTO_INCREMENT = 1`);   
        queryRunner.query(`ALTER TABLE \`product\`AUTO_INCREMENT = 1`);   
        queryRunner.query(`ALTER TABLE \`product_class\`AUTO_INCREMENT = 1`);  
        queryRunner.query(`ALTER TABLE \`product_type\`AUTO_INCREMENT = 1`);    
        queryRunner.query(`ALTER TABLE \`risq\`AUTO_INCREMENT = 1`);   
        queryRunner.query(`ALTER TABLE \`relationship\`AUTO_INCREMENT = 1`); 
        queryRunner.query(`ALTER TABLE \`title\`AUTO_INCREMENT = 1`); 
       }
       catch (error) {
        this.logger.error(error?.message ?? "");
        throw error;
      }   
    }  
    
    @Post('clear-brands')
    async clearBrands(){
      BrandController.clearBrands(this.brandService,this.logger);
    }

    // @Post('clear-car-models')
    // async clearCarModels(){
    //  CarModelController.clearCarModels(this.carModelService,this.logger);
    // }

    @Post('clear-car-bodies')
    async clearCarBodies(){
     CarBodyController.clearCarBodies(this.carBodyService,this.logger);
    }

    @Post('clear-doors-number')
    async clearDoorsNumber(){
     DoorsNumberController.clearDoorsNumber(this.doorsNumberService,this.logger);
    }

    @Post('clear-fiscal-power')
    async clearFiscalPower(){
     FiscalPowerController.clearFiscalPower(this.fiscalPowerService,this.logger);
    }

    @Post('clear-car-motorizations')
    async clearCarMotorizations(){
     CarMotorizationController.clearCarMotorizations(this.carMotorizationService,this.logger);
    }

    @Post('clear-product-classes')
    async clearProductClasses(){
      ProductClassController.clearProductClasses(this.productClassService,this.logger);
    }

    @Post('clear-products')
    async clearProducts(){
      ProductController.clearProducts(this.productService,this.logger);
    }

    @Post('clear-coverage-classes')
    async clearCoverageClasses(){
      CoverageClassController.clearCoverageClasses(this.coverageClassService,this.logger);
    }
    @Post('clear-coverages')
    async clearCoverages(){
      const connection: Connection = getConnection();
      const queryRunner: QueryRunner = connection.createQueryRunner();
      await queryRunner.connect(); // performs connection 
      CoverageController.clearcoverages(this.coverageService,this.coveragePackageService,this.logger);
      queryRunner.query(`ALTER TABLE \`coverage\`AUTO_INCREMENT = 1`);    
      queryRunner.query(`ALTER TABLE \`coverage_package\`AUTO_INCREMENT = 1`); 
    }

    @Post('drop-references')
    async drop_references(){
      const connection: Connection = getConnection();
      const queryRunner: QueryRunner = connection.createQueryRunner();
      await queryRunner.connect(); // performs connection 
     try
     {    
          queryRunner.dropTable("doors-number", true);
          queryRunner.dropTable("fiscal-power", true);
          queryRunner.dropTable("car_model", true);
          queryRunner.dropTable("brand", true);
          queryRunner.dropTable("package_detail", true);
          queryRunner.dropTable("coverage_package", true);
          queryRunner.dropTable("ceiling", true);
          queryRunner.dropTable("deductible", true);
          queryRunner.dropTable("package", true);
          queryRunner.dropTable("package_type", true);
          queryRunner.dropTable("product", true);
          queryRunner.dropTable("product_class", true);
          queryRunner.dropTable("product_type", true);
          queryRunner.dropTable("coverage_detail", true);
          queryRunner.dropTable("coverage", true);
          queryRunner.dropTable("company", true);
          queryRunner.dropTable("risq", true);
          queryRunner.dropTable("currency", true);
          queryRunner.dropTable("relationship", true);
     }
      catch (error) {
       this.logger.error(error?.message ?? "");
     } 
    //  await queryRunner.release();  
   }  

   @Get('seed-titles')
   async seed_titles(){
     try {
       TitleController.seed(this.titleService, this.logger);
       }
       catch (error) {
         this.logger.error(error?.message ?? "");
         throw error;
     }
    }

}
     
  
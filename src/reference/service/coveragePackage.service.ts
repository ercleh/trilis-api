/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult, getConnection } from 'typeorm';
import { CoveragePackageCreateDto } from '../dto/coveragePackage-create.dto';
import { CoveragePackage } from '../entity/coveragePackage.entity';

@Injectable()
export class CoveragePackageService {

  constructor(
    @InjectRepository(CoveragePackage)
    private coveragePackageRepo:Repository<CoveragePackage>
  ) 
  {}

  create(coveragePackage: CoveragePackageCreateDto): Promise<CoveragePackage> {
    return this.coveragePackageRepo.save(coveragePackage);
  }
  findAll(): Promise<CoveragePackage[]> {
    return this.coveragePackageRepo.find();
  }
  clearCoveragePackages(){
    getConnection()
  .createQueryBuilder()
  .delete()
  .from(CoveragePackage)
  .execute()
}

  seed(){
    this.clearCoveragePackages();
      //**** */
       //ALLIANZ
       //**** */
       //tiers simple
            let item = {
              "coverageId": 1,
              "packageId": 1,
              "status": "I",
              "startDate":new Date(2022,1,1), 
            };
            this.create(item);
            item = {
              "coverageId": 2,
              "packageId": 1,
              "status": "I",
              "startDate":new Date(2022,1,1), 
            };
            this.create(item);
            item = {
              "coverageId": 3,
              "packageId": 1,
              "status": "I",
              "startDate":new Date(2022,1,1), 
            };

          //tiers complet
            this.create(item);
            item = {
              "coverageId": 1,
              "packageId": 3,
              "status": "I",
              "startDate":new Date(2022,1,1), 
            };
            this.create(item);
            item = {
              "coverageId": 2,
              "packageId": 3,
              "status": "I",
              "startDate":new Date(2022,1,1), 
            };
            this.create(item);
            item = {
              "coverageId": 3,
              "packageId": 3,
              "status": "I",
              "startDate":new Date(2022,1,1), 
            };
            this.create(item);
            item = {
              "coverageId": 4,
              "packageId": 3,
              "status": "I",
              "startDate":new Date(2022,1,1), 
            };
            this.create(item);
            item = {
              "coverageId": 5,
              "packageId": 3,
              "status": "I",
              "startDate":new Date(2022,1,1), 
            };
            this.create(item);
            item = {
              "coverageId": 6,
              "packageId": 3,
              "status": "I",
              "startDate":new Date(2022,1,1), 
            };
            this.create(item);
            item = {
              "coverageId": 7,
              "packageId": 3,
              "status": "I",
              "startDate":new Date(2022,1,1), 
            };
            this.create(item);
            item = {
              "coverageId": 8,
              "packageId": 3,
              "status": "I",
              "startDate":new Date(2022,1,1), 
            };
            this.create(item);

        //tous risques
            this.create(item);
            item = {
              "coverageId": 1,
              "packageId": 7,
              "status": "I",
              "startDate":new Date(2022,1,1), 
            };
            this.create(item);
            item = {
              "coverageId": 2,
              "packageId": 7,
              "status": "I",
              "startDate":new Date(2022,1,1), 
            };
            this.create(item);
            item = {
              "coverageId": 3,
              "packageId": 7,
              "status": "I",
              "startDate":new Date(2022,1,1), 
            };
            this.create(item);
            item = {
              "coverageId": 4,
              "packageId": 7,
              "status": "I",
              "startDate":new Date(2022,1,1), 
            };
            this.create(item);
            item = {
              "coverageId": 5,
              "packageId": 7,
              "status": "I",
              "startDate":new Date(2022,1,1), 
            };
            this.create(item);
            item = {
              "coverageId": 6,
              "packageId": 7,
              "status": "I",
              "startDate":new Date(2022,1,1), 
            };
            this.create(item);
            item = {
              "coverageId": 7,
              "packageId": 7,
              "status": "I",
              "startDate":new Date(2022,1,1), 
            };
            this.create(item);
            item = {
              "coverageId": 8,
              "packageId": 7,
              "status": "I",
              "startDate":new Date(2022,1,1), 
            };
            this.create(item);
            item = {
              "coverageId": 9,
              "packageId": 7,
              "status": "I",
              "startDate":new Date(2022,1,1), 
            };
            this.create(item);

      //**** */
       //MAIF
       //**** */
       //INITIALE
       item = {
        "coverageId": 10,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 11,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 12,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 13,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 14,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 15,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 16,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 17,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      this.create(item);
      item = {
        "coverageId": 20,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 22,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 23,
        "packageId": 6,
        "status": "O",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 24,
        "packageId": 6,
        "status": "O",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 25,
        "packageId": 6,
        "status": "O",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      //////////////
       //ESSENTIELLE
       /////////////
       item = {
        "coverageId": 10,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 11,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 12,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 13,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 14,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 15,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 16,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 17,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 18,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 19,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 20,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 22,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 23,
        "packageId": 6,
        "status": "O",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 24,
        "packageId": 6,
        "status": "O",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 25,
        "packageId": 6,
        "status": "O",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      /////////////
       //DIFFERENCE
       ////////////
       item = {
        "coverageId": 10,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 11,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 12,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 13,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 14,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 15,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 16,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 17,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 18,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 19,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 21,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 22,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 23,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 24,
        "packageId": 6,
        "status": "O",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 25,
        "packageId": 6,
        "status": "O",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      /////////////
       //PLENITUDE 
       /////////////
       item = {
        "coverageId": 10,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 11,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 12,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 13,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 14,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 15,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 16,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 17,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 18,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 19,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 20,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 21,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 22,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 23,
        "packageId": 6,
        "status": "I",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 24,
        "packageId": 6,
        "status": "O",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);
      item = {
        "coverageId": 25,
        "packageId": 6,
        "status": "O",
        "startDate":new Date(2022,1,1), 
      };
      this.create(item);

    }
}


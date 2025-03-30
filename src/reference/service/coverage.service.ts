/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult} from 'typeorm';
import { CoverageCreateDto } from '../dto/coverage-create.dto';
import { Coverage } from 'src/reference/entity/coverage.entity';
import { CoverageDto } from '../dto/coverage.dto';
import { RisqService } from './risq.service';
import { CompanyService } from './company.service';
import { CoverageClassService } from './coverageClass.service';

@Injectable()
export class CoverageService {

  constructor(
    @InjectRepository(Coverage)
    private coverageRepo:Repository<CoverageDto>,
    private risqService:RisqService,
    private companyService:CompanyService,
    private coverageClassService:CoverageClassService
  ) 
  {}

  create(coverage: CoverageCreateDto): Promise<CoverageDto> {
    return this.coverageRepo.save(coverage);
  }
  findAll(): Promise<CoverageDto[]> {
    return this.coverageRepo.find();
  }

  findOne(id:number): Promise<CoverageDto> {
    return this.coverageRepo.findOne({ where: {id: id } });
  }
  findByName(param: string): Promise<CoverageDto> {
    return this.coverageRepo.findOne({ where: { name: param } });
  }
  update(coverage: CoverageDto): Promise<UpdateResult> {
    return this.coverageRepo.update(coverage.id, coverage);
  }

  delete(id): Promise<DeleteResult> {
    return  this.coverageRepo.delete(id);
  }
  async clearCoverages(){
    await this.coverageRepo.clear();

}
seed(){
  this.clearCoverages();
  this.risqService.findByShortName("auto").then
  (r=>
    {
    //**** */
     //ALLIANZ
     //**** */
     this.companyService.findByShortName("ALLIANZ")
     .then( c=>
     {
      this.coverageClassService.findByName("Garanties essentielles")
      .then (cc =>
        {
          let item = {
            "companyId": c.id, 
            "coverageClassId":cc.id,
            "risqId":r.id,
            "name": "Responsabilité civile",
            "shortName":"RC",
            "description":"",
            "imagePath":"",
            "startDate":new Date(2022,1,1),         
          };
          this.create(item);
          item = {
            "companyId": c.id, 
            "coverageClassId":cc.id,
            "risqId":r.id,
            "name": "Défense et recours",
            "shortName":"Defense recours",
            "description":"",
            "imagePath":"",
            "startDate":new Date(2022,1,1),             
          };
          this.create(item);
          item = {
            "companyId": c.id, 
            "coverageClassId":cc.id,
            "risqId":r.id,
            "name": "Assurance famille\/passagers",
            "shortName":"Assurance famille",
            "description":"",
            "imagePath":"",
            "startDate":new Date(2022,1,1),             
          };
          this.create(item);
          item = {
            "companyId": c.id, 
            "coverageClassId":cc.id,
            "risqId":r.id,
            "name": "Recours anticipé",
            "shortName":"Recours",
            "description":"",
            "imagePath":"",
            "startDate":new Date(2022,1,1),             
          };
          this.create(item);
          item = {
            "companyId": c.id, 
            "coverageClassId":cc.id,
            "risqId":r.id,
            "name": "Incendie",
            "shortName":"Incendie",
            "description":"",
            "imagePath":"",
            "startDate":new Date(2022,1,1),             
          };
          this.create(item);
          item = {
            "companyId": c.id, 
            "coverageClassId":cc.id,
            "risqId":r.id,
            "name": "Vol",
            "shortName":"Vol",
            "description":"",
            "imagePath":"",
            "startDate":new Date(2022,1,1),             
          };
          this.create(item);
          item = {
            "companyId": c.id, 
            "coverageClassId":cc.id,
            "risqId":r.id,
            "name": "Bris de glace",
            "shortName":"Bris de glace",
            "description":"",
            "imagePath":"",
            "startDate":new Date(2022,1,1),             
          };
          this.create(item);
          item = {
            "companyId": c.id, 
            "coverageClassId":cc.id,
            "risqId":r.id,
            "name": "Vol accessoire sans déplacement",
            "shortName":"Vol accessoire",
            "description":"",
            "imagePath":"",
            "startDate":new Date(2022,1,1),             
          };
          this.create(item);
        });
        this.coverageClassService.findByName("Garanties dommage")
        .then (cc =>
          {
            const item = {
              "companyId": c.id, 
              "coverageClassId":cc.id,
              "risqId":r.id,
              "name": "Dommages tous accidents",
              "shortName":"Dommages tous accidents",
              "description":"",
              "imagePath":"",
              "startDate":new Date(2022,1,1),             
            };
            this.create(item);
          });
      });
    //**** */
     //MAIF
     //**** */
     this.companyService.findByShortName("MAIF")
     .then( c=>
     {
      this.coverageClassService.findByName("Garanties essentielles")
      .then (cc =>
        {
          let item = {
            "companyId": c.id, 
            "coverageClassId":cc.id,
            "risqId":r.id,
            "name": "Responsabilité civile et défense",
            "shortName":"Responsabilité civile",
            "description":"",
            "imagePath":"",
            "startDate":new Date(2022,1,1),         
          };
          this.create(item);
          item = {
            "companyId": c.id, 
            "coverageClassId":cc.id,
            "risqId":r.id,
            "name": "Recours et protection juridique en cas d'événement garanti",
            "shortName":"Recours",
            "description":"",
            "imagePath":"",
            "startDate":new Date(2022,1,1),             
          };
          this.create(item);
          item = {
            "companyId": c.id, 
            "coverageClassId":cc.id,
            "risqId":r.id,
            "name": "Informations et renseignements juridiques",
            "shortName":"Renseignements juridiques",
            "description":"",
            "imagePath":"",
            "startDate":new Date(2022,1,1),             
          };
          this.create(item);
          item = {
            "companyId": c.id, 
            "coverageClassId":cc.id,
            "risqId":r.id,
            "name": "Protection étendue à un autre conducteur en cas de prêt du véhicule",
            "shortName":"Autre conducteur",
            "description":"",
            "imagePath":"",
            "startDate":new Date(2022,1,1),             
          };
          this.create(item);
          item = {
            "companyId": c.id, 
            "coverageClassId":cc.id,
            "risqId":r.id,
            "name": "Assistance aux personnes 24h\/24 7j\/7",
            "shortName":"Assistance aux personnes",
            "description":"",
            "imagePath":"",
            "startDate":new Date(2022,1,1),             
          };
          this.create(item);
          item = {
            "companyId": c.id, 
            "coverageClassId":cc.id,
            "risqId":r.id,
            "name": "Assistance en cas d'accident ou de vol 0 km ",
            "shortName":"Accident 0 km",
            "description":"",
            "imagePath":"",
            "startDate":new Date(2022,1,1),             
          };
          this.create(item);
          item = {
            "companyId": c.id, 
            "coverageClassId":cc.id,
            "risqId":r.id,
            "name": "Catastrophes naturelles",
            "shortName":"Catastrophes naturelles",
            "description":"",
            "imagePath":"",
            "startDate":new Date(2022,1,1),             
          };
          this.create(item);
          item = {
            "companyId": c.id, 
            "coverageClassId":cc.id,
            "risqId":r.id,
            "name": "Catastrophes technologiques",
            "shortName":"Catastrophes technologiques",
            "description":"",
            "imagePath":"",
            "startDate":new Date(2022,1,1),             
          };
          this.create(item);
          item = {
            "companyId": c.id, 
            "coverageClassId":cc.id,
            "risqId":r.id,
            "name": "Vol ou incendie",
            "shortName":"Vol ou incendie",
            "description":"",
            "imagePath":"",
            "startDate":new Date(2022,1,1),             
          };
          this.create(item);
          item = {
            "companyId": c.id, 
            "coverageClassId":cc.id,
            "risqId":r.id,
            "name": "Bris d'éléments vitrés",
            "shortName":"Bris d'éléments vitrés",
            "description":"",
            "imagePath":"",
            "startDate":new Date(2022,1,1),             
          };
          this.create(item);
        });
        this.coverageClassService.findByName("Garanties dommage")
      .then (cc =>
        {
          let item = {
            "companyId": c.id, 
            "coverageClassId":cc.id,
            "risqId":r.id,
            "name": "Dommages (accidents et vandalisme)",
            "shortName":"Dommages",
            "description":"",
            "imagePath":"",
            "startDate":new Date(2022,1,1),             
          };
          this.create(item);
          item = {
            "companyId": c.id, 
            "coverageClassId":cc.id,
            "risqId":r.id,
            "name": "Indemnisation renforcée du véhicule",
            "shortName":"Indemnisation renforcée",
            "description":"",
            "imagePath":"",
            "startDate":new Date(2022,1,1),             
          };
          this.create(item);
          item = {
            "companyId": c.id, 
            "coverageClassId":cc.id,
            "risqId":r.id,
            "name": "Indemnisation des dommages corporels",
            "shortName":"Dommages corporels",
            "description":"",
            "imagePath":"",
            "startDate":new Date(2022,1,1),             
          };
          this.create(item);
        })
        this.coverageClassService.findByName("Garanties optionnelles")
        .then (cc =>
          {
            let item = {
              "companyId": c.id, 
              "coverageClassId":cc.id,
              "risqId":r.id,
              "name": "Objets transportés dans ce véhicule",
              "shortName":"Objets transportés",
              "description":"",
              "imagePath":"",
              "startDate":new Date(2022,1,1),             
            };
            this.create(item);
            item = {
              "companyId": c.id, 
              "coverageClassId":cc.id,
              "risqId":r.id,
              "name": "Assistance en cas de panne 0 km ",
              "shortName":"Panne 0 km",
              "description":"",
              "imagePath":"",
              "startDate":new Date(2022,1,1),             
            };
            this.create(item);  
            item = {
              "companyId": c.id, 
              "coverageClassId":cc.id,
              "risqId":r.id,
              "name": "Véhicule de remplacement",
              "shortName":"Véhicule de remplacement",
              "description":"",
              "imagePath":"",
              "startDate":new Date(2022,1,1),             
            };
            this.create(item);
          });  
      });
    });
}
}

/* eslint-disable prettier/prettier */
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { catchError } from 'rxjs';
import { getConnection, Repository} from 'typeorm';
import { ProductClassCreateDto } from '../dto/productClass-create.dto';
import { ProductClassDto } from '../dto/productClass.dto';
import { ProductClass } from '../entity/productClass.entity';
import { CompanyService } from './company.service';
   
@Injectable()
export class ProductClassService {
 
  constructor(
    @InjectRepository(ProductClass)
    private repo:Repository<ProductClass>,
    private companyService:CompanyService
  ) {}

 
  findAll(): Promise<ProductClassDto[]> {
    return this.repo.find();
  }
  findByCompany(companyId: number): Promise<ProductClassDto[]> {
    return this.repo.find({
      where: [
          { companyId},
      ],
    })
  }

  findByCompanyAndRisq(companyId: number, risqId:number): Promise<ProductClassDto[]> {
    return this.repo.find({
      where: [
          { companyId,risqId},
      ],
  })
  }

  findByRisq(risqId:number): Promise<ProductClassDto[]> {
    return this.repo.find({
      where: {
        risqId : risqId
      },cache: false, // Ajoute cette ligne
  })
  }

  create(item: ProductClassCreateDto): Promise<ProductClassDto> {
    return this.repo.save(item);
  }
    clearProductClasses(){
      getConnection()
    .createQueryBuilder()
    .delete()
    .from(ProductClass)
    .execute()
    .then(r=>getConnection().createQueryRunner().query(`ALTER TABLE \`product_class\`AUTO_INCREMENT = 1`)
  )
  }

  findByCompanyAndName(companyId: number, name:string): Promise<ProductClassDto> {
    const productClass =  this.repo.findOne({
      select: ['id'],
      where: {
        companyId,
        name,
      },
    });
    return productClass;
  }

  seed(){
    this.clearProductClasses();
    //**** */
     //ALLIANZ
     //**** */
     this.companyService.findByShortName("ALLIANZ")
     .then( c=>
     {
     let productClassCreateDto = {
       "companyId": c.id, 
       "name": "Assurance auto classique",
       "imagePath":"assets\/images-trilis\/types_produits\/famille.jpg",
        "description":" ",
        "color":" "
     };
     this.create(productClassCreateDto); 
     productClassCreateDto = {
       "companyId": c.id, 
       "name":"Multirisque habitation",
       "imagePath":"assets\/images-trilis\/types_produits\/bermuda-where-is-my-car.png" ,
       "description":" ",
       "color":" "
     };
     this.create(productClassCreateDto); 
    });
 
    //**** */
     //    ATLANTIQUE ASSURANCE
     //**** */
     this.companyService.findByShortName("AXA")
     .then( c=>
     {
     let productClassCreateDto = {
       "companyId": c.id, 
       "name":"Accidents corporels","imagePath":"assets\/images-trilis\/types_produits\/accident_corporel.jfif",
        "description":" ",
        "color":" "
      };
     this.create(productClassCreateDto); 
     productClassCreateDto = {
       "companyId": c.id, 
       "name":"Automobile","imagePath":"assets\/images-trilis\/types_produits\/vehicule.png",
        "description":" ",
        "color":" "
      };
     this.create(productClassCreateDto); 
     productClassCreateDto = {
      "companyId": c.id, 
      "name":"Incendie et autres dommages","imagePath":"assets\/images-trilis\/types_produits\/incendie.jpg",
       "description":" ",
       "color":" "
     };
    this.create(productClassCreateDto); 

    productClassCreateDto = {
      "companyId": c.id, 
      "name":"Responsabilité civile","imagePath":"assets\/images-trilis\/types_produits\/responsabilite_civile.png",
       "description":" ",
       "color":" "
    };
    this.create(productClassCreateDto); 

    productClassCreateDto = {
      "companyId": c.id, 
      "name":"Transport","imagePath":"assets\/images-trilis\/types_produits\/transport.jpg",
       "description":" ",
       "color":" "
    };
    this.create(productClassCreateDto); 
    productClassCreateDto = {
      "companyId": c.id, 
      "name":"Santé","imagePath":"assets\/images-trilis\/types_produits\/santé.jpg",
      "description":" ",
      "color":" "};
    this.create(productClassCreateDto); 

    productClassCreateDto = {
      "companyId": c.id, 
      "name":"Risques techniques","imagePath":"assets\/images-trilis\/types_produits\/risque_technique.jfif",
       "description":" ",
       "color":" "
        };
    this.create(productClassCreateDto); 
    productClassCreateDto = {
      "companyId": c.id, 
      "name":"Carte bancaire","imagePath":"assets\/images-trilis\/types_produits\/carte_banque.jpg",
       "description":" ",
       "color":" "
        } ;
      this.create(productClassCreateDto); 
    });

        //**** */
     //AXA
     //**** */
     this.companyService.findByShortName("AXA")
     .then( c=>
     {
     let productClassCreateDto = {
       "companyId": c.id, 
       "name":"AUTO","imagePath":"assets\/images-trilis\/types_produits\/bermuda-where-is-my-car.png",
        "description":" ",
        "color":" "
      };
     this.create(productClassCreateDto); 
     productClassCreateDto = {
       "companyId": c.id, 
       "name":"MOTO","imagePath":"assets\/images-trilis\/types_produits\/moto.png",
        "description":" ",
        "color":" "
      };
     this.create(productClassCreateDto); 
     productClassCreateDto = {
      "companyId": c.id, 
      "name":"HABITATION","imagePath":"assets\/images-trilis\/types_produits\/habitation.png",
       "description":" ",
       "color":" "
     };
    this.create(productClassCreateDto); 

    productClassCreateDto = {
      "companyId": c.id, 
      "name": "PREVOYANCE","imagePath":"assets\/images-trilis\/types_produits\/prévoyance.jpg",
      "description":" ",
      "color":" "
    };
    this.create(productClassCreateDto); 

    productClassCreateDto = {
      "companyId": c.id, 
      "name":"LOISIRS","imagePath":"assets\/images-trilis\/types_produits\/loisir.jpg",
       "description":" ",
       "color":" "
    };
    this.create(productClassCreateDto); 
    });

    //**** */
     //GROUPAMA
     //**** */
     this.companyService.findByShortName("GROUPAMA")
     .then( c=>
     {
     let productClassCreateDto = {
       "companyId": c.id, 
       "name":"Auto","imagePath":"assets\/images-trilis\/types_produits\/vehicule.png",
        "description":" ",
        "color":" "
       };
     this.create(productClassCreateDto); 
     productClassCreateDto = {
       "companyId": c.id, 
       "name":"Habitation","imagePath":"assets\/images-trilis\/types_produits\/habitation.png",
        "description":" ",
        "color":" "
      };
     this.create(productClassCreateDto); 
     productClassCreateDto = {
       "companyId": c.id,
       "name":"Santé","imagePath":"assets\/images-trilis\/types_produits\/santé2.jpg",
        "description":" ",
        "color":" "
      };
     this.create(productClassCreateDto); 
     productClassCreateDto = {
       "companyId": c.id, 
       "name":"Accidents vie","imagePath":"assets\/images-trilis\/types_produits\/vehicule.png",
        "description":" ",
        "color":" "
      };
     this.create(productClassCreateDto); 
     productClassCreateDto = {
      "companyId": c.id, 
      "name":"Prêt personnel","imagePath":"assets\/images-trilis\/types_produits\/icons8-structurel-96.png",
       "description":" ",
       "color":" "
     };
    this.create(productClassCreateDto); 
    productClassCreateDto = {
      "companyId": c.id, 
      "name":"Obsèques","imagePath":"assets\/images-trilis\/types_produits\/icons8-plante-en-pot-100.png",
       "description":" ",
       "color":" "
     };
    this.create(productClassCreateDto); 
   });
 
      //**** */
     //   LA LOYALE
     //**** */
     this.companyService.findByShortName("LA LOYALE")
     .then( c=>
     {
     let productClassCreateDto = {
       "companyId": c.id, 
       "name":"ENTREPRISE","imagePath":"assets\/images-trilis\/types_produits\/entreprise2.png",
        "description":" ",
        "color":" "
       };
     this.create(productClassCreateDto); 
     productClassCreateDto = {
       "companyId": c.id, 
       "name":"INDIVIDUEL","imagePath":"",
        "description":" ",
        "color":" "
      };
     this.create(productClassCreateDto); 
     productClassCreateDto = {
       "companyId": c.id,
       "name":"BANCASSURANCE","imagePath":"assets\/images-trilis\/types_produits\/banque_assurance.jpg",
        "description":" ",
        "color":" "
      };
     this.create(productClassCreateDto); 
    });

    //**** */
     //MAAF
     //**** */
     this.companyService.findByShortName("MAAF")
     .then( c=>
     {
     let productClassCreateDto = {
       "companyId": c.id, 
       "name":"Véhicules",
       "imagePath":"assets\/images-trilis\/types_produits\/vehicule.png", "description":" ",
       "color":" ",
      };
     this.create(productClassCreateDto); 
     productClassCreateDto = {
       "companyId": c.id, 
       "name":"Habitation",
       "imagePath":"assets\/images-trilis\/types_produits\/habitation.png" , "description":" ","color":" "
     };
     this.create(productClassCreateDto); 
     productClassCreateDto = {
       "companyId": c.id,
       "name":"Santé",
       "imagePath":"assets\/images-trilis\/types_produits\/icons8-plante-en-pot-100.png"  , "description":" ","color":" "
     };
     this.create(productClassCreateDto); 
     productClassCreateDto = {
       "companyId": c.id, 
       "name":"Prévoyance",
       "imagePath":"assets\/images-trilis\/types_produits\/bermuda-where-is-my-car.png"  , "description":" ","color":" "
     };
     this.create(productClassCreateDto); 
     productClassCreateDto = {
      "companyId": c.id, 
      "name":"Epargne",
      "imagePath":"assets\/images-trilis\/types_produits\/icons8-structurel-96.png"  , "description":" ","color":" "
    };
    this.create(productClassCreateDto); 
    productClassCreateDto = {
      "companyId": c.id, 
      "name":"Activités pro",
      "imagePath":"assets\/images-trilis\/types_produits\/icons8-plante-en-pot-100.png"  , "description":" ","color":" "
    };
    this.create(productClassCreateDto); 
   });


    //**** */
     //MAIF
     //**** */
      this.companyService.findByShortName("MAIF")
      .then( c=>
      {
      let productClassCreateDto = {
        "companyId": c.id, 
        "name": "Véhicule et mobilité",
        "imagePath":"assets\/images-trilis\/types_produits\/vehicule.png" , "description":" ","color":" "
      };
      this.create(productClassCreateDto); 
      productClassCreateDto = {
        "companyId": c.id, 
        "name": "Habitation",
        "imagePath":"assets\/images-trilis\/types_produits\/habitation.png" , "description":" ","color":" "
      };  
      this.create(productClassCreateDto); 
      productClassCreateDto = {
        "companyId": c.id, 
        "name": "Famille et Vie",
        "imagePath":"assets\/images-trilis\/types_produits\/icons8-plante-en-pot-100.png" , "description":" ","color":" "
      };
      this.create(productClassCreateDto); 
      productClassCreateDto = {
        "companyId": c.id, 
        "name": "Epargne et Patrimoine",
        "imagePath":"assets\/images-trilis\/types_produits\/icons8-tirelire-80.png" , "description":" ","color":" "
      };
      this.create(productClassCreateDto); 
    });

    //**** */
     //SUNU
     //**** */
     this.companyService.findByShortName("SUNU")
     .then( c=>
     {
     let productClassCreateDto = {
       "companyId": c.id, 
       "name": "Indemnité funérailles",
       "imagePath":"assets\/images-trilis\/types_produits\/funerailles.jpeg" , "description":" ","color":" "
     };
     this.create(productClassCreateDto); 
     productClassCreateDto = {
       "companyId": c.id, 
       "name": "Epargne retraite",
       "imagePath":"assets\/images-trilis\/types_produits\/epargne_retraite.jfif" , "description":" ","color":" "
     };
     this.create(productClassCreateDto); 
     productClassCreateDto = {
       "companyId": c.id, 
       "name": "Education",
       "imagePath":"assets\/images-trilis\/types_produits\/education2.jpg" , "description":" ","color":" "
     };
     this.create(productClassCreateDto); 
   });


 }
}
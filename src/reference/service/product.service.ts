/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, In, Repository} from 'typeorm';
import { ProductCreateDto } from '../dto/product-create.dto';
import { ProductDto } from '../dto/product.dto';
import { Product } from '../entity/product.entity';
import { CompanyService } from './company.service';
import { ProductClassService } from './productClass.service';
import { RisqService } from './risq.service';
  
@Injectable()
export class ProductService {
 
  constructor(
    @InjectRepository(Product)
    private repo:Repository<Product>,
    private companyService:CompanyService,
    private productClassService:ProductClassService,
    private risqService:RisqService
  ) {}

 
  findAll(): Promise<ProductDto[]> {
    return this.repo.find();
  }

  findByProductClass(productClassId: number): Promise<ProductDto[]> {
    return this.repo.find({
      where: [
          { productClassId},
      ],
  })
  }

  findByProductClassAndName(productClassId: number, name:string): Promise<ProductDto> {
    return this.repo.findOne({
      where: [
          { productClassId,name},
      ],
  })
  }

  async findByCompanyAndRisq(companyId: number, risqId: number): Promise<ProductDto[]> {
    // Récupérer les ProductClass associés à la compagnie et au risque
    const productClasses = await this.productClassService.findByCompanyAndRisq(companyId, risqId);
  
    // Extraire les IDs des ProductClass
    const productClassIds = productClasses.map(pc => pc.id);
  
    if (productClassIds.length === 0) {
      return []; // Retourner une liste vide s'il n'y a pas de classes de produit
    }
  
    // Récupérer tous les produits appartenant aux classes de produit trouvées
    return this.repo.find({
      where: { productClassId: In(productClassIds) } // Utilisation de In() pour filtrer plusieurs IDs
    });
  }
  
  create(item: ProductCreateDto): Promise<ProductDto> {
    return this.repo.save(item);
  }

  clearProducts(){
    getConnection()
  .createQueryBuilder()
  .delete()
  .from(Product)
  .execute()
}

seed(){
  this.clearProducts();
  this.risqService.findByShortName("auto").then
  (r=>
    {
    //**** */
     //ALLIANZ
     //**** */
     this.companyService.findByShortName("ALLIANZ")
     .then( c=>
     {
      this.productClassService.findByCompanyAndName(c.id,"Assurance auto classique")
      .then (pc =>
        {
          let productDto = {
            "productClassId": pc.id, 
            "productTypeId":1,
            "risqId":r.id,
            "name": "AZ Assurance Auto\/Moto Classique",
            "imagePath":"assets\/images-trilis\/types\/voituremoderne.png" , "description":" " ,
            "iconPath":"",
            "common":true
          };
          this.create(productDto);
          productDto = {
            "productClassId": pc.id, 
            "productTypeId":1,
            "risqId":r.id,
            "name": "AZ Assurance Auto Sécurité",
            "imagePath":"assets\/images-trilis\/types\/moto1.png" , "description":" " ,
            "iconPath":"",
            "common":true
          };
          this.create(productDto);
        })  
     })

     //**** */
     //ATLANTIQUE ASSURANCE
     //**** */
     this.companyService.findByShortName("ATLANTIQUE ASSURANCE")
     .then( c=>
     {
      this.productClassService.findByCompanyAndName(c.id,"Accidents corporels")
      .then (pc =>
        {
          let productDto = {
            "productClassId": pc.id, 
            "productTypeId":1,
            "risqId":r.id,
            "name": "Individuelle accidents",
            "imagePath":"assets\/images-trilis\/types\/voituremoderne.png" , "description":" " ,
            "iconPath":"",
            "common":true
          };
          this.create(productDto);
          productDto = {
            "productClassId": pc.id, 
            "productTypeId":1,
            "risqId":r.id,
            "name": "Assurance voyage",
            "imagePath":"assets\/images-trilis\/types\/moto1.png" , "description":" " ,
            "iconPath":"",
            "common":true
          };
          this.create(productDto);
        })

        this.productClassService.findByCompanyAndName(c.id,"Automobile")
        .then (pc =>
          {
            let productDto = {
              "productClassId": pc.id, 
              "productTypeId":1,
              "risqId":r.id,
              "name": "Assurance automobile et deux roues",
              "imagePath":"assets\/images-trilis\/types\/voituremoderne.png" , "description":" ",
              "iconPath":"",
              "common":true 
            };
            this.create(productDto);
            productDto = {
              "productClassId": pc.id, 
              "productTypeId":1,
              "risqId":r.id,
              "name": "ASSIST'AUTO PLUS",
              "imagePath":"assets\/images-trilis\/types\/moto1.png" , "description":" " ,
              "iconPath":"",
              "common":true
            };
            this.create(productDto);
          })

          this.productClassService.findByCompanyAndName(c.id,"Incendie et autres dommages")
        .then (pc =>
          {
            const productDto = {
              "productClassId": pc.id, 
              "productTypeId":1,
              "risqId":r.id,
              "name": "Assurance multirisque habitation",
              "imagePath":"assets\/images-trilis\/types\/voituremoderne.png" , "description":" ",
              "iconPath":"",
              "common":true 
            };
            this.create(productDto);
          })

          this.productClassService.findByCompanyAndName(c.id,"Responsabilité civile")
          .then (pc =>
            {
              let productDto = {
                "productClassId": pc.id, 
                "productTypeId":1,
                "risqId":r.id,
                "name": "Assurance responsabilité civile",
                "imagePath":"assets\/images-trilis\/types\/voituremoderne.png" , "description":" ",
                "iconPath":"",
                "common":true
              };
              this.create(productDto);
              productDto = {
                "productClassId": pc.id, 
                "productTypeId":1,
                "risqId":r.id,
                "name": "Assurance responsabilité civile scolaire",
                "imagePath":"assets\/images-trilis\/types\/moto1.png" , "description":" ",
                "iconPath":"",
                "common":true
              };
              this.create(productDto);
            })

            this.productClassService.findByCompanyAndName(c.id,"Santé")
        .then (pc =>
          {
            const productDto = {
              "productClassId": pc.id, 
              "productTypeId":1,
              "risqId":r.id,
              "name": "Assurance santé plus",
              "imagePath":"assets\/images-trilis\/types\/voituremoderne.png" , "description":" ",
              "iconPath":"",
              "common":true
            };
            this.create(productDto);
          })

          this.productClassService.findByCompanyAndName(c.id,"Carte bancaire")
          .then (pc =>
            {
              const productDto = {
                "productClassId": pc.id, 
                "productTypeId":1,
                "risqId":r.id,
                "name": "Assurance carte bancaire",
                "imagePath":"assets\/images-trilis\/types\/voituremoderne.png" , "description":" ",
                "iconPath":"",
                "common":true
              };
              this.create(productDto);
            })
  
     })

      //**** */
     //AXA
     //**** */
     this.companyService.findByShortName("AXA")
     .then( c=>
     {
      this.productClassService.findByCompanyAndName(c.id,"AUTO")
      .then (pc =>
        {
          const productDto = {
            "productClassId": pc.id, 
            "productTypeId":1,
            "risqId":r.id,
            "name": "Assurance automobile",
            "imagePath":"assets\/images-trilis\/types\/voituremoderne.png" , "description":" ",
            "iconPath":"",
            "common":true
          };
          this.create(productDto);
        })

        this.productClassService.findByCompanyAndName(c.id,"MOTO")
        .then (pc =>
          {
            const productDto = {
              "productClassId": pc.id, 
              "productTypeId":1,
              "risqId":r.id,
              "name": "Assurance moto",
              "imagePath":"assets\/images-trilis\/types\/voituremoderne.png" , "description":" ",
              "iconPath":"",
              "common":true
            };
            this.create(productDto);
           })

          this.productClassService.findByCompanyAndName(c.id,"PREVOYANCE")
        .then (pc =>
          {
            const productDto = {
              "productClassId": pc.id, 
              "productTypeId":1,
              "risqId":r.id,
              "name": "Assurance individuelle accident",
              "imagePath":"assets\/images-trilis\/types\/voituremoderne.png" , "description":" ",
              "iconPath":"",
              "common":true
            };
            this.create(productDto);
          })

          this.productClassService.findByCompanyAndName(c.id,"HABITATION")
          .then (pc =>
            {
              let productDto = {
                "productClassId": pc.id, 
                "productTypeId":1,
                "risqId":r.id,
                "name": "Multirisque Habitation",
                "imagePath":"assets\/images-trilis\/types\/voituremoderne.png" , "description":" ",
                "iconPath":"",
                "common":true
              };
              this.create(productDto);
              productDto = {
                "productClassId": pc.id, 
                "productTypeId":1,
                "risqId":r.id,
                "name": "Multirisque Immeuble",
                "imagePath":"assets\/images-trilis\/types\/moto1.png" , "description":" ",
                "iconPath":"",
                "common":true
              };
              this.create(productDto);
            })

            this.productClassService.findByCompanyAndName(c.id,"LOISIRS")
        .then (pc =>
          {
            const productDto = {
              "productClassId": pc.id, 
              "productTypeId":1,
              "risqId":r.id,
              "name": "Navigation de plaisance",
              "imagePath":"assets\/images-trilis\/types\/voituremoderne.png" , "description":" ",
              "iconPath":"",
              "common":true
            };
            this.create(productDto);
          })

          this.productClassService.findByCompanyAndName(c.id,"Carte bancaire")
          .then (pc =>
            {
              const productDto = {
                "productClassId": pc.id, 
                "productTypeId":1,
                "risqId":r.id,
                "name": "Axa voyages",
                "imagePath":"assets\/images-trilis\/types\/voituremoderne.png" , "description":" ",
                "iconPath":"",
                "common":true
              };
              this.create(productDto);
            })
  
     })

    //**** */
     //GROUPAMA
     //**** */
     this.companyService.findByShortName("GROUPAMA")
     .then( c=>
     {
      this.productClassService.findByCompanyAndName(c.id,"AUTO")
      .then (pc =>
        {
          let productDto = {
            "productClassId": pc.id, 
            "productTypeId":1,
            "risqId":r.id,
            "name": "Auto",
            "imagePath":"assets\/images-trilis\/types\/voituremoderne.png" , "description":" ",
            "iconPath":"",
            "common":true
          };
          this.create(productDto);
          productDto = {
            "productClassId": pc.id, 
            "productTypeId":1,
            "risqId":r.id,
            "name": "Moto",
            "imagePath":"assets\/images-trilis\/types\/voituremoderne.png" , "description":" ",
            "iconPath":"",
            "common":true
          };
          this.create(productDto);
          productDto = {
            "productClassId": pc.id, 
            "productTypeId":1,
            "risqId":r.id,
            "name": "Scooter",
            "imagePath":"assets\/images-trilis\/types\/voituremoderne.png" , "description":" ",
            "iconPath":"",
            "common":true
          };
          this.create(productDto);
          productDto = {
            "productClassId": pc.id, 
            "productTypeId":1,
            "risqId":r.id,
            "name": "Camping car",
            "imagePath":"assets\/images-trilis\/types\/voituremoderne.png" , "description":" ",
            "iconPath":"",
            "common":true
          };
          this.create(productDto);
          productDto = {
            "productClassId": pc.id, 
            "productTypeId":1,
            "risqId":r.id,
            "name": "Autres véhicules",
            "imagePath":"assets\/images-trilis\/types\/voituremoderne.png" , "description":" ",
            "iconPath":"",
            "common":true
          };
          this.create(productDto);

        })
      })

     //**** */
     //LA LOYALE
     //**** */
     this.companyService.findByShortName("LA LOYALE")
     .then( c=>
     {
      this.productClassService.findByCompanyAndName(c.id,"INDIVIDUEL")
      .then (pc =>
        {
          let productDto = {
            "productClassId": pc.id, 
            "productTypeId":1,
            "risqId":r.id,
            "name": "Yako Assurance Obsèques",
            "imagePath":"assets\/images-trilis\/types\/voituremoderne.png" , "description":" ",
            "iconPath":"",
            "common":true
          };
          this.create(productDto);
          productDto = {
            "productClassId": pc.id, 
            "productTypeId":1,
            "risqId":r.id,
            "name": "Cadence",
            "imagePath":"assets\/images-trilis\/types\/voituremoderne.png" , "description":" ",
            "iconPath":"",
            "common":true
          };
          this.create(productDto);
          productDto = {
            "productClassId": pc.id, 
            "productTypeId":1,
            "risqId":r.id,
            "name": "Cadence Education plus",
            "imagePath":"assets\/images-trilis\/types\/voituremoderne.png" , "description":" ",
            "iconPath":"",
            "common":true
          };
          this.create(productDto);
          productDto = {
            "productClassId": pc.id, 
            "productTypeId":1,
            "risqId":r.id,
            "name": "Performa",
            "imagePath":"assets\/images-trilis\/types\/voituremoderne.png" , "description":" ",
            "iconPath":"",
            "common":true
          };
          this.create(productDto);
          productDto = {
            "productClassId": pc.id, 
            "productTypeId":1,
            "risqId":r.id,
            "name": "Doihoo",
            "imagePath":"assets\/images-trilis\/types\/voituremoderne.png" , "description":" ",
            "iconPath":"",
            "common":true
          };
          this.create(productDto);

        })

        this.productClassService.findByCompanyAndName(c.id,"BANCASSURANCE")
        .then (pc =>
          {
            let productDto = {
              "productClassId": pc.id, 
              "productTypeId":1,
              "risqId":r.id,
              "name": "Yako bancassurance",
              "imagePath":"assets\/images-trilis\/types\/voituremoderne.png" , "description":" ",
              "iconPath":"",
              "common":true
            };
            this.create(productDto);
            productDto = {
              "productClassId": pc.id, 
              "productTypeId":1,
              "risqId":r.id,
              "name": "AssurCompte BNI",
              "imagePath":"assets\/images-trilis\/types\/moto1.png" , "description":" ",
              "iconPath":"",
              "common":true
            };
            this.create(productDto);
            productDto = {
              "productClassId": pc.id, 
              "productTypeId":1,
              "risqId":r.id,
              "name": "Plan Vert Retraire BNI",
              "imagePath":"assets\/images-trilis\/types\/moto1.png" , "description":" ",
              "iconPath":"",
              "common":true
            };
            this.create(productDto);
            productDto = {
              "productClassId": pc.id, 
              "productTypeId":1,
              "risqId":r.id,
              "name": "Securicompte Banque Populaire",
              "imagePath":"assets\/images-trilis\/types\/moto1.png" , "description":" ",
              "iconPath":"",
              "common":true
            };
            this.create(productDto);
            productDto = {
              "productClassId": pc.id, 
              "productTypeId":1,
              "risqId":r.id,
              "name": "Performa BNI",
              "imagePath":"assets\/images-trilis\/types\/moto1.png" , "description":" ",
              "iconPath":"",
              "common":true
            };
            this.create(productDto);
            productDto = {
              "productClassId": pc.id, 
              "productTypeId":1,
              "risqId":r.id,
              "name": "Parainnage de Compte CAC",
              "imagePath":"assets\/images-trilis\/types\/moto1.png" , "description":" ",
              "iconPath":"",
              "common":true
            };
            this.create(productDto);

          })

          this.productClassService.findByCompanyAndName(c.id,"Incendie et autres dommages")
        .then (pc =>
          {
            const productDto = {
              "productClassId": pc.id, 
              "productTypeId":1,
              "risqId":r.id,
              "name": "Assurance multirisque habitation",
              "imagePath":"assets\/images-trilis\/types\/voituremoderne.png" , "description":" ",
              "iconPath":"",
              "common":true
            };
            this.create(productDto);
          })

          this.productClassService.findByCompanyAndName(c.id,"Responsabilité civile")
          .then (pc =>
            {
              let productDto = {
                "productClassId": pc.id, 
                "productTypeId":1,
                "risqId":r.id,
                "name": "Assurance responsabilité civile",
                "imagePath":"assets\/images-trilis\/types\/voituremoderne.png" , "description":" ",
                "iconPath":"",
                "common":true
              };
              this.create(productDto);
              productDto = {
                "productClassId": pc.id, 
                "productTypeId":1,
                "risqId":r.id,
                "name": "Assurance responsabilité civile scolaire",
                "imagePath":"assets\/images-trilis\/types\/moto1.png" , "description":" ",
                "iconPath":"",
                "common":true
              };
              this.create(productDto);
            })

            this.productClassService.findByCompanyAndName(c.id,"Santé")
        .then (pc =>
          {
            const productDto = {
              "productClassId": pc.id, 
              "productTypeId":1,
              "risqId":r.id,
              "name": "Assurance santé plus",
              "imagePath":"assets\/images-trilis\/types\/voituremoderne.png" , "description":" ",
              "iconPath":"",
              "common":true
            };
            this.create(productDto);
          })

          this.productClassService.findByCompanyAndName(c.id,"Carte bancaire")
          .then (pc =>
            {
              const productDto = {
                "productClassId": pc.id, 
                "productTypeId":1,
                "risqId":r.id,
                "name": "Assurance carte bancaire",
                "imagePath":"assets\/images-trilis\/types\/voituremoderne.png" , "description":" ",
                "iconPath":"",
                "common":true
              };
              this.create(productDto);
            })
  
     })


    //**** */
     //MAIF
     //**** */
     this.companyService.findByShortName("MAIF")
     .then( c=>
     {
      this.productClassService.findByCompanyAndName(c.id,"Véhicule et mobilité")
      .then (pc =>
        {
          let productDto = {
            "productClassId": pc.id, 
            "productTypeId":1,
            "risqId":r.id,
            "name": "Auto",
            "imagePath":"assets\/images-trilis\/types\/voituremoderne.png" , "description":" ",
            "iconPath":"",
            "common":true
          };
          this.create(productDto);
          productDto = {
            "productClassId": pc.id, 
            "productTypeId":1,
            "risqId":r.id,
            "name": "Deux roues",
            "imagePath":"assets\/images-trilis\/types\/moto1.png" , "description":" ",
            "iconPath":"",
            "common":true
          };
          this.create(productDto);
          productDto = {
            "productClassId": pc.id, 
            "productTypeId":1,
            "risqId":r.id,
            "name": "Camping-car",
            "imagePath":"assets\/images-trilis\/types\/campingcar1.png" , "description":" ",
            "iconPath":"",
            "common":true
          };
          this.create(productDto);
          productDto = {
            "productClassId": pc.id, 
            "productTypeId":1,
            "risqId":r.id,
            "name": "Quad",
            "imagePath":"assets\/images-trilis\/types\/atv.png" , "description":" ",
            "iconPath":"",
            "common":true
          };
          this.create(productDto);
          productDto = {
            "productClassId": pc.id, 
            "productTypeId":1,
            "risqId":r.id,
            "name": "Trotinette",
            "imagePath":"assets\/images-trilis\/types\/trottinette1.png" , "description":" ",
            "iconPath":"",
            "common":true
          };
          this.create(productDto);
        })
     })

    //**** */
     //SUNU
     //**** */
     this.companyService.findByShortName("SUNU")
     .then( c=>
     {
      this.productClassService.findByCompanyAndName(c.id,"Indemnité funérailles")
      .then (pc =>
        {
          let productDto = {
            "productClassId": pc.id, 
            "productTypeId":1,
            "name": "Assistance frais funérailles",
            "imagePath":"assets\/images-trilis\/types_produits\/tombe.jfif", "description":" ",
            "iconPath":"",
            "common":true
          };
          this.create(productDto);
          productDto = {
            "productClassId": pc.id, 
            "productTypeId":1,
            "name": "BOKAMIN",
            "imagePath":"assets\/images-trilis\/types_produits\/icons8-plante-en-pot-100.png" , "description":" ",
            "iconPath":"",
            "common":true
          };
          this.create(productDto);
          productDto = {
            "productClassId": pc.id, 
            "productTypeId":1,
            "name": "SOUTRA FAMILLE",
            "imagePath":"assets\/images-trilis\/types\/campingcar1.png" , "description":" ",
            "iconPath":"",
            "common":true
          };
          this.create(productDto);
          productDto = {
            "productClassId": pc.id, 
            "productTypeId":1,
            "name": "CERTICOMPTE",
            "imagePath":"assets\/images-trilis\/types_produits\/icons8-plante-en-pot-100.png" , "description":" ",
            "iconPath":"",
            "common":true
          };
          this.create(productDto);
          productDto = {
            "productClassId": pc.id, 
            "productTypeId":1,
            "name": "ECOPARRAINAGE",
            "imagePath":"assets\/images-trilis\/types_produits\/icons8-plante-en-pot-100.png" , "description":" ",
            "iconPath":"",
            "common":true
          };
          this.create(productDto);
          productDto = {
            "productClassId": pc.id, 
            "productTypeId":1,
            "name": "PREVOYANCE COLLECTIVE",
            "imagePath":"assets\/images-trilis\/types_produits\/icons8-plante-en-pot-100.png" , "description":" ",
            "iconPath":"",
            "common":true
          };
          this.create(productDto);

        })

        this.productClassService.findByCompanyAndName(c.id,"Epargne retraite")
        .then (pc =>
          {
            let productDto = {
              "productClassId": pc.id, 
              "productTypeId":1,
              "name": "LE MANS RETRAITE",
              "imagePath":"assets\/images-trilis\/types_produits\/tombe.jfif", "description":" ",
              "iconPath":"",
              "common":true
            };
            this.create(productDto);
            productDto = {
              "productClassId": pc.id, 
              "productTypeId":1,
              "name": "ECOTRESOR",
              "imagePath":"assets\/images-trilis\/types_produits\/icons8-plante-en-pot-100.png" , "description":" ",
              "iconPath":"",
              "common":true
            };
            this.create(productDto);
            productDto = {
              "productClassId": pc.id, 
              "productTypeId":1,
              "name": "EPARGNE GAGNANT",
              "imagePath":"assets\/images-trilis\/types\/campingcar1.png" , "description":" ",
              "iconPath":"",
              "common":true
            };
            this.create(productDto);
            productDto = {
              "productClassId": pc.id, 
              "productTypeId":1,
              "name": "MOBILE EPARGNE",
              "imagePath":"assets\/images-trilis\/types_produits\/icons8-plante-en-pot-100.png" , "description":" ",
              "iconPath":"",
              "common":true
            };
            this.create(productDto);
            productDto = {
              "productClassId": pc.id, 
              "productTypeId":1,
              "name": "TOP ASSUR",
              "imagePath":"assets\/images-trilis\/types_produits\/icons8-plante-en-pot-100.png" , "description":" ",
              "iconPath":"",
              "common":true
            };
            this.create(productDto);
            productDto = {
              "productClassId": pc.id, 
              "productTypeId":1,
              "name": "MIXTE PLUS",
              "imagePath":"assets\/images-trilis\/types_produits\/icons8-plante-en-pot-100.png" , "description":" ",
              "iconPath":"",
              "common":true
            };
            this.create(productDto);
            productDto = {
              "productClassId": pc.id, 
              "productTypeId":1,
              "name": "INDEMNITES FIN DE CARRIERE",
              "imagePath":"assets\/images-trilis\/types_produits\/icons8-plante-en-pot-100.png" , "description":" ",
              "iconPath":"",
              "common":true
            };
            this.create(productDto);
            productDto = {
              "productClassId": pc.id, 
              "productTypeId":1,
              "name": "RETRAITE COLLECTIVE",
              "imagePath":"assets\/images-trilis\/types_produits\/icons8-plante-en-pot-100.png" , "description":" ",
              "iconPath":"",
              "common":true
            };
            this.create(productDto);
            productDto = {
              "productClassId": pc.id, 
              "productTypeId":1,
              "name": "RETRAITE COLLECTIVE",
              "imagePath":"assets\/images-trilis\/types_produits\/icons8-plante-en-pot-100.png" , "description":" ",
              "iconPath":"",
              "common":true
            };
            this.create(productDto);

          })

          this.productClassService.findByCompanyAndName(c.id,"Education")
        .then (pc =>
          {
            let productDto = {
              "productClassId": pc.id, 
              "productTypeId":1,
              "name": "CAPITAL ETUDES BICICI",
              "imagePath":"assets\/images-trilis\/types_produits\/tombe.jfif" , "description":" ",
              "iconPath":"",
              "common":true
            };
            this.create(productDto);
            productDto = {
              "productClassId": pc.id, 
              "productTypeId":1,
              "name": "VISA ETUDES PLUS",
              "imagePath":"assets\/images-trilis\/types_produits\/icons8-plante-en-pot-100.png" , "description":" ",
              "iconPath":"",
              "common":true
            };
            this.create(productDto);  
          })

     })

    })

    
  };      
}

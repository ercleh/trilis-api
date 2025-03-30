/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, getConnection, getRepository, QueryRunner, Repository} from 'typeorm';
import { NomCreateDto } from '../dto/_nom-create.dto';
import { Nom } from '../entity/_nom.entity';
import { Primaire } from '../entity/_primaire.entity';
  
@Injectable()
export class NomService {
 
  constructor(
    @InjectRepository(Nom)
    private repo:Repository<Nom>,
    @InjectRepository(Primaire)
    private primaireRepo:Repository<Primaire>,
  ) {}

 
  findAll(): Promise<Nom[]> {
    return this.repo.find();
  }

  findByName(name: string): Promise<Nom | undefined> {
    const nom = getRepository(Nom)
      .createQueryBuilder("nom")
      .where("nom.name = :nom", { name: name })
      .getOne();
    return nom;
  }
  
  create(item: NomCreateDto): Promise<Nom> {
    return this.repo.save(item);
  }

  //Repository par instanciation  --> la meilleure méthode est l'injection de dépendance
  //----------------------------
async exemple()
{
  const connection: Connection = getConnection();
      const queryRunner: QueryRunner = connection.createQueryRunner();
      await queryRunner.connect(); // performs connection
      const users = await queryRunner.manager.find(Nom);
  const nomRepository = queryRunner.manager.getRepository("nom");

  // or

  const nomRepository2 = connection.getRepository<Nom>("nom"); 
 }

    // créer une occurence en valorisant  l'objet de clé étrangère
     async seed_nom2()
     {
         const primaire = await this.primaireRepo.createQueryBuilder("primaire") 
                        .where("primaire.name = :name", { name:"Valeur"})
                        .getOne();
       let nomACreer: Nom;
       // eslint-disable-next-line prefer-const
      //  nomACreer = {
      //    primaire:primaire,
      //    name:"" 
      //   ...
      // }
       await this.repo.save(nomACreer);
       
    }

}

/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult, getConnection, Connection, QueryRunner } from 'typeorm';
import { CompanyDto } from '../dto/company.dto';
import { CompanyCreateDto } from '../dto/company-create.dto';
import { Company } from 'src/reference/entity/company.entity';

@Injectable()
export class CompanyService {

  constructor(
    @InjectRepository(Company)
    private repo:Repository<CompanyDto>,
  ) {}
 
  async findAll(): Promise<CompanyDto[]> {
    return this.repo.find();
  }

  async findOne(id: number): Promise<CompanyDto> {
    const item = await this.repo.findOne({ where: { id: id } });
    if (!item) {
      throw new HttpException(
      `Entité inexistante`,
      HttpStatus.BAD_REQUEST,
     );
  } 
  return item;
  }
  findByShortName(param: string): Promise<CompanyDto> {
    const company =  this.repo.findOne({ where : {shortName: param }})   
    return company;
  }

  async findOneWithRelations(id: number): Promise<CompanyDto> {
    const item = await this.repo.findOne({
        where: { id : id},
        relations: ['productClasses', 'coverages','insuranceStatuss','driverExperiences'],
    });

    if (!item) {
        throw new HttpException(
        `Entité inexistante`,
        HttpStatus.BAD_REQUEST,
       );
    } 
    return item;
}

  findInsuranceStatuss(id: number){
    return this.repo.findOne( 
      {
        where: { id: id },
        relations: ['insuranceStatuss'],
      });
     }
   
#region_create
//fonctionne
async create(item: CompanyCreateDto): Promise<CompanyDto> {
  const name = item.name;
  const shortName = item.shortName;
  // check if exists in the db    
  let itemInDb = await this.repo.findOne({ 
      where: {name} 
  });
  if (itemInDb) {
    console.log(name + " existe deja") 
    throw new HttpException('Entité " + name + " déjà existante', HttpStatus.BAD_REQUEST);    
  }
  itemInDb = await this.repo.findOne({ 
    where: {shortName} 
  });
  if (itemInDb) {
    console.log(shortName + " existe deja") 
    throw new HttpException('Entité " + shortName + " déjà existante', HttpStatus.BAD_REQUEST);    
  }
  const newEntity = this.repo.create(item);
  const savedEntity = this.repo.save(newEntity);
  return savedEntity; 
}
#endregion
//#region update
  async update_repo(item: CompanyDto): Promise<UpdateResult> {
    const { id,name,shortName,imagePath} = item

    // check if exists in the db    
    const itemInDb = await this.repo.findOne({ 
        where: {id} 
    });
    if (!itemInDb) {
        throw new HttpException('Entité inexistante', HttpStatus.BAD_REQUEST);    
    }
    return this.repo.update(item.id, item);
  }

  async update_query(item: CompanyDto): Promise<UpdateResult> {
    const { id,name,shortName,imagePath} = item

    // check if param exists in the db    
    const itemInDb = this.repo.findOne({ 
        where: {id} 
    });
    if (!itemInDb) {
        throw new HttpException('Entité inexistante', HttpStatus.BAD_REQUEST);    
    }
    return getConnection()
        .createQueryBuilder()
        .update(Company)
        .set({ name, shortName,imagePath})
        .where("id = :id", { id: id })
        .execute();
    }
//#endregion
//#region delete
//fonctionne
  async delete(id): Promise<DeleteResult> {
    try{
      const r = await this.repo.delete(id);
      return r;
    }
    catch (error) {
      return (error?.message ?? "");
    }   
  }
//#endregion
  //#region clear/chargement
  async clearCompanies():Promise<DeleteResult>{
    try
    { 
      const connection: Connection = getConnection();
       const queryRunner: QueryRunner = connection.createQueryRunner();
      await queryRunner.connect(); // performs connection 
      const result = await  connection.createQueryBuilder()
      .delete()
      .from(Company)
      .execute() 
      console.log(result)
      queryRunner.query(`ALTER TABLE \`company\`AUTO_INCREMENT = 1`); 
     }
    catch (error) {
      return (error?.message ?? "");
    }   
}

async seedCompanies():Promise<string>{
  try
    { 
    await this.clearCompanies();
    let company: CompanyCreateDto;
    company = {
      name: "SUNU",
      shortName: "SUNU",
      imagePath: "assets/images-trilis/logos_compagnies/sunu.png",
      iconPath:"",
      color:""
    }
    this.create(company);

    company = {
      name: "ALLIANZ",
      shortName: "ALLIANZ",
      imagePath: "assets/images-trilis/logos_compagnies/allianz.png",
      iconPath:"",
      color:""
    }
    this.create(company);

    company = {
      name: "MAAF",
      shortName: "MAAF",
      imagePath: "assets/images-trilis/logos_compagnies/maaf.png",
      iconPath:"",
      color:""
    }
    this.create(company);

    company = {
      name: "GROUPAMA",
      shortName: "GROUPAMA",
      imagePath: "assets/images-trilis/logos_compagnies/groupama.png",
      iconPath:"",
      color:""
    }
    this.create(company);

    company = {
      name: "MAIF",
      shortName: "MAIF",
      imagePath:"assets/images-trilis/logos_compagnies/maif.png",
      iconPath:"",
      color:""
    }
    this.create(company);

    company = {
      name: "AXA",
      shortName: "AXA",
      imagePath:"assets/images-trilis/logos_compagnies/axa.png",
      iconPath:"",
      color:""
    }
    this.create(company);
    company = {
      name: "ATLANTIQUE ASSURANCE",
      shortName: "ATLANTIQUE ASSURANCE",
      imagePath: "assets/images-trilis/logos_compagnies/atlantique.png",
      iconPath:"",
      color:""
    }
    this.create(company);
    company = {
        name: "LA LOYALE",
        shortName: "LA LOYALE",
        imagePath: "assets/images-trilis/logos_compagnies/loyale.png",
        iconPath:"",
        color:""
      }
      this.create(company);
      return "ok"
  }
  catch (error) {
    return (error?.message ?? "");
  }   
}
//#endregion
}


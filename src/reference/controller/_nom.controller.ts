/* eslint-disable prettier/prettier */
/* eslint-disable no-var */
/* eslint-disable prettier/prettier */
import {
    Body,
    Controller,
    Get,
    HttpException,
    HttpStatus,
    Logger,
    Post,
    UseFilters,
    UsePipes,
    
    ValidationPipe,
  } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/Exception/http-exception.filter';
import { Connection, getConnection, QueryRunner, Repository} from 'typeorm';
import { NomCreateDto } from '../dto/_nom-create.dto';
import { Nom } from '../entity/_nom.entity';
import { Primaire } from '../entity/_primaire.entity';
import { NomService } from '../service/_nom.service';
   
  @Controller('nom')
  export class NomController {
    constructor(private readonly nomService: NomService) {
    }
  
    logger: Logger = new Logger(NomController.name)

    @Get()
    async read(): Promise<Nom[]> {
      return this.nomService.findAll();
    }
    @Post('create')
    @UsePipes(new ValidationPipe())
    async create(@Body() item: NomCreateDto): Promise<Nom> {
      return this.nomService.create(item);
    }
  
    //créer une occurence 
    // en valorisant  l'Id de la table de clé étrangère
    @Post('seed_nom')
    async seed_nom(){
      try{
        var item: NomCreateDto;
        item = {
          id:1,
          champs_obligatoire:"toto",
          name: "",
          shortName: ""
        }
        this.nomService.create(item);
      }
      catch (error){
        this.logger.error(error?.message ?? "");
        throw error;
      }
     }
 
     @Post('delete-nom')
     async delete_ceiling(){
      await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Nom)
      .execute();
     }
 
     @Get('findAll')
     async findAll() {
       throw new HttpException({
         status: HttpStatus.FORBIDDEN,
         error: 'Access to this site is forbidden',
       }, 403);
     }
   
     @Get('findOne')
     @UseFilters(new HttpExceptionFilter())
     async findOne() {
       throw new HttpException({
         status: HttpStatus.FORBIDDEN,
         error: 'Access to this site is forbidden',
       }, 403);
     }
   
     @Post('use-query-runner')
     async  use_query_runner()
     {
      const connection: Connection = getConnection();
      const queryRunner: QueryRunner = connection.createQueryRunner();
      await queryRunner.connect(); // performs connection
      const users = await queryRunner.manager.find(Nom);
      await queryRunner.release(); // release connection
     }

     @Post('reset-auto-increment')
     async  reset_auto_increment()
     {
      const connection: Connection = getConnection();
      const queryRunner: QueryRunner = connection.createQueryRunner();
      await queryRunner.connect(); // performs connection
      queryRunner.query(`ALTER TABLE \`nom\`AUTO_INCREMENT = 1`);
      await queryRunner.release(); // release connection
     }

     async createWithTransaction(noms: Nom[]) {
      const connection: Connection = getConnection(); 
      const queryRunner = connection.createQueryRunner();
   
           await queryRunner.connect();
           await queryRunner.startTransaction();
   
           try {
               await queryRunner.manager.save(noms[0]);
               await queryRunner.manager.save(noms[1]);
   
               await queryRunner.commitTransaction();
           }catch (err) {
               await queryRunner.rollbackTransaction();
           }finally {
               await queryRunner.release();
           }
   }

   @Post('load-references')
   async load_references()
   {
     const arr = [ {"id":"10", "class": "child-of-9"}, {"id":"11", "class": "child-of-10"}];
   
     for (let i = 0; i < arr.length; i++){
       console.log("<br><br>array index: " + i);
       const obj = arr[i];
       for (const key in obj){
         const value = obj[key];
         console.log("<br> - " + key + ": " + value);
       }
     }
   }

  }
  
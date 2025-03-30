import {
    Body,
    Controller,
    Get,
    Logger,
    Post,
    UsePipes,
    ValidationPipe,
  } from '@nestjs/common';
import { Connection, getConnection, QueryRunner } from 'typeorm';
import { RelationshipCreateDto } from '../dto/relationship-create.dto';
import { RelationshipDto } from '../dto/relationship.dto';
import { Relationship } from '../entity/relationship.entity';
import { RelationshipService } from '../service/relationship.service';
  
  @Controller('relationship')
  export class RelationshipController {
    constructor(private readonly relationshipService: RelationshipService) {}
  
    logger: Logger = new Logger(RelationshipController.name);

    @Get()
    async read(): Promise<RelationshipDto[]> {
      return this.relationshipService.findAll();
    }
    @Post('create')
    @UsePipes(new ValidationPipe())
    async create(@Body() item: RelationshipCreateDto): Promise<RelationshipDto> {
      return this.relationshipService.create(item);
    }
  
    static seed(relationshipService:RelationshipService,logger:Logger){
      try
     { 
      let relationship: RelationshipCreateDto;
        relationship = {
        numberOrder:1,
        name: "Assuré" 
      }
      relationshipService.create(relationship);
      relationship = {
        numberOrder:2,
        name: "Conjoint"
       }
       relationshipService.create(relationship);
       relationship = {
        numberOrder:3,
        name: "Concubin"
       }
       relationshipService.create(relationship);
       relationship = {
        numberOrder:4,
        name: "Enfant à charge"
       }
       relationshipService.create(relationship);
       relationship = {
        numberOrder:5,
        name: "Enfant"
       }
       relationshipService.create(relationship);
       relationship = {
        numberOrder:6,
        name: "Autre"
       }
       relationshipService.create(relationship);
      }
      catch (error) {
        logger.error(error?.message ?? "");
        throw error;
      }    
     }

     static clear(_relationshipService:RelationshipService, _logger:Logger)
     {
      try
      {   
       _relationshipService.clear();
      }
       catch (error) {
        _logger.error(error?.message ?? "");
        throw error;
      }   
    }

     @Get('seed')
      async seed_relationships(){
        try {
          const connection: Connection = getConnection();
          const queryRunner: QueryRunner = connection.createQueryRunner();
          await queryRunner.connect();  
          queryRunner.query(`ALTER TABLE \`relationship\`AUTO_INCREMENT = 1`); 
          RelationshipController.seed(this.relationshipService, this.logger);
          }
          catch (error) {
            this.logger.error(error?.message ?? "");
            throw error;
        }
       }

    @Get('clear')
    async clearRelationships(){
      RelationshipController.clear(this.relationshipService,this.logger);
    }

    @Get('reinit-autoincrement')
    async reinit_autoincrement(){

      const connection: Connection = getConnection();
      const queryRunner: QueryRunner = connection.createQueryRunner();
      await queryRunner.connect(); // performs connection 

      try {
            queryRunner.query(`ALTER TABLE \`relationship\`AUTO_INCREMENT = 1`); 
      }
      catch (error) {
        this.logger.error(error?.message ?? "");
        throw error;
       }
       
      }
  }

  
  
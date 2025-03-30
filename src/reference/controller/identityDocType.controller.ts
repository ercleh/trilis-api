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
import { IdentityDocTypeService } from '../service/identityDocType.service';
import { IdentityDocTypeDto } from '../dto/identityDocType.dto';
import { IdentityDocTypeCreateDto } from '../dto/identityDocType-create.dto';
  
  @Controller('identity-doc-type')
  export class IdentityDocTypeController {
    constructor(private readonly service: IdentityDocTypeService) {}
  
    logger: Logger = new Logger(IdentityDocTypeController.name);

    @Get()
    async read(): Promise<IdentityDocTypeDto[]> {
      return this.service.findAll();
    }
    @Post('create')
    @UsePipes(new ValidationPipe())
    async create(@Body() item: IdentityDocTypeCreateDto): Promise<IdentityDocTypeDto> {
      return this.service.create(item);
    }
    @Get('seed')
    async seed_identity_doc_type(){
      try {
        const connection: Connection = getConnection();
        const queryRunner: QueryRunner = connection.createQueryRunner();
        await queryRunner.connect();  
        queryRunner.query(`ALTER TABLE \`identity_doc_type\`AUTO_INCREMENT = 1`); 
        IdentityDocTypeController.seed(this.service, this.logger);
        }
        catch (error) {
          this.logger.error(error?.message ?? "");
          throw error;
      }
     }

  @Get('clear')
  async clearIdentityDocType(){
    IdentityDocTypeController.clear(this.service,this.logger);
  } 

     static seed(service:IdentityDocTypeService,logger:Logger){
        try
          { 
            service.seed();
          }
          catch (error) {
            logger.error(error?.message ?? "");
            throw error;
          }    
         }
    
     static clear(service:IdentityDocTypeService, _logger:Logger)
     {
      try
      {   
       service.clear();
      }
       catch (error) {
        _logger.error(error?.message ?? "");
        throw error;
      }   
    }
  }

  
  
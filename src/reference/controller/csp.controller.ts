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
import { CSPService } from '../service/csp.service';
import { CSPDto } from '../dto/csp.dto';
import { CSPCreateDto } from '../dto/csp-create.dto';
  
  @Controller('csp')
  export class CSPController {
    constructor(private readonly cspService: CSPService) {}
  
    logger: Logger = new Logger(CSPController.name);

    @Get()
    async read(): Promise<CSPDto[]> {
      return this.cspService.findAll();
    }
    @Post('create')
    @UsePipes(new ValidationPipe())
    async create(@Body() item: CSPCreateDto): Promise<CSPDto> {
      return this.cspService.create(item);
    }
    @Get('seed')
    async seed_csp(){
      try {
        const connection: Connection = getConnection();
        const queryRunner: QueryRunner = connection.createQueryRunner();
        await queryRunner.connect();  
        queryRunner.query(`ALTER TABLE \`csp\`AUTO_INCREMENT = 1`); 
        CSPController.seed(this.cspService, this.logger);
        }
        catch (error) {
          this.logger.error(error?.message ?? "");
          throw error;
      }
     }

  @Get('clear')
  async clearCSP(){
    CSPController.clear(this.cspService,this.logger);
  } 

     static seed(cspService:CSPService,logger:Logger){
        try
          { 
            cspService.seed();
          }
          catch (error) {
            logger.error(error?.message ?? "");
            throw error;
          }    
         }
    
     static clear(cspService:CSPService, _logger:Logger)
     {
      try
      {   
       cspService.clear();
      }
       catch (error) {
        _logger.error(error?.message ?? "");
        throw error;
      }   
    }
  }

  
  
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, getConnection } from "typeorm";
import { CSP } from "../entity/csp.entity";
import { CSPDto } from "../dto/csp.dto";
import { CSPCreateDto } from "../dto/csp-create.dto";
import { ICSP } from "../Interfaces/iCSP";
import { cspData } from "../data/csp-data";

@Injectable()
export class CSPService {

  constructor(
    @InjectRepository(CSP)
    private repo:Repository<CSPDto>,
  ) {}

  create(item: CSPCreateDto): Promise<CSPDto> {
    return this.repo.save(item);
  }
  clear(){
    getConnection()
   .createQueryBuilder()
   .delete()
   .from(CSP)
   .execute()
   .then(r=>getConnection().createQueryRunner().query(`ALTER TABLE \`csp\`AUTO_INCREMENT = 1`)
 )
 }
 findAll(): Promise<CSPDto[]> {
    return this.repo.find();
  }

seed(){
        this.clear();
        cspData.filter(item=>item.code_CSP.length == 1)
               .map((data: ICSP) => {
        const newCSP = {
            "code":  data.code_CSP, 
            "name" :data.libelle
            };
        this.create(newCSP) ;
      }
      );
}
}
  
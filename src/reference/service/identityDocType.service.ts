import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, getConnection } from "typeorm";
import { IdentityDocType } from "../entity/identityDocType.entity";
import { IdentityDocTypeCreateDto } from "../dto/identityDocType-create.dto";
import { IdentityDocTypeDto } from "../dto/identityDocType.dto";

@Injectable()
export class IdentityDocTypeService {

  constructor(
    @InjectRepository(IdentityDocType)
    private repo:Repository<IdentityDocTypeDto>,
  ) {}

  create(item: IdentityDocTypeCreateDto): Promise<IdentityDocTypeDto> {
    return this.repo.save(item);
  }
  clear(){
    getConnection()
   .createQueryBuilder()
   .delete()
   .from(IdentityDocType)
   .execute()
   .then(r=>getConnection().createQueryRunner().query(`ALTER TABLE \`identity_doc_type\`AUTO_INCREMENT = 1`)
 )
 }
 findAll(): Promise<IdentityDocTypeDto[]> {
    return this.repo.find();
  }

seed(){
        this.clear();
        let item: IdentityDocTypeCreateDto;
        item = {
            numberOrder:0,
            code: "CNI",
            name: "Carte d'identité",
        }
        this.create(item);
        item = {
            numberOrder:1,
            code: "PASSPT",
            name: "Passeport",
        }
        this.create(item);
        item = {
            numberOrder:2,
            code: "PERMIS",
            name: "Permis de conduire",
        }
        this.create(item);
        item = {
            numberOrder:3,
            code: "AUTRE",
            name: "Autre document d'identité",
        }
        this.create(item);
}
}
  
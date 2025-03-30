import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getConnection} from 'typeorm';
import { Title } from '../entity/title.entity';
import { TitleDto } from '../dto/title.dto';
import { TitleCreateDto } from '../dto/title-create.dto';
   
@Injectable()
export class TitleService {
 
  constructor(
    @InjectRepository(Title)
    private repo:Repository<TitleDto>,
  ) {}

 
  findAll(): Promise<TitleDto[]> {
    return this.repo.find();
  }

  create(item: TitleCreateDto): Promise<TitleDto> {
    return this.repo.save(item);
  }
  
  clear(){
    getConnection()
  .createQueryBuilder()
  .delete()
  .from(Title)
  .execute()
}

seed()
{
  this.clearTitles();
  let titleCreateDto = {
    "name": "Monsieur",
    "shortName":"M.",
    "type":"P"
  };
  this.create(titleCreateDto); 
  titleCreateDto = {
    "name": "Madame",
    "shortName":"Mme",
    "type":"P"
  };
}

clearTitles(){
  getConnection()
.createQueryBuilder()
.delete()
.from(Title)
.execute()
.then(r=>getConnection().createQueryRunner().query(`ALTER TABLE \`title\`AUTO_INCREMENT = 1`)
)
}
 }


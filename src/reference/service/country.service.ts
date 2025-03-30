import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Country } from "../entity/country.entity";
import { CountryDto } from "../dto/country.dto";
import { Repository, getConnection } from "typeorm";
import { CountryCreateDto } from "../dto/country-create.dto";
import { countryData } from "../data/country-data";
import { ICountry } from "../Interfaces/iCountry";

@Injectable()
export class CountryService {

  constructor(
    @InjectRepository(Country)
    private repo:Repository<CountryDto>,
  ) {}

  create(country: CountryCreateDto): Promise<CountryDto> {
    return this.repo.save(country);
  }
  clear(){
    getConnection()
   .createQueryBuilder()
   .delete()
   .from(Country)
   .execute()
   .then(r=>getConnection().createQueryRunner().query(`ALTER TABLE \`country\`AUTO_INCREMENT = 1`)
 )
 }
 findAll(): Promise<CountryDto[]> {
    return this.repo.find();
  }

seed(){
        this.clear();
        countryData.map((data: ICountry) => {
        const newCountry = {
            "country":  data.en_short_name, 
            "nationality" :data.nationality,
            "symbol":data.alpha_2_code, 
            "imagePath":""  
            };
        this.create(newCountry) ;
      }
      );
}
}
  
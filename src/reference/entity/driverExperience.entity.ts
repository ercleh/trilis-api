/* eslint-disable prettier/prettier */
import { Column, BaseEntity, Unique, PrimaryGeneratedColumn, Entity, OneToMany, CreateDateColumn, UpdateDateColumn, JoinTable
} from "typeorm";
import { Company } from "./company.entity";

@Entity("driver_experience")
@Unique(["name","shortName"])
export class DriverExperience  extends BaseEntity {
@PrimaryGeneratedColumn()id: number;
@Column({type: 'int'}) numberOrder: number;
@Column({type: 'varchar',length: 100}) name: string
@Column({type: 'varchar',length: 20}) shortName: string
@CreateDateColumn() createdAt: Date;
@UpdateDateColumn() updatedAt?: Date;

//propriété de navigation vers l atable InsuranceStatusCompany
@OneToMany(item => Company, item => item.driverExperiences) 
companies: Company[];  

}

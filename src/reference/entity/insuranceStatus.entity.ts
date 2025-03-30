/* eslint-disable prettier/prettier */
import { Column, BaseEntity, Unique, PrimaryGeneratedColumn, Entity, OneToMany, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable
} from "typeorm";
import { Company } from "./company.entity";

@Entity("insurance_status")
@Unique(["name","shortName"])
export class InsuranceStatus  extends BaseEntity {
@PrimaryGeneratedColumn()id: number;
@Column({type: 'int'}) numberOrder: number;
@Column({type: 'varchar',length: 100}) name: string
@Column({type: 'varchar',length: 20}) shortName: string
@CreateDateColumn() createdAt: Date;
@UpdateDateColumn() updatedAt?: Date;

//propriété de navigation vers la table Company
@ManyToMany(item => Company, item => item.insuranceStatuss) 
companies: Company[];  

}

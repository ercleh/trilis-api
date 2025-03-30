/* eslint-disable prettier/prettier */
import { BaseEntity, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Coverage } from "./coverage.entity";
import { ProductClass } from "./productClass.entity";
import { InsuranceStatus } from "./insuranceStatus.entity";
import { DriverExperience } from "./driverExperience.entity";
import { Base1Entity } from "@shared/entity/base1.entity";

@Entity('company')
@Unique(['shortName','name']) // Contraintes d'unicité sur "username"
export class Company extends Base1Entity {

  @Column({ type: 'varchar', nullable: false })name: string;
  @Column({ type: 'varchar', nullable: false })shortName: string;
  @Column({ type: 'varchar' })imagePath: string;
  @Column({ type: 'varchar' })iconPath: string;
  @Column({ type: 'varchar' })color: string;

  //objets de navigation
  //--------------------
  //classes de produits
  @OneToMany(type => ProductClass, item => item.company) productClasses: ProductClass[];  
  //garanties
  @OneToMany(type => Coverage, item => item.company) coverages: Coverage[];  
  //statuts d'assurance
  @ManyToMany(type => InsuranceStatus, item => item.companies) 
  @JoinTable()
  insuranceStatuss: InsuranceStatus[];  
  //experience conducteur
  @ManyToMany(type => DriverExperience, item => item.companies) 
  @JoinTable()
  driverExperiences: DriverExperience[];  
}

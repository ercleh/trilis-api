/* eslint-disable prettier/prettier */
import { Base1Entity } from "@shared/entity/base1.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Ceiling } from "./ceiling.entity";
import { Company } from "./company.entity";
import { CoverageClass } from "./coverageClass.entity";
import { CoveragePackage } from "./coveragePackage.entity";
import { Deductible } from "./deductible.entity";
import { Risq } from "./risq.entity";
import { CoverageVersion } from "./coverageVersion.entity";

@Entity('coverage')
export class Coverage  extends Base1Entity {

    // clés étrangères
    //compagnie  
    @ManyToOne(type => Company, item => item.coverages) company: Company;  
    @Column()companyId: number;
    
    //classe
    @ManyToOne(type => CoverageClass, item => item.coverages) coverageClass: CoverageClass;  
    @Column()coverageClassId: number;
    
    //risque
    @ManyToOne(type => Risq, item => item.coverages) risq: Risq;  
    @Column()risqId: number;
    
    @Column({type: 'varchar',length: 100})name: string
    @Column({type: 'varchar',length: 50})shortName: string
    @Column()description: string
    @Column()imagePath: string
    @Column({type: 'date'}) startDate: Date;
    @Column({type: 'date'}) endDate?: Date;

    // objets navigation 1-n
    // plafonds  
    @OneToMany(() => Ceiling, item => item.coverage) ceilings: Ceiling[];  

    // franchises  
    @OneToMany(() => Deductible, item => item.coverage) deductibles: Deductible[];  

    // versions
    @OneToMany(type => CoverageVersion, item => item.coverage) coverageVersions: CoverageVersion[];  

    // garanties-formules
    @OneToMany(type => CoveragePackage, item => item.coverage) coveragePackages: CoveragePackage[];  
}

 
 

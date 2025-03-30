import { Base1Entity } from "@shared/entity/base1.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Coverage } from "./coverage.entity";
import { Package } from "./package.entity";
import { DeductibleVersion } from "./deductibleVersion.entity";

@Entity("deductible")
export class Deductible extends Base1Entity {
    // clés étrangères
    // formule
    @ManyToOne(() => Package, item => item.deductibles) package?: Package; 
    @Column()packageId: number;

    //garantie
    @ManyToOne(() => Coverage, item => item.deductibles) coverage?: Coverage;
    @Column()coverageId: number; 

    @Column({ type: 'date' })startDate: Date;
    @Column({type: 'date'}) endDate?: Date;

    // objets navigation 1-n
    // versions des plafonds  
    @OneToMany(() => DeductibleVersion, item => item.deductible) deductibleVersions: DeductibleVersion[];  

}
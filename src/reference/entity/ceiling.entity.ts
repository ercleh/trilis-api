import { Base1Entity } from "@shared/entity/base1.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Coverage } from "./coverage.entity";
import { Currency } from "./currency.entity";
import { Package } from "./package.entity";
import { CeilingVersion } from "./ceilingVersion.entity";

@Entity("ceiling")
export class Ceiling  extends Base1Entity {
    // clés étrangères
    // formule
    @ManyToOne(() => Package, item => item.ceilings) package?: Package; 
    @Column()packageId: number;

    //garantie
    @ManyToOne(() => Coverage, item => item.ceilings) coverage?: Coverage;
    @Column()coverageId: number; 

    @Column({ type: 'date' })startDate: Date;
    @Column({type: 'date'}) endDate?: Date;

    // objets navigation 1-n
    // versions des plafonds  
    @OneToMany(() => CeilingVersion, item => item.ceiling) ceilingVersions: CeilingVersion[];  

}
import { Base1Entity } from "@shared/entity/base1.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Coverage } from "./coverage.entity";
import { Currency } from "./currency.entity";
import { Package } from "./package.entity";
import { Deductible } from "./deductible.entity";

@Entity("deductible_version")
export class DeductibleVersion  extends Base1Entity {
    // clés étrangères
    // formule
    @ManyToOne(() => Deductible, item => item.deductibleVersions) deductible?: Deductible; 
    @Column()deductibleId: number;

    //devise
    @ManyToOne(() => Currency, item => item.deductibleVersions) currency: Currency; 
    @Column()currencyId: number;

    @Column({ type: 'date' })startDate: Date;
    @Column({type: 'date'}) endDate?: Date;
    @Column()amount:number; 
    @Column()active:boolean; 
}
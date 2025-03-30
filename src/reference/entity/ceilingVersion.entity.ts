import { Base1Entity } from "@shared/entity/base1.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Coverage } from "./coverage.entity";
import { Currency } from "./currency.entity";
import { Package } from "./package.entity";
import { Ceiling } from "./ceiling.entity";

@Entity("ceiling_version")
export class CeilingVersion  extends Base1Entity {
    // clés étrangères
    // formule
    @ManyToOne(() => Ceiling, item => item.ceilingVersions) ceiling?: Ceiling; 
    @Column()ceilingId: number;

    //devise
    @ManyToOne(() => Currency, item => item.ceilingVersions) currency: Currency; 
    @Column()currencyId: number;

    @Column({ type: 'date' })startDate: Date;
    @Column({type: 'date'}) endDate?: Date;
    @Column()amount:number; 
    @Column()active:boolean; 
}
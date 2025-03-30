/* eslint-disable prettier/prettier */
import { Base1Entity } from "@shared/entity/base1.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Coverage } from "./coverage.entity";
import { Currency } from "./currency.entity";

@Entity('coverage_version')
export class CoverageVersion  extends Base1Entity {
    //clés étrangères
    //---------------
    //Garantie
    @ManyToOne(type => Coverage, item => item.coverageVersions) coverage: Coverage; 
    @Column()coverageId: number;

    //Devise
    @ManyToOne(type => Currency, item => item.coverageVersions) currency: Currency; 
    @Column()currencyId: number;

    @Column({type: 'date'}) startDate: Date;
    @Column({type: 'date'}) endDate?: Date;
    @Column("decimal", { precision: 10, scale: 2 })preTaxValueYear: number;
    @Column("decimal", { precision: 10, scale: 2 })preTaxValueMonth: number;
    @Column()active:boolean; 
}




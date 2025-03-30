/* eslint-disable prettier/prettier */
import { Base1Entity } from "@shared/entity/base1.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Currency } from "./currency.entity";
import { Package } from "./package.entity";

@Entity('package_version')
export class PackageVersion  extends Base1Entity {
    //clés étrangères
    //---------------
    //Package
    @ManyToOne(type => Package, item => item.packageVersions) package: Package; 
    @Column()packageId: number;
    
    //Devise
    @ManyToOne(type => Currency, item => item.packageVersions) currency: Currency; 
    @Column()currencyId: number;
    
    @Column({type:'date'}) startDate: Date;
    @Column({type: 'date'}) endDate: Date;
    @Column("decimal", { precision: 10, scale: 2 }) preTaxValueYear: number;
    @Column("decimal", { precision: 10, scale: 2 }) preTaxValueMonth: number;
    @Column()active:boolean; 
}




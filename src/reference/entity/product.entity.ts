/* eslint-disable prettier/prettier */
import { Base1Entity } from "@shared/entity/base1.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Package } from "./package.entity";
import { ProductClass } from "./productClass.entity";
import { ProductType } from "./productType.entity";
import { Risq } from "./risq.entity";

@Entity('product')
export class Product  extends Base1Entity {

    // clés étrangères
    //----------------
    //Classe de produit
    @ManyToOne(type => ProductClass, productClass => productClass.products) productClass: ProductClass; 
    @Column()productClassId: number;
    
    // Type de produit
    @ManyToOne(type => ProductType, productType => productType.products) productType: ProductType; 
    @Column()productTypeId: number;

    @Column({ type: 'varchar', length: 50 })name: string
    @Column({ type: 'varchar'})description: string
    @Column()imagePath: string;
    @Column()iconPath: string;
    @Column()common: boolean;

    @Column({ type: 'boolean', default: true })
    isActive: boolean;

    //objets de navigation
    //--------------------
    //formules
    @OneToMany(type => Package, item => item.packageType) packages: Package[];  

  } 
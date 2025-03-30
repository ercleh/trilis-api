/* eslint-disable prettier/prettier */
import { Base1Entity } from "@shared/entity/base1.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Company } from "./company.entity";
import { Product } from "./product.entity";
import { Risq } from "./risq.entity";

@Entity('product_class')
export class ProductClass  extends Base1Entity {

    //clés étrangères
    //Compagnie
    @ManyToOne(type => Company, company => company.productClasses) company: Company; 
    @Column()companyId: number;

    //Risque
    @ManyToOne(type => Risq, risq => risq.productClasses) risq: Risq; 
    @Column()risqId: number;

    @Column({ type: 'varchar', length: 50 })name: string
    @Column({ type: 'varchar'})description: string
    @Column()imagePath: string;
    @Column()color: string;

    //objets de navigation
    //produits
    @OneToMany(() => Product, item => item.productClass) products: Product[];  

  } 
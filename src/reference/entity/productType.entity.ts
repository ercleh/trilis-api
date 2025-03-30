/* eslint-disable prettier/prettier */
import { Base1Entity } from "@shared/entity/base1.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany,PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity('product_type')
export class ProductType  extends Base1Entity {

    @Column({ type: 'varchar', length: 50 })name: string

    //objets de navigation
    //-------------------
    //produits
    @OneToMany(() => Product, item => item.productType)products: Product[];  

  } 
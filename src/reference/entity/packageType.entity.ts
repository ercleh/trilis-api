/* eslint-disable prettier/prettier */
import { Base1Entity } from "@shared/entity/base1.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Package } from "./package.entity";
import { Product } from "./product.entity";

@Entity('package_type')
export class PackageType  extends Base1Entity {

    @Column({ type: 'varchar', length: 50 }) name: string
    @Column() imagePath?: string;

    //objets de navigation
    //formules
    @OneToMany(type => Package, item => item.packageType) packages: Package[];  
  } 

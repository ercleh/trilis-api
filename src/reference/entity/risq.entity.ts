/* eslint-disable prettier/prettier */
import { Base1Entity } from "@shared/entity/base1.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Coverage } from "./coverage.entity";
import { Product } from "./product.entity";
import { ProductClass } from "./productClass.entity";

@Entity('risq')
export class Risq  extends Base1Entity {
 
    @Column({ type: 'varchar', length: 50 }) name: string;
    @Column({ type: 'varchar', length: 20 }) shortName: string;
    @Column({ type: 'varchar', nullable: true, length: 100 })imagePath: string;
    @Column({ type: 'varchar', nullable: true, length: 50 })icon: string;
    @Column({ type: 'varchar', nullable: true, length: 20 })color: string;

    //objets de navigation
    //-------------------

    //classes de produits
    @OneToMany(type => ProductClass, item => item.risq) productClasses: ProductClass[];  

    //garanties
    @OneToMany(() => Coverage, item => item.risq) coverages: Coverage[];  

    //vider la table
    public static deleteAll() {
        return this.createQueryBuilder("risq")
             .delete()
    }    

  } 
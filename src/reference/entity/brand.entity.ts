/* eslint-disable prettier/prettier */
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CarModel } from "./carModel.entity";

@Entity('brand')
export class Brand  extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;
    
    @Column({ type: 'varchar', nullable: false })
	name: string;

    @Column({ type: 'varchar' })
    imagePath: string;

	@Column({type:'boolean', default: false})
	common: boolean;
    
	@CreateDateColumn() createdAt: Date;
    @UpdateDateColumn() updateAt?: Date;

	@OneToMany(type => CarModel, item => item.brand) carModels: CarModel[];  

}
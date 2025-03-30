/* eslint-disable prettier/prettier */
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CarMotorization } from "./carMotorization.entity";

@Entity('fiscal-power')
export class FiscalPower  extends BaseEntity {
    @PrimaryGeneratedColumn()
	id: number;
    
	@Column({ type: 'int'})value: number;
	  
	@CreateDateColumn() createdAt: Date;
    @UpdateDateColumn() updateAt?: Date;

	@OneToMany(type => CarMotorization, item => item.fiscalPower) carMotorizations: CarMotorization[];  

}

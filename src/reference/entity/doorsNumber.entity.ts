/* eslint-disable prettier/prettier */
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CarMotorization } from "./carMotorization.entity";

@Entity('doors-number')
export class DoorsNumber  extends BaseEntity {
    @PrimaryGeneratedColumn()
	id: number;
    
	@Column({ type: 'int'})value: number;
	  
	@CreateDateColumn() createdAt: Date;
    @UpdateDateColumn() updateAt?: Date;

	@OneToMany(type => CarMotorization, item => item.doorsNumber) carMotorizations: CarMotorization[];  

}

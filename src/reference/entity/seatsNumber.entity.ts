/* eslint-disable prettier/prettier */
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CarMotorization } from "./carMotorization.entity";

@Entity('seats-number')
export class SeatsNumber  extends BaseEntity {
    @PrimaryGeneratedColumn()
	id: number;
    
	@Column({ type: 'int'})value: number;
	  
	@CreateDateColumn() createdAt: Date;
    @UpdateDateColumn() updateAt?: Date;

	@OneToMany(type => CarMotorization, item => item.seatsNumber) carMotorizations: CarMotorization[];  

}

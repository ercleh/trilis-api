/* eslint-disable prettier/prettier */
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CarMotorization } from "./carMotorization.entity";

@Entity('real-power')
export class RealPower  extends BaseEntity {
    @PrimaryGeneratedColumn()
	id: number;
    
	@Column({ type: 'int'})value: number;
	  
	@CreateDateColumn() createdAt: Date;
    @UpdateDateColumn() updateAt?: Date;

	@OneToMany(type => CarMotorization, item => item.realPower) carMotorizations: CarMotorization[];  

}

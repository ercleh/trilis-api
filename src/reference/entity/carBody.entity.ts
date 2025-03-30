import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CarModel } from "./carModel.entity";
import { CarMotorization } from "./carMotorization.entity";

@Entity('car_body')
export class CarBody  extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;
        
    @Column({ type: 'varchar', length: 100, nullable: false }) name: string;    
	
	@CreateDateColumn() createdAt: Date;
    @UpdateDateColumn() updateAt?: Date;

    //propriété de navigation
    @OneToMany(type => CarMotorization, item => item.carBody) carMotorizations: CarMotorization[];  

 }
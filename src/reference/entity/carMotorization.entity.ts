import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CarBody } from "./carBody.entity";
import { CarModel } from "./carModel.entity";
import { Energy } from "./energy.entity";
import { Transmission } from "./transmission.entity";
import { CarFinishing } from "./carFinishing.entity";
 
@Entity('car_motorization')
export class CarMotorization  extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;
    
    // clé étrangère de la table primaire CarModel
    @ManyToOne(type => CarModel, item => item.carMotorizations) carModel: CarModel; 
    @Column()carModelId: number;
        
    // clé étrangère de la table primaire CarBody
    @ManyToOne(type => CarBody, item => item.carMotorizations, {nullable:true}) carBody: CarBody; 
    @Column({nullable: true })carBodyId: number;

    // clé étrangère de la table primaire Energy
    @ManyToOne(type => Energy, item => item.carMotorizations,{nullable:true}) energy: Energy; 
    @Column({nullable: true })energyId: number;

    // clé étrangère de la table primaire Transmission
    @ManyToOne(type => Transmission, item => item.carMotorizations) transmission: Transmission; 
    @Column({nullable: true })transmissionId: number;

    @Column()doorsNumber: number;
    @Column()seatsNumber: number;
    @Column()realPower: number;
    @Column()fiscalPower: number;
    
    @Column({ type: 'varchar', length: 100, nullable: false }) name: string; 
    @Column() from : string
    @Column() to :string;

    @Column()mine:string;

    @CreateDateColumn() createdAt: Date;
    @UpdateDateColumn() updatedAt: Date; 

    //propriété de navigation
    @OneToMany(type => CarFinishing, item => item.carMotorization) carFinishings: CarFinishing[]; 
 }
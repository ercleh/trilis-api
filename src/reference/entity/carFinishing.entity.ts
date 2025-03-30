import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CarMotorization } from "./carMotorization.entity";
 
@Entity('car_finishing')
export class CarFinishing  extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;
    
    // clé étrangère de la table primaire CarMotorization
    @ManyToOne(type => CarMotorization, item => item.carFinishings) carMotorization: CarMotorization; 
    @Column()carMotorizationId: number;
        
    @Column({ type: 'varchar', length: 100, nullable: false }) name: string; 
    @Column() from : string
    @Column() to :string;

    @CreateDateColumn() createdAt: Date;
    @UpdateDateColumn() updatedAt: Date; 
   
 }
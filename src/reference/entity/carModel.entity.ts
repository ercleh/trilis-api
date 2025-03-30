import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Brand } from "./brand.entity";
import { CarBody } from "./carBody.entity";
import { CarMotorization } from "./carMotorization.entity";

@Entity('car_model')
export class CarModel  extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;
    
    // clé étrangère de la table primaire Brand
    @ManyToOne(type => Brand, item => item.carModels) brand: Brand; 
    @Column()brandId: number;
        
    @Column({ type: 'varchar', length: 100, nullable: false }) name: string;
    @Column({ type: 'varchar', length: 50}) from : string;
    @Column({ type: 'varchar', length: 50}) to :string;

	@CreateDateColumn() createdAt: Date;
    @UpdateDateColumn() updateAt?: Date;

    //propriété de navigation
    @OneToMany(type => CarMotorization, item => item.carModel) carMotorizations: CarMotorization[]; 
 }
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany,PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import { CarMotorization } from "./carMotorization.entity";
 
@Entity('transmission')
export class Transmission  extends BaseEntity {
    @PrimaryGeneratedColumn()
	id: number;

    @Column({ type: 'varchar', length: 50 })name: string
    @CreateDateColumn() createdAt: Date;
    @UpdateDateColumn() updateAt?: Date;

    //objets de navigation
    //-------------------
    //carMotorization
    @OneToMany(type => CarMotorization, item => item.transmission) carMotorizations: CarMotorization[]; 

  } 
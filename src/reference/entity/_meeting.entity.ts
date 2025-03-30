import { Column, Entity,  
    PrimaryColumn,
    CreateDateColumn, UpdateDateColumn, ManyToOne, BaseEntity, Unique, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToMany, JoinTable
   } from "typeorm";
import { Employee } from "./_employee.entity";

@Entity('meeting')
export class Meeting  extends BaseEntity {

//----------
//clé primaire simple
//----------
@PrimaryGeneratedColumn()
id: number;

@Column() name: string;

@ManyToMany(()=>Employee, employee=>employee.meetings)   
@JoinTable()
employees:Employee[];


}
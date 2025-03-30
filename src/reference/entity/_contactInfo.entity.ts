import { Column, Entity,  
    PrimaryColumn,
    CreateDateColumn, ManyToOne, BaseEntity, Unique, PrimaryGeneratedColumn, OneToOne, JoinColumn
   } from "typeorm";
import { Primaire } from "./_primaire.entity";
import { Employee } from "./_employee.entity";

@Entity('_contact_info')
export class ContactInfo  extends BaseEntity {

//----------
//clé primaire simple
//----------
@PrimaryGeneratedColumn()
id: number;

@Column() phone: string
@Column() email: string
@Column() employeeId: number

@OneToOne(()=>Employee, employee=>employee.contactInfo, {onDelete:'CASCADE'})    //si un employé est supprimé, contactInfo est supprimé automatiquement
@JoinColumn()
employee:Employee;

}
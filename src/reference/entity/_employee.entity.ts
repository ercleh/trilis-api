import { Column, Entity,  
    PrimaryColumn,
    CreateDateColumn, UpdateDateColumn, ManyToOne, BaseEntity, Unique, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToMany, JoinTable
   } from "typeorm";
import { Primaire } from "./_primaire.entity";
import { ContactInfo } from "./_contactInfo.entity";
import { Meeting } from "./_meeting.entity";

@Entity('employee')
export class Employee  extends BaseEntity {

//----------
//clé primaire simple
//----------
@PrimaryGeneratedColumn()
id: number;

@Column() name: string;

@OneToOne(()=>ContactInfo, contactInfo=>contactInfo.employee)    
contactInfo:ContactInfo;

@ManyToMany(()=>Meeting, meeting=>meeting.employees,{eager:true})   //on met eager:true si on veut que la propriété meetings soit systématiquement récupérée lors d'une lecture dans la base 
@JoinTable()  //pour gérer les propriétés relationnelles et les récupérer lors de la lecture
meetings:Meeting[];

}
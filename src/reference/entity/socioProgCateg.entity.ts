/* eslint-disable prettier/prettier */
import { Column, BaseEntity, Unique, PrimaryGeneratedColumn, Entity
        } from "typeorm";

@Entity("socio_prof_categ")
@Unique(["name"])
export class SocioProfCateg  extends BaseEntity {
    @PrimaryGeneratedColumn()id: number;
    @Column({type: 'varchar',length: 100}) name: string
    @Column({type: 'varchar',length: 6}) code: string 
}
/* eslint-disable prettier/prettier */
import { Column, BaseEntity, Unique, PrimaryGeneratedColumn, Entity
        } from "typeorm";

@Entity("occupation")
@Unique(["name"])
export class Occupation  extends BaseEntity {
    @PrimaryGeneratedColumn()id: number;
    @Column({type: 'varchar',length: 100}) name: string
    @Column({type: 'varchar',length: 6}) code: string 
}
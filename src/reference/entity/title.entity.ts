/* eslint-disable prettier/prettier */
import { Column, BaseEntity, Unique, PrimaryGeneratedColumn, Entity
        } from "typeorm";

@Entity("title")
@Unique(["name"])
export class Title  extends BaseEntity {
    @PrimaryGeneratedColumn()id: number;
    @Column({type: 'varchar',length: 50}) name: string
    @Column({type: 'varchar',length: 6}) shortName: string
    @Column({type: 'varchar',length: 2}) type: string 
}

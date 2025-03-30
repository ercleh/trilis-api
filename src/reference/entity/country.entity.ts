/* eslint-disable prettier/prettier */
import { Column, BaseEntity, Unique, PrimaryGeneratedColumn, Entity
        } from "typeorm";

@Entity("country")
@Unique(["country"])
export class Country  extends BaseEntity {
    @PrimaryGeneratedColumn()id: number;
    @Column({type: 'varchar',length: 100}) country: string
    @Column({type: 'varchar',length: 100}) nationality: string 
    @Column({type: 'varchar',length: 6}) symbol: string 
    @Column({type: 'varchar',length: 256, nullable: true}) imagePath: string 
}
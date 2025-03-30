/* eslint-disable prettier/prettier */
import { Column, BaseEntity, Unique, PrimaryGeneratedColumn, Entity, UpdateDateColumn, CreateDateColumn
        } from "typeorm";

@Entity("csp")
@Unique(["code"])
export class CSP  extends BaseEntity {
    @PrimaryGeneratedColumn()id: number;
    @Column({type: 'varchar',length: 6}) code: string
    @Column({type: 'varchar',length: 100}) name: string 
    @CreateDateColumn() createdAt: Date;
    @UpdateDateColumn() updateAt?: Date;
}
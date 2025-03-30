/* eslint-disable prettier/prettier */
import { Column, BaseEntity, Unique, PrimaryGeneratedColumn, Entity, UpdateDateColumn, CreateDateColumn
} from "typeorm";

@Entity("identity_doc_type")
@Unique(["code"])
export class IdentityDocType  extends BaseEntity {
@PrimaryGeneratedColumn()id: number;
@Column({type: 'int'}) numberOrder: number;
@Column({type: 'varchar',length: 6}) code: string
@Column({type: 'varchar',length: 100}) name: string 
@CreateDateColumn() createdAt: Date;
@UpdateDateColumn() updateAt?: Date;
}
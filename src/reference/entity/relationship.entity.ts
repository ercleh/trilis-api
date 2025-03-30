/* lien de parenté */
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('relationship')
export class Relationship  extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;
	@Column({ type: 'int',nullable:true}) orderNumber :number;	
    @Column({ type: 'varchar', length: 50 ,nullable: false })
	name: string;

	// @OneToMany(type => Driver, item => item.relationship) drivers: Driver[];  

}
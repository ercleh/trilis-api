/* eslint-disable prettier/prettier */
import { Column, Entity,  
         PrimaryColumn,
         CreateDateColumn, UpdateDateColumn, ManyToOne, BaseEntity, Unique
        } from "typeorm";
import { Primaire } from "./_primaire.entity";

@Entity('_nom')
@Unique(["name"])
export class Nom  extends BaseEntity {

    //----------
    //clé primaire simple
    //----------
	@PrimaryColumn()
	id: number;
    
    //----------
    //clé primaire auto
    //----------
    // @PrimaryGeneratedColumn()id: number;
    // @PrimaryGeneratedColumn('uuid') id: string;

    // clé étrangère de la table primaire
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @ManyToOne(type => Primaire, item => item.noms, {onDelete:"SET NULL"}) primaire: Primaire; 
    //----------
    //varchar
    //----------
    @Column({type: 'varchar',length: 100}) name: string
    @Column({type: 'varchar',length: 50}) shortName: string
    @Column({type: 'char',length: 1}) symbol?: string
    @Column({ type: 'varchar' }) imagePath?: string;  
    
    //----
    //date
    //----
    @Column({ type: 'date' }) date: Date;

    //----------
    //nombre
    //----------
    @Column() nombre :number;

    //----------
    //dates générées
    //----------
    @CreateDateColumn() createdAt: Date;
    @UpdateDateColumn() updatedAt?: Date;

    //----------
    //decimal
    //----------
    @Column("decimal", { precision: 10, scale: 2 })
    preTaxValueMonth: number;

    //----------
    //booléen
    //----------
    @Column()  show: boolean; 
	
    static findByName(n: string, sn : string) {
        return this.createQueryBuilder("company")
            .where("company.name = :n", { n})
            .andWhere("company.shortName = :sn", { sn })
            .getMany()
    }    

}
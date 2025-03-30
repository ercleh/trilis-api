/* eslint-disable prettier/prettier */
import { Column, Entity, OneToMany, PrimaryColumn} from "typeorm";
import { Nom } from "./_nom.entity";

// table de clé primaire
@Entity('_primaire')
export class Primaire {
    @PrimaryColumn() id: number;
    @Column({type: 'varchar',length: 100}) name: string 

    //propriété de navigation
    //l'Id de la table primaire est clé étrangère dans la table nom
    @OneToMany(type => Nom, item => item.primaire) noms: Nom[];  
}
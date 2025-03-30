/* eslint-disable prettier/prettier */
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { PackageVersion } from "./packageVersion.entity";
import { CeilingVersion } from "./ceilingVersion.entity";
import { DeductibleVersion } from "./deductibleVersion.entity";
import { CoverageVersion } from "./coverageVersion.entity";

@Entity('currency')
export class Currency  extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

    @Column({type: 'varchar', length: 100})name: string 
    @Column({type: 'varchar', length: 50})shortName: string
    @Column({ type: 'char', length: 6 }) symbol?: string
    @Column({ type: 'varchar' }) imagePath?: string;     

    // objets de navigation
    //---------------------
    //Formule détail
    @OneToMany(() => PackageVersion, item => item.currency) packageVersions: PackageVersion[]; 
    
    //Garantie détail
    @OneToMany(() => CoverageVersion, item => item.currency) coverageVersions: CoverageVersion[];  

    //Plafond
    @OneToMany(() => CeilingVersion, item => item.currency) ceilingVersions: CeilingVersion[];  

    //Franchise
    @OneToMany(() => DeductibleVersion, item => item.currency) deductibleVersions: DeductibleVersion[];  
     
}
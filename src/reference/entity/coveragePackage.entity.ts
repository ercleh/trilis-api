/* eslint-disable prettier/prettier */
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Coverage } from "./coverage.entity";
import { Package } from "./package.entity";

@Entity('coverage_package')
export class CoveragePackage  extends BaseEntity {
    @PrimaryGeneratedColumn()id: number;

    //clés étrangères
    //garantie
    @ManyToOne(() => Coverage, (coverage) => coverage.coveragePackages) public coverage!: Coverage
    @Column()coverageId: number;

    //formule
    @ManyToOne(() => Package, (pkg) => pkg.coveragePackages) public package!: Package
    @Column()packageId: number;
    
	@Column({type: 'varchar',length: 1}) status : string  
    @Column({type: 'date'}) startDate: Date;
    @Column({type: 'date'}) endDate?: Date;

}

 
 
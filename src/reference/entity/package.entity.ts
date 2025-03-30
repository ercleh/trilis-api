import { Base1Entity } from "@shared/entity/base1.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Ceiling } from "./ceiling.entity";
import { CoveragePackage } from "./coveragePackage.entity";
import { Deductible } from "./deductible.entity";
import { PackageType } from "./packageType.entity";
import { Product } from "./product.entity";
import { PackageVersion } from "./packageVersion.entity";

@Entity('package')
export class Package  extends Base1Entity {

    //clés étrangères
    // type de formule  (tiers, tous risques)
    @ManyToOne(type => PackageType, item => item.packages) packageType: PackageType; 
    @Column()packageTypeId: number;

    //produit (auto, habitation)
    @ManyToOne(type => Product, item => item.packages) product: Product; 
    @Column()productId: number;

    @Column({ type: 'varchar', length: 50 })
    name: string

    @Column()
    summary: string;

    @Column()
    description: string;

    @Column()
    imagePath: string;

    @Column({type: 'date'}) startDate: Date;
    @Column({type: 'date'}) endDate: Date;

    // objets de navigation 1-n
    // versions
    // 1 Package --> n PackageVersion
    @OneToMany(() => PackageVersion, item => item.package) packageVersions: PackageVersion[];  

    // franchises
    // 1 Package --> n Deductible
    @OneToMany(() => Deductible, item => item.package) deductibles: Deductible[];  

    //plafonds
    // 1 Package --> n Ceiling
    @OneToMany(() => Ceiling, item => item.package) ceilings: Ceiling[];  

    // objets de navigation n-n
    // garanties-formules
    @OneToMany(type => CoveragePackage, item => item.package) coveragePackages: CoveragePackage[];  
  } 

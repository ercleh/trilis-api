import { Base1Entity } from "@shared/entity/base1.entity";
import { Column, Entity, OneToMany} from "typeorm";
import { Coverage } from "./coverage.entity";

@Entity('coverage_class')
export class CoverageClass  extends Base1Entity {

 
    @Column({ type: 'varchar', length: 50 })name: string
    @Column()imagePath: string;

    //objets de navigation
    //produits
    @OneToMany(() => Coverage, item => item.coverageClass) coverages: Coverage[];  

  } 
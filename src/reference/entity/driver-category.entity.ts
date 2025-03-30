/* eslint-disable prettier/prettier */
import { Column, BaseEntity, Unique, PrimaryGeneratedColumn, Entity
} from "typeorm";

@Entity("driver_category")
@Unique(["name","shortName"])
export class DriverCategory  extends BaseEntity {
@PrimaryGeneratedColumn()id: number;
@Column({type: 'int'}) numberOrder: number;
@Column({type: 'varchar',length: 50}) name: string
@Column({type: 'varchar',length: 6}) shortName: string
}

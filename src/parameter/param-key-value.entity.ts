/* eslint-disable prettier/prettier */
import { Base1Entity } from '@shared/entity/base1.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('param_key_value')
export class ParamKeyValue extends Base1Entity {
  @Column({ type: 'varchar', nullable: false }) name: string;
  @Column({ type: 'varchar', nullable: false }) value: string;
  @Column({ type: 'varchar', nullable: false }) description: string;
  @Column({ type: 'varchar', nullable: false }) type: string;
}

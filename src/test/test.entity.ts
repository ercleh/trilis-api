/* eslint-disable prettier/prettier */
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('param_key_value')
export class Test extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false }) name: string;
  @CreateDateColumn() createdAt: Date;
  @UpdateDateColumn() updatedAt?: Date;
}

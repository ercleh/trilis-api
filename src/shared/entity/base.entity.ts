import {
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn() createdAt: Date;
  @Column({ type: 'varchar', length: 300 }) createdBy: string;
  @UpdateDateColumn() updateAt?: Date;
  @Column({ type: 'varchar', length: 300 }) updatedBy?: string;
}

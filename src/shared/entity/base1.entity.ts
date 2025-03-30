import { PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, BaseEntity } from 'typeorm';

export abstract class Base1Entity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

	@CreateDateColumn() createdAt: Date;
    @UpdateDateColumn() updatedAt?: Date;
}
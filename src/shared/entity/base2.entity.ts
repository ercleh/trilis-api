import { PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn } from 'typeorm';

export abstract class Base1Entity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

	@CreateDateColumn() createdAt: Date;
    @UpdateDateColumn() updateAt?: Date;
}
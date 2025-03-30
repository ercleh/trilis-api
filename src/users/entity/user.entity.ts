import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn,BeforeInsert, } from "typeorm";
//import * as bcrypt from 'bcrypt';

@Entity('user')
export class UserEntity{
    @PrimaryGeneratedColumn('uuid') id: string;

    @Column({ type: 'varchar',nullable: false, unique:true, length: 128}) username: string

    @Column({type: 'varchar',nullable: false,length: 128}) email: string

    @Column({type: 'varchar',nullable: false,length: 50}) password: string
    
    @Column({type: 'varchar',length: 50}) firstName: string

    @Column({type: 'varchar',length: 50}) lastName: string

    @Column({type: 'varchar',length: 50}) mobileNumber: string
            	
    @CreateDateColumn() createdAt: Date;
    @UpdateDateColumn() updatedAt: Date;

    // @BeforeInsert()
    // async hashPassword() {
    //   this.password = await bcrypt.hash(this.password, 10);
    // }
  
}

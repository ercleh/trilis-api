/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, getConnection, getRepository, QueryRunner, Repository} from 'typeorm';
import { ContactInfo } from '../entity/_contactInfo.entity';
import { Employee } from '../entity/_employee.entity';
@Injectable()
export class EmployeeService {
 
  constructor(
    @InjectRepository(Employee)
    private employeeRepo:Repository<Employee>,

    @InjectRepository(ContactInfo)
    private contactInfoRepo:Repository<ContactInfo>,
  ) {}

  //1ere méthode avec récupération des propriétés liées
 getEmployeeById(id:number){
  return this.employeeRepo.findOne({
    where: { id: id },
    relations: ['contactInfo', 'meetings'],
  });
 }
//2ième méthode avec récupération des propriétés liées
 getEmployeeByIdQueryBuilder(id:number){
    return this.employeeRepo.createQueryBuilder('employee')
                            .leftJoinAndSelect('employee.meetings','meetings') //si on veut récupérer les propriétés de relations
                            .leftJoinAndSelect('employee.contactInfo','contactInfo')
                            .where ('employee.id == :employeeId', {employeeId:id})
                            .getOne()
    }

    deleteEmployee(id:number)
    {
        return this.employeeRepo.delete(id);
    }
 }


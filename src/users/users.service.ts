/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { toUserDto } from '@shared/mapper';
import { Repository} from 'typeorm';
import { UserCreateDto } from './dto/user-create.dto';
import { UserLoginDto } from './dto/user-login.dto';
import { UserDto } from './dto/user.dto';
import { UserEntity } from './entity/user.entity';
//import { comparePasswords } from '@shared/utils';

@Injectable()
export class UsersService {
 
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo:Repository<UserEntity>,
  ) {}
  
  async findAll(): Promise<UserDto[]> {
    const users = await this.userRepo.find();
    return users.map(user=>toUserDto(user));
   }
  
  async findOne(options?: object): Promise<UserDto> {
    const user =  await this.userRepo.findOne(options);    
    return toUserDto(user);  
  }

  async findByLogin({ username, password }: UserLoginDto): Promise<UserDto> {    
  const user = await this.userRepo.findOne({ where: { username } });
  
  if (!user) {
      throw new HttpException('User not found', HttpStatus.UNAUTHORIZED);    
  }
    
  //   // compare passwords    
  //   const areEqual = comparePasswords(user.password, password);
    
  //   if (!areEqual) {
  //       throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);    
  //   } 
  return toUserDto(user);  
}

    findByName(param: string):  Promise<UserEntity | undefined> {
      const result =  this.userRepo.findOne({ where: { lastName: param } })
      return result;
    }
  

  async create(userCreateDto: UserCreateDto): Promise<UserDto> {  

    const { username, password, email, firstName, lastName,mobileNumber } = userCreateDto;
    
    // check if the user exists in the db    
    const userInDb = await this.userRepo.findOne({ 
        where: {username} 
    });
    if (userInDb) {
        throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);    
    }
    
    const user: UserEntity = await this.userRepo.create(
      {  username
        , password
        , email 
        , firstName
        , lastName
        , mobileNumber});
    await this.userRepo.save(userCreateDto);
    return toUserDto(user);  
}
private _sanitizeUser(user: UserEntity) {
  delete user.password;
  return user;
}

async findByPayload({ username }: any): Promise<UserDto> {
  return await this.findOne({ 
      where:  { username } });  
}



}




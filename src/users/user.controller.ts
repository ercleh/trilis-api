import {
    Body,
    Controller,
    Get,
    Post,
    UsePipes,
    ValidationPipe,
  } from '@nestjs/common';
import { getConnection, QueryRunner  } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';
 
@Controller('user')
  export class UserController {
    constructor(private readonly userService: UsersService) {}
  
    @Get()
    async read(): Promise<UserDto[]> {
      return this.userService.findAll();
    }
    @Get('id')
    async readById(id): Promise<UserDto> {
      return this.userService.findOne({ where: { id } });
    }
  }
  
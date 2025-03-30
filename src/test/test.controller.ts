/* eslint-disable prettier/prettier */
/* eslint-disable no-var */
/* eslint-disable prettier/prettier */
import { Controller, Get, Logger } from '@nestjs/common';
import { TestService } from './test.service';
import { TestDto } from './test.dto';

@Controller('setting/test')
export class TestController {
  constructor(private readonly TestService: TestService) {}
  logger: Logger = new Logger(TestController.name);

  @Get()
  async read(): Promise<TestDto[]> {
    return this.TestService.findAll();
  }
}

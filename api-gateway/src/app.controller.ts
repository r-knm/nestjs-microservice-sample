import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserRequestDto } from './create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('users')
  crateUser(@Body() body: CreateUserRequestDto) {
    return this.appService.createUser(body);
  }

  @Get('email-results')
  getResults() {
    return this.appService.getEmailResults();
  }
}

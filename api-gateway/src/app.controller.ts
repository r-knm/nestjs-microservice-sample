import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserRequestDto } from './create-user.dto';
import { GetUsersRequestDto } from './get-users.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('users')
  crateUser(@Body() body: CreateUserRequestDto) {
    return this.appService.createUser(body);
  }

  @Get('users')
  async gerUsers(): Promise<GetUsersRequestDto> {
    return this.appService.getUsers();
  }

  @Get('email-history')
  getSendEmailHistory() {
    return this.appService.getEmailHistory();
  }
}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserRequestDto } from './create-user.dto';
import { GetUsersRequestDto } from './get-users.dto';
import { GetSendEmailHistoryRequestDto } from './get-send-email-history.dto';

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
  async getSendEmailHistory(): Promise<GetSendEmailHistoryRequestDto> {
    return await this.appService.getEmailHistory();
  }
}

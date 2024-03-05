import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { CreateUserEvent } from './create-user.event';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('create-user')
  handleUserCreate(data: CreateUserEvent) {
    return this.appService.handleUserCreate(data);
  }

  @MessagePattern({ cmd: 'get-users' })
  getUsers() {
    return this.appService.getUsers();
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { CreateUserRequestDto } from './create-user.dto';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserEvent } from './create-user.event';

@Injectable()
export class AppService {
  constructor(
    @Inject('MAIL_SERVICE') private readonly mailServiceClient: ClientProxy,
    @Inject('USER_SERVICE') private readonly userServiceClient: ClientProxy,
  ) {}

  createUser(dto: CreateUserRequestDto) {
    this.userServiceClient.emit(
      'create-user',
      new CreateUserEvent(dto.name, dto.email),
    );
  }

  getUsers() {
    return this.userServiceClient.send({ cmd: 'get-users' }, {});
  }

  getEmailResults() {
    return this.mailServiceClient.send({ cmd: 'get-send-email-results' }, {});
  }
}

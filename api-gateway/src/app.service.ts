import { Inject, Injectable } from '@nestjs/common';
import { CreateUserRequestDto } from './create-user.dto';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserEvent } from './create-user.event';
import { GetUsersRequestDto } from './get-users.dto';
import { GetSendEmailHistoryRequestDto } from './get-send-email-history.dto';

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

  async getUsers(): Promise<GetUsersRequestDto> {
    const observable = this.userServiceClient.send<
      {
        id: number;
        name: string;
        email: string;
        createdAt: Date;
      }[]
    >({ cmd: 'get-users' }, {});

    return { users: await observable.toPromise() };
  }

  async getEmailHistory(): Promise<GetSendEmailHistoryRequestDto> {
    const observable = this.mailServiceClient.send<
      {
        toUser: {
          id: number;
          email: string;
          name: string;
        };
        status: 'success' | 'error';
        ts: number;
      }[]
    >({ cmd: 'get-send-email-history' }, {});

    return { history: await observable.toPromise() };
  }
}

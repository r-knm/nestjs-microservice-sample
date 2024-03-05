import { Inject, Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create-user.event';
import { ClientProxy } from '@nestjs/microservices';
import { SendEmailEvent } from './send-email.event';

@Injectable()
export class AppService {
  private readonly users: {
    id: number;
    name: string;
    email: string;
    createdAt: Date;
  }[] = [];

  constructor(
    @Inject('MAIL_SERVICE') private readonly mailServiceClient: ClientProxy,
  ) {}

  handleUserCreate(data: CreateUserEvent) {
    const newUser = {
      id: this.users.length + 1,
      name: data.name,
      email: data.email,
      createdAt: new Date(),
    };

    this.users.push(newUser);

    this.mailServiceClient.emit(
      'send-email',
      new SendEmailEvent(newUser.id, newUser.name, newUser.email),
    );
  }

  getUsers() {
    return this.users;
  }
}

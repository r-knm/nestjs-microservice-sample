import { Injectable } from '@nestjs/common';
import { SendEmailEvent } from './send-email.event';

@Injectable()
export class AppService {
  private readonly sendEmailHistory: {
    toUser: { id: number; email: string; name: string };
    status: 'success' | 'error';
    ts: number;
  }[] = [];

  sendEmail(data: SendEmailEvent) {
    // TODO: Send email to created user
    // ...

    return this.sendEmailHistory.push({
      toUser: { id: data.id, email: data.email, name: data.name },
      status: 'success',
      ts: Date.now(),
    });
  }

  async getSendEmailHistory(): Promise<
    {
      toUser: {
        id: number;
        email: string;
        name: string;
      };
      status: 'success' | 'error';
      ts: number;
    }[]
  > {
    return this.sendEmailHistory;
  }
}

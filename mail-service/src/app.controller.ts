import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { SendEmailEvent } from './send-email.event';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('send-email')
  handleSendEmail(data: SendEmailEvent) {
    return this.appService.sendEmail(data);
  }

  @MessagePattern({ cmd: 'get-send-email-history' })
  getSendEmailHistory() {
    return this.appService.getSendEmailHistory();
  }
}

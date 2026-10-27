import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller.js';
import { MessageRepository } from './messages.repository.js';
import { MessageServices } from './messages.service.js';

@Module({
  controllers: [MessagesController],
  providers:[MessageRepository,MessageServices]
})
export class MessagesModule {}

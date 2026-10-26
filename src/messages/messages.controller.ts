import { Controller, Get, Post ,Body , Param} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dtos.js';
import { MessageServices } from './messages.service.js';

@Controller('messages')
export class MessagesController {
    messageService : MessageServices

    //do not do this in real app (will refactor it to dependency injection later)

    constructor(){
        this.messageService = new MessageServices();
    }

    @Get()
    listMessages(){
      return this.messageService.findAll();
    }
    
    @Post()
    createMessage(@Body() body : CreateMessageDto){
     
       return this.messageService.create(body.content);

    }
    
    @Get("/:id")
    getMessage(@Param("id") id : string){
       return this.messageService.findOne(id);
    }


}

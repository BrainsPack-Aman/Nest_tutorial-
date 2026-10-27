import { Controller, Get, Post ,Body , Param , NotFoundException , BadRequestException} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dtos.js';
import { MessageServices } from './messages.service.js';

@Controller('messages')
export class MessagesController {
   
   constructor(public messageService : MessageServices){}



    @Get()
    listMessages(){
      return this.messageService.findAll();
    }
    
    @Post()
    createMessage(@Body() body : CreateMessageDto){

      if (!body.content || body.content.trim() === "") {
         throw new BadRequestException("Message content cannot be empty"); 
      }
     
       return this.messageService.create(body.content);

    }
    
    @Get("/:id")
    async getMessage(@Param("id") id : string){
       const message = await this.messageService.findOne(id);

       if(!message){
          throw new NotFoundException("Message Not found");
       }

       return message;
    }


}

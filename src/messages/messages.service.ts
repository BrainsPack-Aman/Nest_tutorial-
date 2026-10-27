import { MessageRepository } from "./messages.repository.js";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MessageServices{
   
    constructor( public messageRepo : MessageRepository){}
    // constructor(messageRepo : MessageRepository){
        
    //     this.messageRepo = messageRepo;
    // }

    findOne(id:string){
       return this.messageRepo.findOne(id);
    }

    findAll(){
        return this.messageRepo.findAll();
    }

    create(content :string){
    return this.messageRepo.create(content);
    } 
}
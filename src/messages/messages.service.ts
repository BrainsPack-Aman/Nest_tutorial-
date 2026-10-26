import { MessageRepository } from "./messages.repository.js";

export class MessageServices{
    messageRepo :MessageRepository;

    constructor(){
        //Service is creating its own dependences
        //do no use this in real apps

        this.messageRepo = new MessageRepository();
    }

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
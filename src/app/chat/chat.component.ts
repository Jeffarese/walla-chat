import { Component, OnInit } from '@angular/core';
import {MessageService} from "./message/message.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private messageService: MessageService) {

  }

  public loadMessages() {
    this.messageService.loadMessages().subscribe((messages) => {
      console.log(messages);
    });
  }

  ngOnInit() {
  }

}

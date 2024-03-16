import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  messages: any[] = [];
  newMessage: string = '';

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.getMessages().subscribe((messages: any) => {
      this.messages = messages;
    });

    this.messageService.subscribeToNewMessages((message: any) => {
      this.messages.push(message);
    });
  }

  sendMessage(): void {
    this.messageService.sendMessage(this.newMessage).subscribe((message: any) => {
      this.messages.push(message);
      this.newMessage = '';
    });
  }
}

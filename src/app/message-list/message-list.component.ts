import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent {

  @Input() mailList: any;
  @Output() mailSelezionata = new EventEmitter<object>()

  onSelectedMail(mail: object) {
    this.mailSelezionata.emit(mail)
  }

}
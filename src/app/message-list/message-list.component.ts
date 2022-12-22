import { Component, EventEmitter, Input, Output, DoCheck } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements DoCheck{

  @Input() mailList: any;
  @Output() mailSelezionata = new EventEmitter<object>()

  mailListPageSliced = []
  startIndex = 0
  endIndex = 4

  ngDoCheck(): void {
    this.mailListPageSliced = this.mailList?.slice(this.startIndex, this.endIndex)
  }

  onSelectedMail(mail: object) {
    this.mailSelezionata.emit(mail)
  }

  onPageChange(event: PageEvent) {
    this.startIndex = event.pageIndex * event.pageSize
    this.endIndex = this.startIndex + event.pageSize
    if (this.endIndex > this.mailList,length) {
      this.endIndex = this.mailList.length
    }
    // this.mailListPageSliced = this.mailList.slice(startIndex, endIndex)
    // console.log(this.mailListPageSliced, startIndex, endIndex)
  }

  onFavouriteClick() {
    alert('aggiunto ai preferiti!')
  }

}
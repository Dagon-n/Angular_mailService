import { Component, EventEmitter, Input, Output, DoCheck, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements DoCheck, OnInit {

  @Input() mailList: any;
  @Output() mailSelezionata = new EventEmitter<object>()

  thereAreMails = false
  mailListPageSliced = []
  startIndex = 0
  endIndex = 4

  ngOnInit(): void {
    console.log(this.mailList)
  }

  ngDoCheck(): void {
    if( this.mailList.length > 0 ) {
      this.mailListPageSliced = this.mailList?.slice(this.startIndex, this.endIndex)
      this.thereAreMails = true
    }else{
      this.thereAreMails = false
    }
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
import { Component, EventEmitter, Input, Output, DoCheck, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { FetchingDataService } from '../Servizi/fetching-data.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements DoCheck, OnInit {

  @Input() mailList: any;
  @Input() mailFolder: any;
  @Output() mailSelezionata = new EventEmitter<object>()

  constructor(
    private fetchingData: FetchingDataService,
  ) {}

  thereAreMails = false
  mailListPageSliced = []
  startIndex = 0
  endIndex = 4

  isTheStarToShow = true
  ngOnInit(): void {
    if(this.mailFolder == 'Cestino') {
      this.isTheStarToShow = false
    }
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
  }

  onFavouriteClick(mail: any) {
    this.fetchingData.impostaPreferito(mail)
  }

}
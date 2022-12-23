import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-message-viewer',
  templateUrl: './message-viewer.component.html',
  styleUrls: ['./message-viewer.component.css']
})
export class MessageViewerComponent implements OnChanges {

  @Input() mailToShow: any /* Da un errore se di tipo 'Object' */
  @Output() datiCancellazione = new EventEmitter<any>

  toShow = true
  ngOnChanges() {
    if(this.mailToShow.isDeleted == true) {
      this.toShow = false
    }else{
      this.toShow = true
    }
  }

  handleCancellaMail(mail: any) {
    this.datiCancellazione.emit(mail)
  }

}

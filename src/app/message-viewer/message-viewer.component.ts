import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-message-viewer',
  templateUrl: './message-viewer.component.html',
  styleUrls: ['./message-viewer.component.css']
})
export class MessageViewerComponent implements OnChanges {

  @Input() mailToShow: any /* Da un errore se di tipo 'Object' */
  @Input() selectedFolder: any
  @Output() datiCancellazione = new EventEmitter<any>

  renderComponent = true
  toShow = true
  ngOnChanges() {
    if(!!this.mailToShow) {

      /* Case Defined */
      this.renderComponent = true

      if(this.mailToShow.isDeleted == true) {
        this.toShow = false
      }else{
        this.toShow = true
      }

    }else{

      /* Case Undefined */
      this.renderComponent = false

    }

  }

  handleCancellaMail(mail: any) {
    this.datiCancellazione.emit(mail)
  }

}

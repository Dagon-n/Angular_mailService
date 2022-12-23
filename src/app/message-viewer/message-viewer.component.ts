import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-message-viewer',
  templateUrl: './message-viewer.component.html',
  styleUrls: ['./message-viewer.component.css']
})
export class MessageViewerComponent {

  @Input() mailToShow: any /* Da un errore se di tipo 'Object' */
  @Output() datiCancellazione = new EventEmitter<any>

  handleCancellaMail(mail: any) {
    this.datiCancellazione.emit(mail)
  }

}

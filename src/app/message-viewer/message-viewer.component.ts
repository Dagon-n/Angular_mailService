import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-viewer',
  templateUrl: './message-viewer.component.html',
  styleUrls: ['./message-viewer.component.css']
})
export class MessageViewerComponent {

  @Input() mailToShow: any /* Da un errore se di tipo 'Object' */

  // ngAfterContentChecked() {
  //   console.log('message viewr', this.mailToShow)
  // }

}

import { Component } from '@angular/core';
import { GestoreMailService } from '../Servizi/gestore-mail.service';

@Component({
  selector: 'app-mail-view',
  templateUrl: './mail-view.component.html',
  styleUrls: ['./mail-view.component.css']
})
export class MailViewComponent  {

  constructor(public gestoreMail: GestoreMailService) {}

  mailList = this.gestoreMail.getMailsList()
  mailRicevute = this.gestoreMail.getMailRicevute()
  mailInviate = this.gestoreMail.getMailInviate()
  mailCancellate = []
  firstMailToShow = this.gestoreMail.mailList[0]
  toShow = ''

  onCartellaSelezionata(value: string) {
    this.toShow = value
    switch(value) {
      case 'Inviata':
        this.firstMailToShow = this.mailInviate[0]
        break;
      // case 'Cestino':
      //   this.firstMailToShow = this.mailCancellate[0]
      //   break;
      default:
        this.firstMailToShow = this.mailList[0]
    }

  }

  onMailSelezionata(value: any) {
    this.firstMailToShow = value 
  }

}
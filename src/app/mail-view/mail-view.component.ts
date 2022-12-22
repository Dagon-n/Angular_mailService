import { Component, OnInit } from '@angular/core';
import { GestoreMailService } from '../Servizi/gestore-mail.service';
import { FetchingDataService } from '../Servizi/fetching-data.service';

@Component({
  selector: 'app-mail-view',
  templateUrl: './mail-view.component.html',
  styleUrls: ['./mail-view.component.css']
})
export class MailViewComponent implements OnInit {

  constructor(
    public gestoreMail: GestoreMailService,
    private fetchingData: FetchingDataService,
  ) {}

  utenteLoggato = 'filippo.vallarino@gmail.com'
  prova: any
  ricevute: any
  inviate: any
  firstMailToShow: any
  toShow = ''

  ngOnInit(): void {
    this.fetchingMails()
  }

  fetchingMails(): void {
    this.fetchingData.getMails().subscribe((data:any) => {
      this.prova = data
      this.inviate = data.filter((mail:any) => mail.from == this.utenteLoggato)
      this.ricevute = data.filter((mail:any) => mail.to == this.utenteLoggato)
      this.firstMailToShow = data[0]
    })
  }

  // mailList = this.gestoreMail.getMailsList()
  // mailRicevute = this.gestoreMail.getMailRicevute()
  // mailInviate = this.gestoreMail.getMailInviate()
  // mailCancellate = []
  // firstMailToShow = this.gestoreMail.mailList[0]
  // toShow = ''

  onCartellaSelezionata(value: string) {
    console.log(
      'tutte: ', this.prova,
      '\ninviate: \n', this.inviate,
      '\nricevute: ', this.ricevute
    )
    this.toShow = value
    switch(value) {
      case 'Inviata':
        this.firstMailToShow = this.inviate[0]
        break;
      // case 'Cestino':
      //   this.firstMailToShow = this.mailCancellate[0]
      //   break;
      default:
        this.firstMailToShow = this.ricevute[0]
    }

  }

  onMailSelezionata(value: any) {
    this.firstMailToShow = value 
  }

}
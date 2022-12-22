import { Component, OnInit } from '@angular/core';
import { FetchingDataService } from '../Servizi/fetching-data.service';

@Component({
  selector: 'app-mail-view',
  templateUrl: './mail-view.component.html',
  styleUrls: ['./mail-view.component.css']
})
export class MailViewComponent implements OnInit {

  constructor(
    private fetchingData: FetchingDataService,
  ) {}

  utenteLoggato = 'filippo.vallarino@gmail.com'
  prova: any
  ricevute: any
  inviate: any
  cancellate: any
  preferiti: any
  firstMailToShow: any
  toShow = ''

  ngOnInit(): void {
    this.fetchingMails()
  }

  fetchingMails(): void {
    this.fetchingData.getMails().subscribe((data:any) => {
      this.prova = data
      this.inviate = data.filter((mail:any) => mail.from == this.utenteLoggato && mail.isDeleted == false)
      let mailRicevute = data.filter((mail:any) => mail.to == this.utenteLoggato && mail.isDeleted == false)
      this.ricevute = mailRicevute
      this.cancellate = data.filter((mail:any) => mail.isDeleted == true)
      this.preferiti = data.filter((mail:any) => mail.isFavourite == true)
      this.firstMailToShow = mailRicevute[0]
    })
  }

  onCartellaSelezionata(value: string) {
    // console.log(
    //   'tutte: ', this.prova,
    //   '\ninviate: \n', this.inviate,
    //   '\nricevute: ', this.ricevute,
    //   '\ncancellate: ', this.cancellate,
    //   '\npreferiti: ', this.preferiti,
    // )
    this.toShow = value
    switch(value) {
      case 'Inviata':
        this.firstMailToShow = this.inviate[0]
        break;
      case 'Cestino':
        this.firstMailToShow = this.cancellate[0]
        break;
      case 'Preferiti':
        this.firstMailToShow = this.preferiti[0]
        break;
      default:
        this.firstMailToShow = this.ricevute[0]
    }

  }

  onMailSelezionata(value: any) {
    this.firstMailToShow = value 
  }

}
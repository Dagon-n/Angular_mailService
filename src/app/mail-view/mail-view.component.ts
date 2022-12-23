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
  tutteLeMail: any
  ricevute: any
  inviate: any
  cancellate: any
  preferiti: any
  firstMailToShow: any
  toShow = ''

  finishedLoading = false

  ngOnInit(): void {
    this.fetchingMails()
  }

  fetchingMails(): void {
    this.fetchingData.getMails().subscribe({
      next: (data) => {
        this.tutteLeMail = data
        this.inviate = data.filter((mail:any) => mail.from == this.utenteLoggato && mail.isDeleted == false)
        let mailRicevute = data.filter((mail:any) => mail.to == this.utenteLoggato && mail.isDeleted == false)
        this.ricevute = mailRicevute
        this.cancellate = data.filter((mail:any) => mail.isDeleted == true)
        this.preferiti = data.filter((mail:any) => mail.isFavourite == true)
        this.firstMailToShow = mailRicevute[0]
      },
      error: (err: Error) => console.warn('Errore!', err),
      complete: () => {
        this.finishedLoading = true
        console.log('is loading finished? ', this.finishedLoading)
      }

    })

  }

  onCartellaSelezionata(value: string) {

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

    this.fetchingMails()

  }

  onMailSelezionata(value: any) {

    this.firstMailToShow = value

  }

  onCancellazioneMail(mail: any) {
    this.fetchingMails()
    this.fetchingData.spostaNelCestino(mail)

    if(mail.to == this.utenteLoggato) {
      let x = this.ricevute.map( (obj:any) => obj.id ).indexOf(mail.id)
      this.ricevute[x].isDeleted = true
      console.log(this.ricevute[x])
    }else{
      this.inviate
    }
    

  }

}
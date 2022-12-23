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
        let ricevute = data.filter((mail:any) => mail.to == this.utenteLoggato && mail.isDeleted == false)
        this.ricevute = ricevute
        this.cancellate = data.filter((mail:any) => mail.isDeleted == true)
        this.preferiti = data.filter((mail:any) => mail.isFavourite == true)
        this.firstMailToShow = ricevute[0]
      },
      error: (err: Error) => console.warn('Errore!', err),
      complete: () => {
        this.finishedLoading = true
        console.log('is loading finished? ', this.finishedLoading)
      }

    })
  }

  changeInviate() {
    this.fetchingData.getMails().subscribe({
      next: (data) => {
        let inviate = data.filter((mail:any) => mail.from == this.utenteLoggato && mail.isDeleted == false)
        this.inviate = inviate
        this.firstMailToShow = inviate[0]
      },
      error: (err: Error) => console.warn('Errore!', err),
      complete: () => {
        this.finishedLoading = true
        console.log('is loading finished? ', this.finishedLoading)
      }
    })
  }

  changeRicevute() {
    this.fetchingData.getMails().subscribe({
      next: (data) => {
        let ricevute = data.filter((mail:any) => mail.to == this.utenteLoggato && mail.isDeleted == false)
        this.ricevute = ricevute
        this.firstMailToShow = this.ricevute[0]
      },
      error: (err: Error) => console.warn('Errore!', err),
      complete: () => {
        this.finishedLoading = true
        console.log('is loading finished? ', this.finishedLoading)
      }
    })
  }

  changeCancellate() {
    this.fetchingData.getMails().subscribe({
      next: (data) => {
        let cancellate = data.filter((mail:any) => mail.isDeleted == true)
        this.cancellate = cancellate
        this.firstMailToShow = cancellate[0]
      },
      error: (err: Error) => console.warn('Errore!', err),
      complete: () => {
        this.finishedLoading = true
        console.log('is loading finished? ', this.finishedLoading)
      }
    })
  }

  changePreferiti() {
    this.fetchingData.getMails().subscribe({
      next: (data) => {
        let preferiti = this.preferiti = data.filter((mail:any) => mail.isFavourite == true)
        this.preferiti = preferiti
        this.firstMailToShow = this.preferiti[0]
      },
      error: (err: Error) => console.warn('Errore!', err),
      complete: () => {
        this.finishedLoading = true
        console.log('is loading finished? ', this.finishedLoading)
      }
    })
  }

  /* Quando viene cambiata cartella */
  onCartellaSelezionata(value: string) {

    this.toShow = value
    switch(value) {
      case 'Inviata':
        this.changeInviate()
        this.firstMailToShow = this.inviate[0]
        break;
      case 'Cestino':
        this.changeCancellate()
        this.firstMailToShow = this.cancellate[0]
        break;
      case 'Preferiti':
        this.changePreferiti()
        this.firstMailToShow = this.preferiti[0]
        break;
      default:
        this.changeRicevute()
        this.firstMailToShow = this.ricevute[0]
    }

  }

  /* Quando viene selezionata una mail */
  onMailSelezionata(value: any) {

    this.firstMailToShow = value

  }

  /* Quando viene cancellata una mail */
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
import { Component, Inject, OnInit } from '@angular/core';
import { GestoreMailService } from '../Servizi/gestore-mail.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-mail-form',
  templateUrl: './mail-form.component.html',
  styleUrls: ['./mail-form.component.css']
})
export class MailFormComponent implements OnInit{

  /*
    Questa form è chiamata dalle componenti, nel caso volessi cambiare la dimensione:
      <message-actions>
      <folders-list>
    Bisogna cercare di capire perchè non funziona il comando di riga 25 così che si debba modificare solo qui
  */
  
  constructor(
    private gestoreMail: GestoreMailService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    // this.dialogRef.updateSize();
    // console.log(this.data)
    if(this.data.chiamatoDa == 'scriviMail') {
    }
    if(this.data.chiamatoDa == 'rispondi') {
      this.destinatario = this.data.mail.from
      this.destinatarioIsDisabled = true
      this.oggetto = 'RE: ' + this.data.mail.object
      this.oggettoIsDisabled = true
    }
    if(this.data.chiamatoDa == 'inoltra') {
      this.oggetto = this.data.mail.object
      this.oggettoIsDisabled = true
      this.contenutoEmail = this.data.mail.content
      this.contenutoEmailIsDisabled = true
    }
  }

  mittente = 'filippo.vallarino@gmail.com'
  mittenteIsDisabled = true
  destinatario = ''
  destinatarioIsDisabled = false
  oggetto = ''
  oggettoIsDisabled = false
  contenutoEmail = ''
  contenutoEmailIsDisabled = false

  handleInputClick() {

    this.mittente = (<HTMLInputElement>document.getElementById("mittente")).value;
    this.destinatario = (<HTMLInputElement>document.getElementById("destinatario")).value;
    this.oggetto = (<HTMLInputElement>document.getElementById("oggetto")).value;
    this.contenutoEmail = (<HTMLInputElement>document.getElementById("contenuto")).value;

    this.gestoreMail.formInputHandler(this.mittente, this.destinatario, this.oggetto, this.contenutoEmail)

  }

}

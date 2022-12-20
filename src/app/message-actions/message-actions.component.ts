import { Component, Input } from '@angular/core';
import { MailFormComponent } from '../mail-form/mail-form.component';
import { MatDialog } from '@angular/material/dialog';
import { GestoreMailService } from '../Servizi/gestore-mail.service';

@Component({
  selector: 'app-message-actions',
  templateUrl: './message-actions.component.html',
  styleUrls: ['./message-actions.component.css']
})
export class MessageActionsComponent {

  @Input() mail: any

  constructor(
    public dialogRef : MatDialog,
    private gestoreMail: GestoreMailService,
  ) {}

  handleRispondi() {
    this.dialogRef.open(MailFormComponent, {
      width: '50%',
      height: '90%',
      data: { 
        chiamatoDa : 'rispondi', 
        mail: this.mail 
      }
      // panelClass: 'custom-modalbox', si trova in styles.css
    })
  }

  handleInoltra() {
    this.dialogRef.open(MailFormComponent, {
      width: '50%',
      height: '90%',
      data: { 
        chiamatoDa : 'inoltra', 
        mail: this.mail 
      }
      // panelClass: 'custom-modalbox', si trova in styles.css
    })
  }

  handleCancella() {
    console.log('da eliminare: \n', this.mail)
    if(this.mail.to == 'filippo.vallarino@gmail.com') {
      this.gestoreMail.cancellaMailHandler('mailRicevute', this.mail.id)
    }
    if(this.mail.from == 'filippo.vallarino@gmail.com') {
      this.gestoreMail.cancellaMailHandler('mailInviate', this.mail.id)
    }
  }
 
}
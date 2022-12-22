import { Component, Input } from '@angular/core';
import { MailFormComponent } from '../mail-form/mail-form.component';
import { MatDialog } from '@angular/material/dialog';
import { FetchingDataService } from '../Servizi/fetching-data.service';

@Component({
  selector: 'app-message-actions',
  templateUrl: './message-actions.component.html',
  styleUrls: ['./message-actions.component.css']
})
export class MessageActionsComponent {

  @Input() mail: any

  constructor(
    public dialogRef : MatDialog,
    private fetchingData: FetchingDataService,
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
    this.fetchingData.spostaNelCestino(this.mail)
  }

}
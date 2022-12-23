import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { MailFormComponent } from '../mail-form/mail-form.component';
import { MatDialog } from '@angular/material/dialog';
import { FetchingDataService } from '../Servizi/fetching-data.service';

@Component({
  selector: 'app-message-actions',
  templateUrl: './message-actions.component.html',
  styleUrls: ['./message-actions.component.css']
})
export class MessageActionsComponent implements OnChanges {

  @Input() mail: any
  @Output() mandaCancellazione = new EventEmitter<any>

  constructor(
    public dialogRef : MatDialog,
    private fetchingData: FetchingDataService,
  ) {}

  showRispondiInoltra = true
  ngOnChanges(): void {
    if(this.mail.from == 'filippo.vallarino@gmail.com'){
      this.showRispondiInoltra = false
    }else{
      this.showRispondiInoltra = true
    }
  }

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
    // this.fetchingData.spostaNelCestino(this.mail)
    this.mandaCancellazione.emit(this.mail)
  }

}
import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MailFormComponent } from '../mail-form/mail-form.component';

@Component({
  selector: 'app-folder-list',
  templateUrl: './folder-list.component.html',
  styleUrls: ['./folder-list.component.css']
})
export class FolderListComponent {

  @Output() cartellaSelezionata = new EventEmitter<string>()

  typeOfFolders: string[] = ['Posta in arrivo', 'Inviata', 'Cestino']

  boldFolder = 'Posta in arrivo'

  onFolderSelection(cartella: string){
    this.boldFolder = cartella
    this.cartellaSelezionata.emit(cartella)
  }

  constructor(public dialogRef : MatDialog) {}
  scriviMail() {
    this.dialogRef.open(MailFormComponent, {
      width: '50%',
      height: '90%',
      data: { chiamatoDa : 'scriviMail' }
      // panelClass: 'custom-modalbox', si trova in styles.css
    })
  }
  
}
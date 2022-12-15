import { Component, EventEmitter, Output } from '@angular/core';

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
    console.log( 'test', this.boldFolder )
    this.cartellaSelezionata.emit(cartella)
  }

}

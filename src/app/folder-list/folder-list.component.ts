import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-folder-list',
  templateUrl: './folder-list.component.html',
  styleUrls: ['./folder-list.component.css']
})
export class FolderListComponent {

  @Output() cartellaSelezionata = new EventEmitter<string>()

  typeOfFolders: string[] = ['Posta in arrivo', 'Inviata', 'Cestino']

  onFolderSelection(cartella: string){
    this.cartellaSelezionata.emit(cartella)
  }

}

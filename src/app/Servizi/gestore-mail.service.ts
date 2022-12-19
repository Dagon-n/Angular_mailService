import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestoreMailService {

  constructor() { }

  formInputHandler(mittente:string, destinatario:string, oggetto:string, contenuto:string) {

    console.log('mittente: ', mittente, '\ndestinatario: ', destinatario, '\noggetto: ', oggetto, '\ncontenuto: ', contenuto)
    
  }

}

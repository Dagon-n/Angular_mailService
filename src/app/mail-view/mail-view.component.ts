import { Component } from '@angular/core';

@Component({
  selector: 'app-mail-view',
  templateUrl: './mail-view.component.html',
  styleUrls: ['./mail-view.component.css']
})
export class MailViewComponent {

  mailList: 
    { from: string, to: string, object: string, content: string, id: number }[] = [
    { 'from': 'mario.rossi@gmail.com', 
      'to': 'filippo.vallarino@gmail.com',
      'object': 'angular part 1',
      'content': 'a b c d e f g',
      'id': 1
    },
    { 'from': 'andrea.bianchi@gmail.com', 
      'to': 'filippo.vallarino@gmail.com',
      'object': 'angular part 2',
      'content': 'a b c d e f g h i',
      'id': 2
    },
    { 'from': 'luca.verdi@gmail.com', 
      'to': 'filippo.vallarino@gmail.com',
      'object': 'angular part 3',
      'content': 'a b c d e f g j i l m n o',
      'id': 3
    },
    { 'from': 'filippo.vallarino@gmail.com', 
      'to': 'giulio.bruni@gmail.com',
      'object': 'risposta angular',
      'content': '1 2 3 4 5 6 7',
      'id': 4
    }
  ];

  utenteLoggato = 'filippo.vallarino@gmail.com'

  mailRicevute = this.mailList.filter( function(mail : {
  from: string, 
  to: string, 
  object: string, 
  content: string, 
  id: number
  }): boolean {
    return mail.to == 'filippo.vallarino@gmail.com'
  });

  mailInviate = this.mailList.filter( function(mail : {
  from: string, 
  to: string, 
  object: string, 
  content: string, 
  id: number
  }): boolean {
    return mail.from == 'filippo.vallarino@gmail.com'
  });

  toShow = ''
  onCartellaSelezionata(value: string) {
    this.toShow = value
  }

  selectedMail = {}
  onMailSelezionata(value: object) {
    this.selectedMail = value 
  }

}

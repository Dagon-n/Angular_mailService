import { Component } from '@angular/core';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent {

  userLoggato = 'filippo.vallarino@gmail.com';

  mailList: { from: string, to: string, subject: string, body: string, id: number }[] = [
    { 'from': 'mario.rossi@gmail.com', 
      'to': 'filippo.vallarino@gmail.com',
      'subject': 'angular part 1',
      'body': 'a b c d e f g',
      'id': 1
    },
    { 'from': 'andrea.bianchi@gmail.com', 
      'to': 'filippo.vallarino@gmail.com',
      'subject': 'angular part 2',
      'body': 'a b c d e f g h i',
      'id': 2
    },
    { 'from': 'luca.verdi@gmail.com', 
      'to': 'filippo.vallarino@gmail.com',
      'subject': 'angular part 3',
      'body': 'a b c d e f g j i l m n o',
      'id': 3
    },
    { 'from': 'filippo.vallarino@gmail.com', 
      'to': 'giulio.bruni@gmail.com',
      'subject': 'risposta angular',
      'body': '1 2 3 4 5 6 7',
      'id': 4
    }
  ];

  mailRicevute = this.mailList.filter( function(mail : {
    from: string, 
    to: string, 
    subject: string, 
    body: string, 
    id: number
  }): boolean {
    return mail.to == 'filippo.vallarino@gmail.com'
  });


  mailInviate = this.mailList.filter( function(mail : {
    from: string, 
    to: string, 
    subject: string, 
    body: string, 
    id: number
  }): boolean {
    return mail.from == 'filippo.vallarino@gmail.com'
  });

}

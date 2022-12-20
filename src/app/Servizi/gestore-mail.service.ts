import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GestoreMailService {

  constructor() { }

  id = 6
  mailList: 
    { from: string, to: string, object: string, data: string, content: string, id: number }[] = [
    { 'from': 'mario.rossi@gmail.com', 
      'to': 'filippo.vallarino@gmail.com',
      'object': 'angular part 1',
      'data': '1/12/2022 12:30',
      'content': `
        Morbi tellus est, pellentesque auctor ex sed, lacinia consectetur enim. 
        Vivamus convallis malesuada turpis, sed faucibus neque porta quis. Fusce 
        on nibh ac dolor feugiat tincidunt quis et nibh. Nam dictum vehicula nisl 
        vitae laoreet. Aenean sem quam, eleifend quis metus ac, fermentum iaculis magna. 
        Pellentesque mollis fringilla ornare. In vitae tellus rutrum lorem congue tincidunt 
        sit amet vel ante.
      `, 
      'id': 1
    },
    { 'from': 'andrea.bianchi@gmail.com', 
      'to': 'filippo.vallarino@gmail.com',
      'object': 'angular part 2',
      'data': '2/12/2022 08:45',
      'content': `
        Aliquam non faucibus enim. Nam non nisl non elit malesuada ultricies. 
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
        Nulla varius libero in nunc dictum, mollis iaculis libero hendrerit. Etiam fringilla orci et 
        mauris tincidunt, a mollis odio posuere. Proin tempor nisi ipsum, quis fringilla sapien dapibus vel. 
        Phasellus quis dolor semper, placerat dui a, placerat neque.
      `,
      'id': 2
    },
    { 'from': 'luca.verdi@gmail.com', 
      'to': 'filippo.vallarino@gmail.com',
      'object': 'angular part 3',
      'data': '3/12/2022 16:36',
      'content':  `
        Quisque scelerisque lobortis diam nec suscipit. Vivamus convallis quam sed tincidunt 
        ultricies. Sed eu congue diam. Duis id mollis arcu. Orci varius natoque penatibus et magnis 
        dis parturient montes, nascetur ridiculus mus. Aliquam vel maximus tellus. 
        Proin vulputate tempor ex a fermentum. Maecenas porttitor mauris vel metus mattis sagittis. Cras 
        efficitur feugiat ligula eget tempus.
      `,
      'id': 3
    },
    { 'from': 'giulio.bruni@gmail.com', 
      'to': 'filippo.vallarino@gmail.com',
      'object': 'angular part 4',
      'data': '4/12/2022 18:17',
      'content':  `
        Etiam accumsan laoreet lectus, non scelerisque nisi iaculis at. Phasellus 
        nec vulputate erat. Sed blandit eget purus et bibendum. Pellentesque ultricies 
        mollis libero, sit amet tempus neque finibus sollicitudin. Nullam lobortis, turpis 
        in varius placerat, eros tortor vestibulum ligula, et posuere eros dui at dui. Nam 
        vestibulum quis est ac tincidunt.
      `,
      'id': 4
    },
    { 'from': 'filippo.vallarino@gmail.com', 
      'to': 'lorenzo.neri@gmail.com',
      'object': 'risposta angular',
      'data': '5/12/2022 21:30',
      'content':  `
        Lorenzum accumsan laoreet lectus, non scelerisque nisi iaculis at. Phasellus 
        nec vulputate erat. Sed blandit eget purus et bibendum. Pellentesque ultricies 
        mollis libero, sit amet tempus neque finibus sollicitudin. Nullam lobortis, turpis 
        in varius placerat, eros tortor vestibulum ligula, et posuere eros dui at dui. Nam 
        vestibulum quis est ac tincidunt.
      `,
      'id': 5
    },
    { 'from': 'claudio.gialli@gmail.com', 
      'to': 'filippo.vallarino@gmail.com',
      'object': 'risposta angular',
      'data': '6/12/2022 07:43',
      'content':  `
        Claudium accumsan laoreet lectus, non scelerisque nisi iaculis at. Phasellus 
        nec vulputate erat. Sed blandit eget purus et bibendum. Pellentesque ultricies 
        mollis libero, sit amet tempus neque finibus sollicitudin. Nullam lobortis, turpis 
        in varius placerat, eros tortor vestibulum ligula, et posuere eros dui at dui. Nam 
        vestibulum quis est ac tincidunt.
      `,
      'id': 6
    }
  ];

  mailRicevute = this.mailList.filter( function(mail : {
    from: string, 
    to: string, 
    object: string,
    data: string, 
    content: string, 
    id: number
    }): boolean {
      return mail.to == 'filippo.vallarino@gmail.com'
  });

  mailInviate = this.mailList.filter( function(mail : {
    from: string, 
    to: string, 
    object: string,
    data: string, 
    content: string, 
    id: number
    }): boolean {
      return mail.from == 'filippo.vallarino@gmail.com'
  });

  getMailsList() {
    return this.mailList
  }

  getMailRicevute() {
    return this.mailRicevute
  }

  getMailInviate() {
    return this.mailInviate
  }
 
  formInputHandler(mittente:string, destinatario:string, oggetto:string, contenuto:string) {

    this.mailInviate.push(
      { 
      'from': mittente, 
      'to': destinatario,
      'object': oggetto,
      'data': new Date().toLocaleString().slice(0, -3),
      'content': contenuto,
      'id': this.id + 1
      },
    )
    this.id = this.id + 1
    alert('Email Inviata!')
    
  }

  cancellaMailHandler(list: string, id: number) {

    console.log(list, id)

    if(list == 'mailRicevute') {
      let index = this.mailRicevute.map( mail => mail.id ).indexOf(id)
      this.mailRicevute.splice(index, 1)
    }

    if(list == 'mailInviate') {
      let index = this.mailInviate.map( mail => mail.id ).indexOf(id)
      this.mailInviate.splice(index, 1)
    }

    alert('Mail eliminata!')

  }

}

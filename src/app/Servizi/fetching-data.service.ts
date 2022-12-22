import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchingDataService {

  constructor(
    private http: HttpClient
  ) { }

  url: string = 'https://63a1a54bba35b96522e3f4f3.mockapi.io/mailList'

  getMails(): Observable<any> {
    return this.http.get(this.url)
  }

  spostaNelCestino(mail: any) {
    let urlMail: string = 'https://63a1a54bba35b96522e3f4f3.mockapi.io/mailList/' + mail.id
    let body = {
      from: mail.from,
      to: mail.to,
      object: mail.object,
      data: mail.data,
      content: mail.content,
      isFavourite: mail.isFavourite,
      isDeleted: true,
      id: mail.id
    }
    this.http.put<any>(urlMail, body)
    .subscribe(data => mail.id = data.id);
  }

  impostaPreferito(mail: any) {
    let urlMail: string = 'https://63a1a54bba35b96522e3f4f3.mockapi.io/mailList/' + mail.id
    console.log(mail.isFavourite)
    let body
    if(mail.isFavourite == false) {
      body = {
        from: mail.from,
        to: mail.to,
        object: mail.object,
        data: mail.data,
        content: mail.content,
        isFavourite: true,
        isDeleted: mail.isDeleted,
        id: mail.id
      }
      this.http.put<any>(urlMail, body)
      .subscribe(data => mail.id = data.id);
    }
    if(mail.isFavourite == true) {
      body = {
        from: mail.from,
        to: mail.to,
        object: mail.object,
        data: mail.data,
        content: mail.content,
        isFavourite: false,
        isDeleted: mail.isDeleted,
        id: mail.id
      }
      this.http.put<any>(urlMail, body)
      .subscribe(data => mail.id = data.id);
    }
  }

}

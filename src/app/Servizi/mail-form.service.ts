import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailFormService {

  constructor() {}

  formInputHandler(event: any) {
    console.log(event)
  }  

}
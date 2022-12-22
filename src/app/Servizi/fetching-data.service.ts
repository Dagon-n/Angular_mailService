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

}

import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MakeapirequestService {
  translateText(text: string) {
    const payload = new HttpParams().set('text', text);
    return this.http.post('http://localhost:3000/ps4/translate', payload)
  }

  constructor(private http: HttpClient) {}
}
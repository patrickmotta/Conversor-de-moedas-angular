import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  constructor(private http: HttpClient) { }

  RealizarConversao(valor, moedaDe, moedaPara): Observable<any>{
    console.log(moedaDe, valor, moedaPara);
    const apiKey = '';
    const url = `https://api.exchangerate.host/convert?from=${moedaDe}&to=${moedaPara}&amount=${valor}`;
    return this.http.get<any>(url);
  }
}

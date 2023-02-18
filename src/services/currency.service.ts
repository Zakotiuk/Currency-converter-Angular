import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICurrency } from 'src/model/currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

constructor(private http: HttpClient) { }

getAll(from : string, to : string, amount : number ) : Observable<ICurrency>{
  return this.http.get<ICurrency>(`https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}&places=2`)
}
}

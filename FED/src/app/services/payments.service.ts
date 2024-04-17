import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  baseurl = "https://localhost:7010";
  constructor(private httpClient : HttpClient) { }

  public placeOrder(reqBody: any): Observable<any>{
    return this.httpClient.post(this.baseurl + '' ,reqBody )
  }
}

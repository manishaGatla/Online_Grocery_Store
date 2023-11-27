import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  baseurl = "https://localhost:7274";
  constructor(private httpClient : HttpClient) { }

  public placeOrder(reqBody: any){
    return this.httpClient.post(this.baseurl + '' ,reqBody )
  }
}

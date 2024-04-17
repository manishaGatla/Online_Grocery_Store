import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {
  baseurl = "https://localhost:7010"
  constructor(private http: HttpClient) {}

  public addCustomer(data: any): Observable<any>{
    return this.http.post(this.baseurl + "/api/Register/newUser/customer", data);
  } 

  public addDeliveryExec(data: any): Observable<any>{
    return this.http.post(this.baseurl + "/api/Register/newUser/deliveryExec", data);
  } 
}

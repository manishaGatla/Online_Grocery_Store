import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {
  baseurl = "https://localhost:7274"
  constructor(private http: HttpClient) {}

  public addCustomer(data: any){
    return this.http.post(this.baseurl + "/api/Register/newUser/customer", data);
  } 

  public addDeliveryExec(data: any){
    return this.http.post(this.baseurl + "/api/Register/newUser/deliveryExec", data);
  } 
}

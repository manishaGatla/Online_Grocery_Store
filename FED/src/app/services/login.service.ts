import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseurl = "https://localhost:7274";
  isAdmin : boolean =false;
  isCustomer: boolean = false;
  isDeliveryExec: boolean =false;

  profileDetails: any;

  constructor(private http: HttpClient) {}

  public getDetailsByEmail(emailId: any){
    return this.http.get(this.baseurl + "/api/get?userEmail=" +emailId );
  } 

  public updateDetailsByEmail(reqBody: any,emailId : any){
    return this.http.post(this.baseurl + "/api/update?emailId=" +emailId ,reqBody );
  }

}

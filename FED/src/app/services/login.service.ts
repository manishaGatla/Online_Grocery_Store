import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseurl = "https://localhost:7274";
  isAdmin : boolean =false;
  isCustomer: boolean = false;
  isDeliveryExec: boolean =false;
  isLoginSuccessful: boolean = false;
  isLoggedOutSuccessful: boolean = false;

  profileDetails: any;

  constructor(private http: HttpClient) {}

  public getDetailsByEmail(emailId: any){
    const headers = new HttpHeaders().set('Accept', 'text/plain');
    return this.http.get(this.baseurl + "/api/UserDetails/get?UserEmail=" +emailId ,{headers} );
  } 

  public updateDetailsByEmail(reqBody: any,emailId : any){
    return this.http.post(this.baseurl + "/api/Update/update?emailId=" +emailId ,reqBody );
  }

}

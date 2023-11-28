import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  baseurl = "https://localhost:7274";
  showPaymentSection: boolean = false;
  addressDetails: any = {
    addressLine1: null,
    addressLine2: null,
    zip:null,
    state: null,
    city: null

  } ;
  constructor(private httpClient: HttpClient) { }

  getCartItemsByEmail(email: any){
    return this.httpClient.get(this.baseurl + '/api/Orders/getCart?UserEmail=' + email);
  }

  removeItemFromCart(cartItemId : any){
    return this.httpClient.post(this.baseurl + '' , cartItemId);
  }

  buyCartItems(cartItems: any, emailId: any){
    this.httpClient.post(this.baseurl + '' + emailId , cartItems);
  }
}

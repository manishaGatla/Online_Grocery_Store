import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  baseurl = "https://localhost:7274";
  constructor(private httpClient: HttpClient) { }

  getCartItemsByEmail(email: any){
    return this.httpClient.get(this.baseurl + '' + email);
  }

  removeItemFromCart(cartItemId : any){
    return this.httpClient.post(this.baseurl + '' , cartItemId);
  }

  buyCartItems(cartItems: any, emailId: any){
    this.httpClient.post(this.baseurl + '' + emailId , cartItems);
  }
}

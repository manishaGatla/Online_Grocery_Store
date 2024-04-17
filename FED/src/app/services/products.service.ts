import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseurl = "https://localhost:7010";
  constructor(private httpClient : HttpClient) { }


  addProduct(reqBody: any ){
   return this.httpClient.post(this.baseurl + '/api/UserDetails/', reqBody);
  }

  editProduct(reqBody: any): Observable<any>{
    return this.httpClient.post(this.baseurl + '', reqBody);
  }

  getProducts(): Observable<any>{
    return this.httpClient.get(this.baseurl + '/api/UserDetails/getAllProducts');
  }

  getCategories(): Observable<any>{
    return this.httpClient.get(this.baseurl + '/api/Orders/getAllCategories');
  }

  getProductsByCategories(category: any): Observable<any>{
    return this.httpClient.post(this.baseurl + '/api/Orders/getProductsByCategory',category);
  }

  addToCart(product: any): Observable<any>{
    return this.httpClient.post(this.baseurl + '/api/Orders/addToCart', product);
  }
}

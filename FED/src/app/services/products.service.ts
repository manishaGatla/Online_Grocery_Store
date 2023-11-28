import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseurl = "https://localhost:7274";
  constructor(private httpClient : HttpClient) { }


  addProduct(reqBody: any ){
   return this.httpClient.post(this.baseurl + '/api/UserDetails/', reqBody);
  }

  editProduct(reqBody: any){
    return this.httpClient.post(this.baseurl + '', reqBody);
  }

  getProducts(){
    return this.httpClient.get(this.baseurl + '/api/UserDetails/getAllProducts');
  }

  getCategories(){
    return this.httpClient.get(this.baseurl + '/api/Orders/getAllCategories');
  }

  getProductsByCategories(category: any){
    return this.httpClient.get(this.baseurl + '/api/Orders/getProductsByCategory?Category='+ category);
  }
}

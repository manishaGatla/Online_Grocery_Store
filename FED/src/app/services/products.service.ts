import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  baseurl = "https://localhost:7274";
  constructor(private httpClient : HttpClient) { }


  addProduct(reqBody: any ){
   return this.httpClient.post(this.baseurl + '', reqBody);
  }

  editProduct(reqBody: any){
    return this.httpClient.post(this.baseurl + '', reqBody);
  }
}

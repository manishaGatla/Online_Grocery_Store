import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseurl = "https://localhost:7274";
  constructor(private httpClient : HttpClient) { }

  getOrdersByEmailId(emailId: any){
    return this.httpClient.get(this.baseurl + '/api/get/orders?emailId =' + emailId);
  }

  getOrders(){
    return this.httpClient.get(this.baseurl + '/api/get/orders');
  }

  getDeliverables(emailId: any){
    return this.httpClient.get(this.baseurl + '/api/get/ordersDeliverable?emailId =' + emailId);
  }

  getDeliveredOrdersList(emailId: any){
    return this.httpClient.get(this.baseurl + '/api/get/getDeliveredOrdersList?emailId =' + emailId);
  }

  updateOrderStatus(reqBody: any){
    return this.httpClient.post(this.baseurl + '' ,reqBody )
  }
}

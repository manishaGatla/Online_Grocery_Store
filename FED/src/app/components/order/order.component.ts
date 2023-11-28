import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orders: any = [];
  constructor(private loginService : LoginService, private orderService: OrderService){}
  ngOnInit(): void {
    //this.getOrders();
  }

  getOrders(){
    if(this.loginService.isAdmin){
      this.orderService.getOrders().subscribe((res)=>{
        if(res){
          this.orders = res;
        }
      })
    }
    else if(this.loginService.isCustomer){
      this.orderService.getOrdersByEmailId(this.loginService.profileDetails.email).subscribe((res)=>{
        if(res){
          this.orders = res;
        }
      })
    }
    else if(this.loginService.isDeliveryExec){
      this.orderService.getDeliveredOrdersList(this.loginService.profileDetails.email).subscribe((res)=>{
        if(res){
          this.orders = res;
        }
      })
    }
  }


  // orders = [
  //   {
  //     title: 'Order 1',
  //     price: 100,
  //     deliveryTime: '2 days',
  //     showDetails: false
  //   },
  //   {
  //     title: 'Order 2',
  //     price: 75.5,
  //     deliveryTime: '1 day',
  //     showDetails: false
  //   },
  //   // Add more orders here
  // ];

  toggleOrderDetails(order: any) {
    order.showDetails = !order.showDetails;
  }
}

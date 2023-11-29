import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { OrderService } from 'src/app/services/order.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  orders: any = [];
  status: any;
  categories: any=[];
  constructor(public loginService : LoginService, private orderService: OrderService, private productService: ProductsService){}
  ngOnInit(): void {

    this.getCategories();
   
  }

  getCategories(){
    this.productService.getCategories().subscribe((resProd)=>{
      this.categories = resProd;
      this.getOrders();
    });
  }

  getOrders(){
    if(this.loginService.isAdmin){
      this.orderService.getOrders().subscribe((res)=>{
        if(res){
          this.orders = res;
          this.orders.forEach((order: any)=>{
            order.cartDetails.forEach((item: any)=>{
              item['isReturnInitiated'] = false;          
              item['isReturnable'] = this.categories.find((cat: any)=> cat.categoryName == item.category).isReturnable;
            })
          })
        }
      })
    }
    else if(this.loginService.isCustomer){
      this.orderService.getOrdersByEmailId(this.loginService.profileDetails._id).subscribe((res)=>{
        if(res){
          this.orders = res;
          this.orders.forEach((order: any)=>{
            order.cartDetails.forEach((item: any)=>{
              item['isReturnInitiated'] = false;          
              item['isReturnable'] = this.categories.find((cat: any)=> cat.categoryName == item.category).isReturnable;
            })
          })
        }
      })
    }
    else if(this.loginService.isDeliveryExec){
      this.orderService.getOrders().subscribe((res)=>{
        if(res){
          this.orders = res;
          this.orders.forEach((order: any)=>{
            order.cartDetails.forEach((item: any)=>{
              item['isReturnInitiated'] = false;          
              item['isReturnable'] = this.categories.find((cat: any)=> cat.categoryName == item.category).isReturnable;
            })
          })
        }
      })
    }
  }

  getOrderAddress(address: any){
   return  JSON.parse(address);
  }

  checkIsReturnAvaliable(order: any){
    var cartDetails= order.cartDetails.filter((cart: any)=> cart.isReturnable == "Yes");
    return cartDetails.length > 0 ? true : false;
  }


  updateCartItem(item: any, status: any = null){
    var body = {
      orderStatus:status == null ?  this.status : status ,
      orderId: item.orderId
    }
    this.orderService.updateOrderStatus(body).subscribe((res)=>{
      this.getOrders();
      this.status = null;
    })
  }

  toggleOrderDetails(order: any) {
    order.showDetails = !order.showDetails;
  }

  getAmount(item: any){
    return item.quantity * Number(item.price_Per_Each.split('/')[0].split('$')[1])
  }
}

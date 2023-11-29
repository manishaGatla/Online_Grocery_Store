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
  status: any;
  constructor(public loginService : LoginService, private orderService: OrderService){}
  ngOnInit(): void {
    this.getOrders();

    //   "_id": {
    //     "$oid": "6566f08f2f346cfba6c4bc34"
    //   },
    //   "orderDetails": {
    //     "_id": null,
    //     "customerId": "6566e379fc369df222edb37a",
    //     "orderDate": "11/29/2023 2:04:31 AM",
    //     "deliveryAddress": "{\"addressLine1\":\"2-3-36/1, Weekly Bazar, Jagityal\",\"addressLine2\":\"test\",\"zip\":\"505327\",\"state\":\"Telangana\",\"city\":\"Jagityal\"}",
    //     "deliveryType": "By Executive",
    //     "orderStatus": "Order Confirmed"
    //   },
    //   "cartDetails": [
    //     {
    //       "_id": "6566f0592f346cfba6c4bc30",
    //       "name": "Naan Original 5 Flatbreads",
    //       "previous_Price": "3.29",
    //       "price_Per_Each": "$3/oz",
    //       "category": "Bakery",
    //       "product_URL": "https://assets.shop.loblaws.ca/products/21051353/b2/en/front/21051353_front_a06_@2.png",
    //       "customerEmail": "siri@gm",
    //       "ProductId": "65658a55b10febd60f6e0e1c",
    //       "Quantity": 1
    //     }
    //   ],
    //   "paymentDetails": {
    //     "_id": null,
    //     "orderId": "6566f08f2f346cfba6c4bc31",
    //     "paymentMethod": "debit",
    //     "amount": "$3",
    //     "paymentDate": "11/29/2023 2:04:31 AM",
    //     "CustomerId": "6566e379fc369df222edb37a",
    //     "CardHolderName": "ewe",
    //     "CustomerName": "siri",
    //     "CardNumber": "1222222222222",
    //     "Cvv": 121
    //   },
    //   "orderId": "6566f08f2f346cfba6c4bc31"
    // },
    // {
    //   "_id": {
    //     "$oid": "6566f284056e81394cd14922"
    //   },
    //   "orderDetails": {
    //     "_id": null,
    //     "customerId": "6566f263056e81394cd1491b",
    //     "orderDate": "11/29/2023 2:12:52 AM",
    //     "deliveryAddress": "{\"addressLine1\":\"2-3-36/1, Weekly Bazar, Jagityal\",\"addressLine2\":\"testing\",\"zip\":\"505327\",\"state\":\"Telangana\",\"city\":\"Jagityal\"}",
    //     "deliveryType": "By Executive",
    //     "orderStatus": "Order Confirmed"
    //   },
    //   "cartDetails": [
    //     {
    //       "_id": "6566f26c056e81394cd1491c",
    //       "Name": "Naan Original 5 Flatbreads",
    //       "Previous_Price": "3.29",
    //       "Price_Per_Each": "$3/oz",
    //       "Category": "Bakery",
    //       "Product_URL": "https://assets.shop.loblaws.ca/products/21051353/b2/en/front/21051353_front_a06_@2.png",
    //       "CustomerEmail": "aaa",
    //       "ProductId": "65658a55b10febd60f6e0e1c",
    //       "Quantity": 1
    //     },
    //     {
    //       "_id": "6566f26f056e81394cd1491d",
    //       "Name": "Naan Garlic 5 Flatbreads",
    //       "Previous_Price": "3.29",
    //       "Price_Per_Each": "$0.66/100g",
    //       "Category": "Bakery",
    //       "Product_URL": "https://assets.shop.loblaws.ca/products/21050380/b2/en/front/21050380_front_a06_@2.png",
    //       "CustomerEmail": "aaa",
    //       "ProductId": "65658a55b10febd60f6e0e1e",
    //       "Quantity": 1
    //     }
    //   ],
    //   "paymentDetails": {
    //     "_id": null,
    //     "orderId": "6566f284056e81394cd1491e",
    //     "paymentMethod": "debit",
    //     "amount": "$3.66",
    //     "paymentDate": "11/29/2023 2:12:52 AM",
    //     "CustomerId": "6566f263056e81394cd1491b",
    //     "CardHolderName": "test",
    //     "CustomerName": "aaa",
    //     "CardNumber": "12121212121221",
    //     "Cvv": 121
    //   },
    //   "orderId": "6566f284056e81394cd1491e"
    // }];
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
      this.orderService.getOrdersByEmailId(this.loginService.profileDetails._id).subscribe((res)=>{
        if(res){
          this.orders = res;
        }
      })
    }
    else if(this.loginService.isDeliveryExec){
      this.orderService.getOrders().subscribe((res)=>{
        if(res){
          this.orders = res;
        }
      })
    }
  }

  getOrderAddress(address: any){
   return  JSON.parse(address);
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

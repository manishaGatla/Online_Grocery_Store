import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { NotificationService } from 'src/app/services/notification.service';
import { OrderService } from 'src/app/services/order.service';
const {  ObjectId} = require('mongodb');

@Component({
  selector: 'app-deliverables',
  templateUrl: './deliverables.component.html',
  styleUrls: ['./deliverables.component.scss']
})
export class DeliverablesComponent implements OnInit {
  deliverablesItems: any = [];
  constructor(private orderService: OrderService,private loginService: LoginService, private notificationService: NotificationService){}
  ngOnInit():void {
    this.getDeliverables();
  }

  getDeliverables(){
    this.orderService.getDeliverables(this.loginService.profileDetails.email).subscribe((res)=>{
      if(res){
        this.deliverablesItems = res;
      }
    })
  }

  toggleItemDetails(item : any) {
    item.showDetails = !item.showDetails;
  }

  updateOrderStatus(){
    var filter ="{_id:}"+ new ObjectId(this.loginService.profileDetails.email);
    var update = {
      status:"delivered"
    };
    var body = {
      filter: filter,
      update : update
    }
    this.orderService.updateOrderStatus(body).subscribe((res)=>{
      if(res){
        this.notificationService.messageshow.next('Order Status Updated Successfully.')
      }
    })
  }
}

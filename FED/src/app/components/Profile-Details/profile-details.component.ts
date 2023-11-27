import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit{
  email : any;
  constructor(public loginService: LoginService, private notificationService :NotificationService){}
  ngOnInit(): void{

    this.email = this.loginService.profileDetails.email
  }

  updateProfile(){
  var filter ="{email:}"+ this.email;
  var update = this.getBody();
  var body = {
    filter: filter,
    update : update,
    role: this.loginService.isAdmin ? "Admin": this.loginService.isDeliveryExec ? "DeliveryExecutive" : "Customer"
  }
  this.loginService.updateDetailsByEmail(body, this.email).subscribe((res)=>{
    if(res){
      this.notificationService.messageshow.next('Details Updated Successfully.');
    }
  })
  
  }


  getBody(){
    if(this.loginService.isCustomer){
      return {
        name: this.loginService.profileDetails.name,
        email : this.loginService.profileDetails.email,
        password: this.loginService.profileDetails.password,
        phoneNumber: this.loginService.profileDetails.phone   
      }
    }
    else{
      return  {
        name: this.loginService.profileDetails.name,
        email : this.loginService.profileDetails.email,
        password: this.loginService.profileDetails.password,
        phoneNumber: this.loginService.profileDetails.phone,
        accountNumber : this.loginService.profileDetails.accountNumber,
        accountHolderName: this.loginService.profileDetails.accountHolderName,
        routingNumber : this.loginService.profileDetails.routingNumber
      }
      
      

    }

  }
  
}

import { Component, OnInit } from '@angular/core';
import { RegisterServiceService } from '../../services/register-service.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  name: string = '';
  phoneNumber: string = '';
  email: string = '';
  password: string = '';
  role: string = 'customer'; // Default role
  accountNumber: string = '';
  routingNumber: string = '';
  accountHolderName: string = '';
  constructor(private registerService: RegisterServiceService, private notificationService: NotificationService) {}
  ngOnInit(): void {
    this.getorders
  }

  getorders(){

  }

  onSubmit() {
   var reqbody = this.getBody();
   if(this.role == 'deliveryExe'){
    this.registerService.addDeliveryExec(reqbody).subscribe((res)=>{
      if(res){
        this.notificationService.messageshow.next('Registration Successful!');
        window.location.href ='login';
      }
    })
   
   }
   else{
    this.registerService.addCustomer(reqbody).subscribe((res)=>{
      if(res){
        this.notificationService.messageshow.next('Registration Successful!');
        window.location.href ='login';
      }
    })
    
   }

  }

  getBody(){
    if(this.role == 'deliveryExe'){
      return  {
        name: this.name,
        email : this.email,
        password: this.password,
        phoneNumber: this.phoneNumber,
        accountNumber : this.accountNumber,
        nameOnCard: this.accountHolderName,
        routingNumber : this.routingNumber
      }
    }
    else{
      return {
        name: this.name,
        email : this.email,
        password: this.password,
        phoneNumber: this.phoneNumber   
      }
      

    }

  }

  OnRadioBtnChange(event: any){
    this.role  = event.target.value;
  }
}

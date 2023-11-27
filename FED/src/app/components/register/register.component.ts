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
  phone: string = '';
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
    // this.registerService.addDeliveryExec(reqbody).subscribe((res)=>{
    //   if(res){
    //     this.notificationService.showSuccess('Registration Successful!');
    //     window.location.href ='login';
    //   }
    // })
   // this.notificationService.showSuccess('Registration Successful!');
    this.notificationService.messageshow.next('Registration Successful!');
    window.location.href ='login';
   }
   else{
    // this.registerService.addCustomer(reqbody).subscribe((res)=>{
    //   if(res){
    //     this.notificationService.showSuccess('Registration Successful!');
    //     window.location.href ='login';
    //   }
    // })
    //window.location.href ='login';
    this.notificationService.messageshow.next('Registration Successful!');
    
   }

  }

  getBody(){
    if(this.role == 'deliveryExe'){
      return  {
        name: this.name,
        email : this.email,
        password: this.password,
        phoneNumber: this.phone,
        accountNumber : this.accountNumber,
        accountHolderName: this.accountHolderName,
        routingNumber : this.routingNumber
      }
    }
    else{
      return {
        name: this.name,
        email : this.email,
        password: this.password,
        phoneNumber: this.phone   
      }
      

    }

  }

  OnRadioBtnChange(event: any){
    this.role  = event.target.value;
  }
}

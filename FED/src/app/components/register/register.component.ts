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
  isPhoneNumberValid: boolean = true;
  isAccountNumberValid: boolean = true;
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
  validatePhoneNumber(event: Event) {
    if((event.target as HTMLInputElement).value != null){
    const inputValue = (event.target as HTMLInputElement).value;
    const phoneNumberPattern = /^[0-9]{10}$/;
    this.isPhoneNumberValid = phoneNumberPattern.test(inputValue);
    }
}

AccountNumberValidation(accountNumber: string): boolean {
  return accountNumber != null && accountNumber != ""? /^\d{12}$/.test(accountNumber) : true; 
}

RoutingNumberValidation(routingNumber: string): boolean {
  
  return routingNumber != null && routingNumber != ""? /^\d{9}$/.test(routingNumber) : true ; 
}

  getBody(){
    if(this.role == 'deliveryExe'){
      return  {
        name: this.name,
        email : this.email,
        password: this.password,
        phoneNumber: this.phoneNumber.toString(),
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
        phoneNumber: this.phoneNumber.toString()   
      }
      

    }

  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email != null  && email != "" ? emailRegex.test(email) : true;
  }

  OnRadioBtnChange(event: any){
    this.role  = event.target.value;
  }
}

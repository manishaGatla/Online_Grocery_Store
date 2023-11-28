import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(public loginService: LoginService, private notificationService: NotificationService){}
  email: any;
  password: any;
  onLogin(){
    this.loginService.getDetailsByEmail(this.email).subscribe((res : any)=>{
      res= 
      if(res){
        var data = res;

        this.loginService.profileDetails = res;
        if(data.password == this.password){
          this.loginService.isLoginSuccessful= true;
          window.location.href ='/home';
        }
        else if(data.password !== this.password){
          this.notificationService.messageshow.next("Incorrect password, please enter correct password and try again.");
        }

      }
      else{
        this.notificationService.messageshow.next("User Not found, Please Register");
      }

    })
  }

}

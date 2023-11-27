import { Component } from '@angular/core';
import { NotificationMsgComponent } from './components/notification-msg/notification-msg.component';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public loginService : LoginService){}
  

  logOut(){
    this.loginService.profileDetails = null;
    this.loginService.isAdmin = false;
    this.loginService.isCustomer = false;
    this.loginService.isDeliveryExec = false;
    this.loginService.isLoginSuccessful = false;
    this.loginService.isLoggedOutSuccessful = true;
  }
}

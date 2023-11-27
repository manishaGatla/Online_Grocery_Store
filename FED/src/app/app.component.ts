import { Component } from '@angular/core';
import { NotificationMsgComponent } from './components/notification-msg/notification-msg.component';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private loginService : LoginService){}
  
}

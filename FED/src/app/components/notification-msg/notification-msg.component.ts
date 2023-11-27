import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification-msg',
  template: `
    <div *ngIf="message" class="notification">
      {{ message }}
    </div>
  `,
  styles: [`
    .notification {
      position: fixed;
      top: 86px;
      right: 20px;
      padding: 10px;
      background-color: #4CAF50;
      color: white;
      border-radius: 5px;
    }
  `]
})
export class NotificationMsgComponent implements OnInit {
  constructor(public notificationService: NotificationService) { }
  public message: any ;

  ngOnInit(): void {
    this.notificationService.messageshow.subscribe((res)=>{
      if(res != null){
        this.assignMessage(res);
        setTimeout(() => {
          this.assignMessage(null);
          window.location.href ="/login";
        }, 5000);
      }
    })
  }

  assignMessage(msg : any) {
    this.message =  msg;
  }
}

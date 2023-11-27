import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private loginService: LoginService){}
  email: any;
  password: any;
  onLogin(){
    this.loginService.getDetailsByEmail(this.email).subscribe((res : any)=>{
      if(res){
        var data = res;

        this.loginService.profileDetails = res;
        if(data.password == this.password){
          window.location.href ='';
        }
      }
    })
  }

}

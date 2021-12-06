import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    username:string="";
    password:string="";
    msg:string="";

    checkLogin(){
      if(this.username=="admin" && this.password=="admin123"){
        this.msg="valid Credential";
      }else{
        this.msg="Invalid Credential";
      }
      
    }
}

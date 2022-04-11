import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mensa',
  templateUrl: './mensa.component.html',
  styleUrls: ['./mensa.component.css']
})
export class MensaComponent implements OnInit {
  isLogin: boolean = false
  constructor(  private _auth: AuthService, private _router:Router) {
    
   }

  ngOnInit() {
    this.isUserLogin();
    if (!this.isLogin) {
      this._router.navigate[''];
    }

  }
  isUserLogin(){
    console.log(this._auth.getUserDetails())
    if(this._auth.getUserDetails() != null){

        this.isLogin = true;
    }
    else{
      
    }

  }

}

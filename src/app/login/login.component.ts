import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service'
import { AuthService } from 'src/app/services/auth.service'
import { Router } from '@angular/router';
import {User} from 'src/app/user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogin: boolean = false
  rUsername : string
  errorMessage
  constructor(
    private _api: ApiService, 
    private _auth: AuthService, 
    private _router:Router,
    private formBuilder: FormBuilder
  ) { }
  ngOnInit() {

    this.isUserLogin(); 

  }
 
  onSubmit(form: any) {
    
    console.log('Your form data : ', form.value);
    this.rUsername = JSON.stringify(form.name);
    this._api.postTypeRequest('/user/auth', form.value).subscribe((res: any) => {
      if (res.status) { 
       
        console.log(res)
        this._auth.setDataInLocalStorage('userData',this.rUsername);  
        this._auth.setDataInLocalStorage('token', res.token);
        if (this.rUsername=="admin") {
          
        } else {
          window.location.reload();
        }  
        
      } else { 
        alert(res.msg)
      }
    }, err => {
      this.errorMessage = err['error'].message;
    });
  }

  isUserLogin(){
    console.log(this._auth.getUserDetails())
    if(this._auth.getUserDetails() != null){

        this.isLogin = true;
    }

  }

  logout(){
    this._auth.clearStorage()
    window.location.reload();
  }
}
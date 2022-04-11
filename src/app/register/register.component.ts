import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service'
import { AuthService } from 'src/app/services/auth.service'
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isLogin: boolean = false
  errorMessage

  constructor(
    private _api: ApiService, 
    private _auth: AuthService, 
    private _router:Router
  ) { }

  ngOnInit() {

    this.isUserLogin(); 

  }
  
  onSubmit(form: any) {
    console.log('Your form data : ', form.value);
    if(this.validatePassword(JSON.stringify(form.password), JSON.stringify(form.confirmpassword))){
      this._api.postTypeRequest('/user', form.value).subscribe((res: any) => {
        if (res.status) { 
          console.log(res)
          this._auth.setDataInLocalStorage('userData',JSON.stringify(form.name));  
        this._auth.setDataInLocalStorage('token', res.token);  
        window.location.reload();
        } else { 
          console.log(res)
          alert(res.msg)
        }
      }, err => {
        this.errorMessage = err['error'].message;
      });
  }
  else{
    console.log('Password mismatch')
  }
  }
  isUserLogin(){
    
    if(this._auth.getUserDetails() != null){

        this.isLogin = true;
    }

  }

  validatePassword(password, confirmpassword){
    if (password == confirmpassword) {
      return true;
    } else {
      return false;
    }
  }

}
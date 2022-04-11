import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {User} from 'src/app/user'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:3000/api';

  constructor(private _http: HttpClient) {
  }



  // getname(username) {
  //   const url2 = `http://localhost:3000/api/user/${username}`;
  //   console.log(this._http.get<User[]>(url2))
  //  return this._http.get<User[]>(url2);
  // }

  getTypeRequest(url) {
    return this._http.get(`${this.baseUrl}${url}`).pipe(map(res => {
      return res;
    }));
  }

  postTypeRequest(url, payload) {
    return this._http.post(`${this.baseUrl}${url}`, payload).pipe(map(res => {
      return res;
    }));
  }

  putTypeRequest(url, payload) {
    return this._http.put(`${this.baseUrl}${url}`, payload).pipe(map(res => {
      return res;
    }));
  }
  



}
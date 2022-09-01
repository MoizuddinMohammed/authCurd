import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { 

  }
  ProceedLogin(inputdata:any){
    return this.http.get('http://localhost:3000/authenticate',inputdata);
  }
  IsLoggedIn(){
    return localStorage.getItem('username')!=null;
  }
  GetUsername(){
    return localStorage.getItem('username')!=null?localStorage.getItem('username'):'';
  }
}

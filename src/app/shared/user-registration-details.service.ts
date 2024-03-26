import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { UserRegistrationDetails } from './user-registration-details';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationDetailsService {
  regexPattern={
    NameRegex:/^[A-Z][a-z]*$/,
    Digits:/\d/,
    WhiteSpace:/\s/,
    PhoneNumber:/^[6-9]\d{9}$/
  }
  url:string=environment.apiBaseUrl;
  headers:{[key:string]:string};
  constructor(private httpclient:HttpClient) {
   this.headers ={
      'Authorization':environment.bearerToken,
      'Content-Type':'application/json'
    }
   }
  RegisterUsers(data:UserRegistrationDetails){
     return this.httpclient.post(this.url+"Registeration",data,{headers:this.headers})
  }
}

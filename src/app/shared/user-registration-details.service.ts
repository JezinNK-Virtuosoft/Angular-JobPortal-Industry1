import { Injectable } from '@angular/core';

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
  constructor() { }
  
}

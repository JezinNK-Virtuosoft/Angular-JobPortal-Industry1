import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsertypeMasterService {

  constructor() { }
  
}
export enum UserType{
  Admin=1001,
  Employer=1003,
  Jobseeker=1002
}
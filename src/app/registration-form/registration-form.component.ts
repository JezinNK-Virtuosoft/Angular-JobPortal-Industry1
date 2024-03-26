import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { UsertypeMasterService,UserType } from '../shared/usertype-master.service';
import { UserRegistrationDetailsService } from '../shared/user-registration-details.service';

function CheckOnlyOneCheckbox():ValidatorFn{
  return (control:AbstractControl) :{[key:string]:any} | null =>{
    const values= control.value;
    const checkCheckboxes=Object.values(values).filter(value=> value===true);

    const numberOfCheckedBoxes=checkCheckboxes.length;
    if(numberOfCheckedBoxes===1){
      return null;
    }
    else{
      return {'onlyOneCheckboxAllowed':true};
    }
  }
}
@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.scss',
})
export class RegistrationFormComponent {
  RegistrationForm: FormGroup;
  isFormSubmitted: boolean = false;
  usertype;
  constructor(public userTypeService:UsertypeMasterService,private userDetailsRegistration:UserRegistrationDetailsService) {
    this.usertype=UserType;
    this.RegistrationForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
        Validators.pattern(userDetailsRegistration.regexPattern.NameRegex)
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
        Validators.pattern(userDetailsRegistration.regexPattern.NameRegex)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.maxLength(50),
      ]),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10),
        Validators.pattern(userDetailsRegistration.regexPattern.PhoneNumber)
      ]),
      isEmployer: new FormControl(false),
      isJobseeker: new FormControl(false),
    },{
      validators:CheckOnlyOneCheckbox()
    });
  }

  RegisterButton() {
    const isFormValid = this.RegistrationForm.valid;
    debugger;

    this.isFormSubmitted = true;
  }

  get isRoleinvalid() {
    const isEmployerChecked= this.RegistrationForm.get('isEmployer')?.value;
    const isJobseekerChecked=this.RegistrationForm.get('isJobseeker')?.value;

    return (!isEmployerChecked && !isJobseekerChecked) 
  }
} 

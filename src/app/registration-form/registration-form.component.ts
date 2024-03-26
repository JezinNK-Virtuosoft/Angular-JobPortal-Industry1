import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UsertypeMasterService,UserType } from '../shared/usertype-master.service';


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
  constructor(public userTypeService:UsertypeMasterService) {
    this.usertype=UserType;
    this.RegistrationForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
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
      ]),
      isEmployer: new FormControl(false),
      isJobseeker: new FormControl(false),
    });
  }

  RegisterButton() {
    const isFormValid = this.RegistrationForm.valid;
    debugger;

    this.isFormSubmitted = true;
  }

  get isRoleinvalid() {
    return (
      this.RegistrationForm.get('isEmployer')?.invalid &&
      this.RegistrationForm.get('isJobseeker')?.invalid &&
      (this.RegistrationForm.get('isEmployer')?.touched ||
        this.RegistrationForm.get('isJobseeker')?.touched ||
        this.isFormSubmitted ||
        this.RegistrationForm.get('isEmployer')?.dirty ||
        this.RegistrationForm.get('isJobseeker')?.dirty)
    );
  }
}

import {Component, Input, OnChanges, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MdSnackBar} from '@angular/material';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-tech-register',
  templateUrl: './tech-register.component.html',
  styleUrls: ['./tech-register.component.css']
})
export class TechRegisterComponent implements OnInit {

  formErrors = {
    name: '',
    email: '',
    phone: '',
    college: '',
    city: ''
  };

  validationMessages = {
    name: {
      required: 'Name is required'
    },
    email: {
      required: 'Email is required',
      email: 'Invalid Email Id'
    },
    phone: {
      required: 'Phone is required',
      pattern: 'Phone number is not valid',
      maxlength: 'Phone number exceeds 10 digit'
    },
    college: {
      required: 'College is required'
    },
    city: {
      required: 'City is required'
    }
  };

  registerForm: FormGroup;
  phoneRe: RegExp = new RegExp('^[0-9]{10}$');

  @Input()
  user = this.authService.user;

  constructor(private formBuild: FormBuilder,
              private authService: AuthService,
              private snackbar: MdSnackBar) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.registerForm = this.formBuild.group({
      'name': [this.user.name, [
        Validators.required
      ]],
      'email': [this.user.email, [
        Validators.required,
        Validators.email
      ]],
      'phone': [this.user.phone, [
        Validators.required,
        Validators.pattern(this.phoneRe),
        Validators.maxLength(10)
      ]],
      'college': [this.user.college, [
        Validators.required
      ]],
      'gender': [this.user.gender, [
        Validators.required
      ]],
      'city': [this.user.city, [
        Validators.required
      ]]
    });

    this.registerForm.valueChanges
      .subscribe((data) => this.onValueChanged(data));

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.registerForm) { return; }
    const form = this.registerForm;

    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && !control.pristine && !control.valid) {
          const messages = this.validationMessages[field];
          const key = Object.keys(control.errors)[0];
          this.formErrors[field] = messages[key];
        }
      }
    }
  }

  updateUser(olduser: any, newuser: any) {
    for (const keys in newuser) {
      if (newuser.hasOwnProperty(keys)) {
        console.log(keys);
        olduser[keys] = newuser[keys];
      }
    }
    return olduser;
  }

  register() {
    const myUser = this.registerForm.value;
    this.authService.updateUser(this.updateUser(this.user, myUser)).then((res) => {
      this.user = res;
      this.snackbar.open('Your Profile is updated', '', {
        duration: 2000
      });
    }).catch((err) => {
      console.error(err);
    });
  }
}

import {Component, Input, OnChanges, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-tech-register',
  templateUrl: './tech-register.component.html',
  styleUrls: ['./tech-register.component.css']
})
export class TechRegisterComponent implements OnInit, OnChanges {

  formErrors = {
    name: '',
    email: '',
    phone: '',
    whatsapp: '',
    college: '',
    city: ''
  };

  validationMessages = {
    name: {
      required: 'Name is required',
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
    whatsapp: {
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
              private authService: AuthService) { }

  ngOnInit() {
    this.buildForm();
  }

  ngOnChanges() {
    console.log(this.user);
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
      'phone': ['1231231231', [
        Validators.required,
        Validators.pattern(this.phoneRe),
        Validators.maxLength(10)
      ]],
      'whatsapp': ['1231231231', [
        Validators.pattern(this.phoneRe),
        Validators.maxLength(10)
      ]],
      'college': ['My college', [
        Validators.required
      ]],
      'gender': [this.user.gender, [
        Validators.required
      ]],
      'dob': [this.user.dob],
      'city': ['Kanpur', [
        Validators.required
      ]],
      'ref_code': [this.user.ref_code, [
        Validators.maxLength(20)
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

  updateUser(olduser:any, newuser: any) {
    for(const keys in newuser) {
      console.log(keys);
      olduser[keys] = newuser[keys];
    }
    return olduser;
  }

  register() {
    let myUser = this.registerForm.value;
    this.authService.updateUser(this.updateUser(this.user, myUser)).then((res) => {
      this.user = res;
      console.log(this.user, "User Updated");
    }).catch((err) => {
      console.error(err);
    });
  }
}


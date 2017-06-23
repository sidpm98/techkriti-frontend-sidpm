import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { Cities as CITIES }  from '../../apidata/city-name';
import { ToscAuthService } from '../../services/auth/tosc-auth.service';
import { SchoolService } from '../../services/school-name';

import { TOSCUser } from '../../models/users';

const passwordMatchValidator: ValidatorFn = function(g: FormGroup) {
    return g.get('password').value === g.get('passwordConfirm').value
      ? null : {'mismatch': true};
};


@Component({
  selector: 'app-tosc-register',
  templateUrl: './tosc-register.component.html',
  styleUrls: ['./tosc-register.component.css']
})
export class ToscRegisterComponent implements OnInit {

  private user = new TOSCUser();
  selected: string = '';
  private standards: any[] = [
    {group: 'A', std: '09'},
    {group: 'A', std: '10'},
    {group: 'B', std: '11'},
    {group: 'B', std: '12'}
  ];

  private schools: any[] = [
    {code: 'DAV', name: 'DAV Public School'},
    {code: 'GUR', name: 'Gurukul'},
    {code: 'JOS', name: 'St.Joseph'}
  ];

  private cities: string[];
  private filteredCity: any;
  private filteredSchool: any;
  private autoSchools: string[] = [];
  private schoolObject: any;
  public code: string;


  private formErrors = {
    name: '',
    username: '',
    email: '',
    phone: '',
    standard: '',
    schoolAuto: '',
    cityAuto: '',
  };

  private passErrors = {
    password: '',
    passwordConfirm: ''
  };

  private validationMessages = {
    name: {
      required: 'Name is required',
    },
    username: {
      required: 'Username is required',
      minlength: 'Minimum length of the username should be 4',
      maxlength: 'Maximum length of the username should be 10'
    },
    password: {
      required: 'Password is required',
      minlength: 'Password should be minimum of 8 characters long'
    },
    passwordConfirm: {
      required: 'Password is required',
      mismatch: 'Password doesnt match'
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
    standard: {
      required: 'Class is required'
    },
    cityAuto: {
      required: 'City is required'
    },
    schoolAuto: {
      required: 'School is required'
    }
  };

  private registerForm: FormGroup;
  private phoneRe: RegExp = new RegExp('^[0-9]{10}$');
  private passwords: FormGroup;

  constructor(private formBuild: FormBuilder,
              private authService: ToscAuthService,
              private router: Router,
              private schoolService: SchoolService) { }

  ngOnInit() {
    this.buildForm();

    this.cities = CITIES;
    const cityAutoControl = this.registerForm.get('cityAuto');
      this.filteredCity = cityAutoControl.valueChanges
        .startWith(null)
        .map(name => this.filterCity(name));

    const schoolAutoControl = this.registerForm.get('schoolAuto');
      this.filteredSchool = schoolAutoControl.valueChanges
        .startWith(null)
        .map(name => this.filterSchools(name));

  }
  
  schoolCode(e: string) {
    for (let school in this.schoolObject) 
      if(this.schoolObject[school].school == e)
        this.code = this.schoolObject[school].code;
  }

  getSchools(name: string = 'KANPUR') {
    this.schoolService.getSchool(name)
      .then((res) => {
        this.schoolObject = res;
        for (let school in res) {
          this.autoSchools.push(res[school].school);
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  buildForm() {
    this.passwords =  this.formBuild.group({
        'password': ['', [
          Validators.required,
          Validators.minLength(8)
        ]],
        'passwordConfirm': ['', [
          Validators.required,
      ]]
    }, { validator: passwordMatchValidator });

    this.registerForm = this.formBuild.group({
      'name': ['', [
        Validators.required
      ]],
      'username': ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10)
      ]],
      'passwords': this.passwords,
      'email': ['', [
        Validators.required,
        Validators.email
      ]],
      'phone': ['', [
        Validators.required,
        Validators.pattern(this.phoneRe),
        Validators.maxLength(10)
      ]],
      'standard': ['', [
        Validators.required
      ]],
      'cityAuto': ['', [
        Validators.required
      ]],
      'schoolAuto': ['', [
        Validators.required
      ]],
      'schoolCode': ['']
    });

    this.registerForm.valueChanges
      .subscribe((data) => this.onValueChanged(data));

    this.onValueChanged();
  }


  onValueChanged(data?: any) {
    if (!this.registerForm) { return; }
    const form = this.registerForm;
    const passForm = this.registerForm.get('passwords');

      const controll = passForm.get('password');
      if (controll && !controll.pristine && !controll.valid) {
        const messages = this.validationMessages['password'];
        const key = Object.keys(controll.errors)[0];
        this.passErrors['password'] = messages[key];
      }


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

  filterCity(val: string) {
    return val ? this.cities.filter(s => new RegExp(`${val}`, 'gi').test(s)) : this.cities ;
  }

  filterSchools(val: string) {
    return val ? this.autoSchools.filter(s => new RegExp(`${val}`, 'gi').test(s)) : this.autoSchools ;
  }

  checkKey(e: KeyboardEvent,city: string) {
    console.log(e);
    var code = (e.keyCode ? e.keyCode : e.which);
    if(code == 13) { //Enter keycode
      this.options(city);
    }
}

  schoolCode(e: string) {
    for (let school in this.schoolObject) {
      if(this.schoolObject[school].school == e) this.code = this.schoolObject[school].code
    }
  }

  register() {
    this.registerForm.value.password = this.registerForm.value.passwords.password;
    delete this.registerForm.value.passwords;
    this.user = this.registerForm.value;
    this.authService.signUp(this.user)
      .then((res) => {
        console.log('register successfully');
      })
      .catch((err) => {
        console.error(err);
      });
  }


  options(e) {
    console.log(e);
    this.autoSchools = [];
    let schoolinbox = this.registerForm.get('schoolAuto');
    schoolinbox.setValue('');
    this.getSchools(e);
  }
}

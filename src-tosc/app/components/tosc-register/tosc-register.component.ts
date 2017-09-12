import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MdDialog } from '@angular/material';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';

import { SuccessfullDialogComponent } from '../successfull-dialog/successfull-dialog.component';

import { ToscAuthService } from '../../services/auth/tosc-auth.service';
import { RegistrationFormService } from '../../services/registration-form-service';

import { TOSCUser } from '../../models/users';

@Component({
  selector: 'app-tosc-register',
  templateUrl: './tosc-register.component.html',
  styleUrls: ['./tosc-register.component.css']
})
export class ToscRegisterComponent implements OnInit {

  user = new TOSCUser();
  selected = '';
  standards: any[] = [
    {group: 'A', std: '09'},
    {group: 'A', std: '10'},
    {group: 'B', std: '11'},
    {group: 'B', std: '12'}
  ];

  cities: string[] = [];
  filteredCity: any;
  filteredSchool: any;
  autoSchools: string[] = [];
  schoolObject: any;
  public code: string;
  public gotCities = false;
  public gotSchools = true;

  formErrors = {
    name: '',
    email: '',
    phone: '',
    class: '',
    school: '',
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
    class: {
      required: 'Class is required'
    },
    city: {
      required: 'City is required'
    },
    school: {
      required: 'School is required'
    }
  };

  registerForm: FormGroup;
  phoneRe: RegExp = new RegExp('^[0-9]{10}$');

  constructor(private formBuild: FormBuilder,
              private authService: ToscAuthService,
              private router: Router,
              private registrationFormService: RegistrationFormService,
              private dialog: MdDialog) { }

  ngOnInit() {
    this.buildForm();
    this.getCities();

    // const cityControl = this.registerForm.get('city');
    //   this.filteredCity = cityControl.valueChanges
    //     .startWith(null)
    //     .map(name => this.filterCity(name));

    const schoolControl = this.registerForm.get('school');
      this.filteredSchool = schoolControl.valueChanges
        .startWith(null)
        .map(name => this.filterSchools(name));

  }
  public getCities() {
    this.registrationFormService.getCity()
    .then((res) =>  {
      for (const city in res) {
        if (!res.hasOwnProperty(city)) {
          continue;
        }
        this.cities.push(res[city]._id);
      }
      this.cities.sort();
      this.gotCities = true;
    });
  }

  getCode(e: KeyboardEvent, school: string) {
    const code = (e.keyCode ? e.keyCode : e.which);
    if (code === 13) { // Enter keycode
      this.schoolCode(school);
    }
  }

  getSchools(name: string = 'KANPUR') {
    this.gotSchools = false;
    this.registrationFormService.getSchool(name)
      .then((res) => {
        this.schoolObject = res;
        for (const school in res) {
          if (!res.hasOwnProperty(school)) {
            continue;
          }
          this.autoSchools.push(res[school].school);
        }
        this.gotSchools = true;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  buildForm() {
    this.registerForm = this.formBuild.group({
      'name': ['', [
        Validators.required
      ]],
      'email': ['', [
        Validators.required,
        Validators.email
      ]],
      'phone': ['', [
        Validators.required,
        Validators.pattern(this.phoneRe),
        Validators.maxLength(10)
      ]],
      'class': ['', [
        Validators.required
      ]],
      'city': ['', [
        Validators.required
      ]],
      'school': ['', [
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

  // filterCity(val: string) {
  //   return val ? this.cities.filter(s => new RegExp(`${val}`, 'gi').test(s)) : this.cities ;
  // }

  filterSchools(val: string) {
    return val ? this.autoSchools.filter(s => new RegExp(`${val}`, 'gi').test(s)) : this.autoSchools ;
  }

  checkKey(e: KeyboardEvent, city: string) {
    const code = (e.keyCode ? e.keyCode : e.which);
    if (code === 13) { // Enter keycode
      this.options(city);
    } else {
      this.autoSchools = [];
    }
}

  schoolCode(e: string) {
    for (const school in this.schoolObject) {
      if (this.schoolObject[school].school === e) {
        this.code = this.schoolObject[school].code;
      }
    }
  }

  register() {
    this.user = this.registerForm.value;
    this.user['school_code'] = this.code;
    console.log(this.user);
    this.registrationFormService.registration(this.user)
      .then((prefillData) => {
        const content = {
          header: 'You have registered Succesfully',
          body: `You will be receiving a mail from us at ${prefillData.emailid}.<br>
If you want to make your Payment later, please follow the link provided in the mail.<br>
            <span>Note</span>: Last date for payment is <span>7 October</span>`,
          prefillData,
          button: null
        };
        const dialogRef = this.dialog.open(SuccessfullDialogComponent, {
          disableClose: true,
          data: {
            data: content
          }
        });
        dialogRef.afterClosed().subscribe(() => this.router.navigate(['']));
      })
      .catch((err) => {
        console.error(err);
      });
  }

  options(e) {
    console.log(e);
    this.autoSchools = [];
    const schoolinbox = this.registerForm.get('school');
    schoolinbox.setValue('');
    this.getSchools(e);
  }
}

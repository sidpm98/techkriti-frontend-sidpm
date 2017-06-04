import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private personalAddress: FormGroup;
  private personal: FormGroup;
  private collegeAddress: FormGroup;
  private address: FormGroup;
  private college: FormGroup;
  private contact: FormGroup;
  private register: FormGroup;
  private answers: FormControl[];
  private president: FormGroup;
  private director: FormGroup;
  private miscellaneous: FormArray;
  private flags = [ true, false, false ]; // TODO next implementation
  private phoneRe: RegExp = new RegExp('^[0-9]{10}$');
  private pinRe: RegExp = new RegExp('^[0-9]{6}$');

  private questionStrings = [ 'Primary motive to apply for this post',
                              'Relevant past experience',
                              'What will be your approach for organizing an event? Mention four points.'];

  private addressControls = {
    'house': ['', [
      Validators.required
    ]],
    'locality': ['', [
      Validators.required
    ]],
    'landmark': ['', [
      Validators.required
    ]],
    'pincode': ['', [
      Validators.required,
      Validators.pattern(this.pinRe)
    ]]
  };

  private contactControls = {
    'name': [''],
    'number': [''],
    'email': ['']
  };

  constructor(private formBuild: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
    console.log(this.miscellaneous.controls);
    console.log(this.answers);
  }

  buildForm() {

    this.personalAddress = this.formBuild.group(Object.assign({}, this.addressControls));
    this.collegeAddress = this.formBuild.group(Object.assign({}, this.addressControls));

    this.president = this.formBuild.group(Object.assign({}, this.contactControls));
    this.director = this.formBuild.group(Object.assign({}, this.contactControls));

    this.answers = Array(3);
    for (let i = 0; i !== this.answers.length; i++) {
      this.answers[i] = this.formBuild.control('', Validators.required);
    }

    this.contact = this.formBuild.group({
      'director': this.director,
      'president': this.president
    });

    this.personal = this.formBuild.group({
      'name': ['', [
        Validators.required,
      ]],
      'contact': ['', [
        Validators.required,
        Validators.pattern(this.phoneRe)
      ]],
      'email': ['', [
        Validators.required,
        Validators.email
      ]],
      'address': this.personalAddress,
      'whatsapp': ['', [
        Validators.required,
        Validators.pattern(this.phoneRe)
      ]]
    });

    this.college = this.formBuild.group({
      'name': ['', [
        Validators.required
      ]],
      'city': ['', [
        Validators.required
      ]],
      'strength': ['', [
        Validators.required
      ]],
      'address': this.collegeAddress,
      'contact': this.contact
    });

    this.miscellaneous = this.formBuild.array(this.answers);

    this.register = this.formBuild.group({
      'personal': this.personal,
      'college': this.college,
      'miscellaneous': this.miscellaneous
    });
  }

  next() {
  }

  submit() {
    console.log(this.register.value);
  }
}

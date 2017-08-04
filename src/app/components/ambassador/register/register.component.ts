import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormArray, FormControlName, FormControl, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { CAService } from '../../../services/ca.service';
import { MdSnackBar, MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

import { Router } from '@angular/router';

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
  register: FormGroup;
  private answers: FormControl[];
  private skillControl: FormControl;
  private chooseControl: FormControl;
  private president: FormGroup;
  private director: FormGroup;
  private miscellaneous: FormArray;
  flags = [ true, false, false ];
  private step: number = 0;
  private phoneRe: RegExp = new RegExp('^[0-9]{10}$');
  private pinRe: RegExp = new RegExp('^[0-9]{6}$');
  public submitFlag: boolean = false;

  private questionStrings = [ 'Primary motive to apply for this post',
                              'Relevant past experience',
                              'What will be your approach for organizing an event? Mention four points.'];

  skillsStrings = [ 'Video Editing', 'Content Writing',
                            'Poster Design', 'Marketing', 'Publicity'];

  private skills: string[] = [];
  private chosenValue: string = '';
  private other: FormControl = new FormControl('');

  private addressControls = {
    'house': [''],
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

  constructor(private formBuild: FormBuilder,
              public snackBar: MdSnackBar,
              public dialog: MdDialog,
              private router: Router,
              private caService: CAService) { }

  ngOnInit() {
    this.buildForm();
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
    if (this.step < 2) {
      this.flags[this.step] = false;
      this.step += 1;
      this.flags[this.step] = true;
    }
  }

  back() {
    if (this.step > 0) {
      this.flags[this.step] = false;
      this.step -= 1;
      this.flags[this.step] = true;
    }
  }

  check(event: any) {
    if (event.checked) {
      this.skills.push(event.source.name);
    } else {
      this.skills.splice(this.skills.indexOf(event.source.name), 1);
    }
  }

  choose(event: any) {
    console.log(event);
    this.chosenValue = event.value;
  }


  submit() {
    this.submitFlag = true;
    this.skills.push(this.other.value);
    this.skillControl = new FormControl(this.skills.join(','));
    this.chooseControl = new FormControl(this.chosenValue);
    this.miscellaneous.push(this.skillControl);
    this.miscellaneous.push(this.chooseControl);
    let form = this.register.value;
    let temp = '';

    for (let field in form.personal.address) {
      temp += form.personal.address[field] + ',';
    };

    delete form.personal.address;
    form.personal.address = temp;

    temp = '';
    for (let field in form.college.address) {
      temp += form.college.address[field] + ',';
    };

    delete form.college.address;
    form.college.address = temp;

    temp = '';
    for (let field in form.college.contact.director) {
      temp += form.college.contact.director[field] + ',';
    };

    delete form.college.contact.director;
    form.college.director = temp;

    temp = '';
    for (let field in form.college.contact.president) {
      temp += form.college.contact.president[field] + ',';
    };

    delete form.college.contact.president;
    form.college.president = temp;

    this.caService.submit(form)
      .then((res) => {
        this.submitFlag = false;
        this.buildForm();
        const dialogRef = this.dialog.open(SuccessDialogComponent, {
          height: '300px',
          width: '300px',
          data: 'Successfully registered'
        });
        dialogRef.afterClosed().subscribe(() => {
          this.router.navigate(['ambassador']);
        });
      })
      .catch((err) => {
        this.submitFlag = false;
        let msg = '';
        this.buildForm();
        if (err.status === 400) {
          msg = 'Invalid Form Submission';
        }
        const dialogRef = this.dialog.open(SuccessDialogComponent, {
          height: '300px',
          width: '300px',
          data: msg
        });
        dialogRef.afterClosed().subscribe(() => {
          this.router.navigate(['ambassador/register']);
        });
      });
  }
}

@Component({
  selector: 'success-dialog',
  templateUrl: './success-dialog.component.html',
  styleUrls: ['./success-dialog.component.css']
})

export class SuccessDialogComponent {

  public content: any;

  constructor(@Inject(MD_DIALOG_DATA) public data: any) {
    this.content = this.data;
    console.log(this.content);
  }
}

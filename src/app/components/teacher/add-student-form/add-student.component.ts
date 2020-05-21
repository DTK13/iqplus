import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StateVerificationService } from 'src/app/services/state-verification.service';
import { StudentService } from 'src/app/services/student.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
})
export class AddStudentComponent implements OnInit {
  studentForm: FormGroup;
  get firstName(): FormControl {
    return this.studentForm.get('firstName') as FormControl;
  }
  get lastName(): FormControl {
    return this.studentForm.get('lastName') as FormControl;
  }
  get age(): FormControl {
    return this.studentForm.get('age') as FormControl;
  }
  get dateOfBirth(): FormControl {
    return this.studentForm.get('dateOfBirth') as FormControl;
  }
  get streetAddress(): FormControl {
    return this.studentForm.get('streetAddress') as FormControl;
  }
  get city(): FormControl {
    return this.studentForm.get('city') as FormControl;
  }
  get state(): FormControl {
    return this.studentForm.get('state') as FormControl;
  }
  get zipCode(): FormControl {
    return this.studentForm.get('zipCode') as FormControl;
  }

  constructor(
    public stateService: StateVerificationService,
    private studentService: StudentService,
    private datePipe: DatePipe,
    private router: Router
  ) {
    this.studentForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      age: new FormControl('', [
        Validators.required,
        Validators.min(5),
        Validators.max(25),
      ]),
      dateOfBirth: new FormControl('', Validators.required),
      streetAddress: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', [
        Validators.required,
        Validators.maxLength(2),
      ]),
      zipCode: new FormControl(''),
    });
  }

  isDataSubmitted = false;

  ngOnInit() {}

  goBack = () => {
    this.router.navigate(['/teacher-home']);
  };

  addAnother = () => {
    this.isDataSubmitted = false;
    this.studentForm.reset();
  };
  submitStudentForm = () => {
    let birthdate = this.datePipe.transform(
      this.studentForm.value.dateOfBirth,
      'MM/dd/yyyy'
    );
    this.dateOfBirth.patchValue(birthdate);
    this.studentService.addStudent(this.studentForm.value);
    this.isDataSubmitted = true;
  };
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/student.model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'teacher-view-students',
  templateUrl: './teacher-view-students.component.html',
  styleUrls: ['./teacher-view-students.component.scss'],
})
export class TeacherViewStudentsComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  student: Student;
  index: Number;
  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any) => {
      console.log(params);
      this.student = params;
    });

    this.activatedRoute.queryParams.subscribe((response) => {
      this.index = response.id;
    });
  }
}

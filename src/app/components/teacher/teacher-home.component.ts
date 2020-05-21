import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { StudentService } from 'src/app/services/student.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacher-home.component.html',
  styleUrls: ['./teacher-home.component.scss'],
})
export class TeacherHomeComponent implements OnInit {
  students: Student[] = [];
  constructor(
    private studentService: StudentService,
    private router: Router ) {
    this.studentService.getStudents().subscribe((response) => {
      response.map((studentResponse) => {
        this.students.push(studentResponse.payload.toJSON() as Student);
      });
    });
  }

  ngOnInit() {}

  goToStudentForm = () => {
    this.router.navigate(['/add-student']);
  }
}

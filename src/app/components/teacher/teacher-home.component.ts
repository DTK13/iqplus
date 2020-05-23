import { Student } from './../../models/student.model';
import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacher-home.component.html',
  styleUrls: ['./teacher-home.component.scss'],
})
export class TeacherHomeComponent implements OnInit {
  students: Student[] = [];
  constructor(private studentService: StudentService, private router: Router) {
    this.studentService.getStudents().subscribe((response) => {
      response.map((studentResponse) => {
        this.students.push(studentResponse.payload.toJSON() as Student);
      });
    });
  }

  ngOnInit() {}

  goToStudentForm = () => {
    this.router.navigate(['/add-student']);
  };

  editStudent = (student: Student, index: number) => {
    this.router.navigate(['/teacher-view-students', student], {
      queryParams: { id: index },
    });
  };
}

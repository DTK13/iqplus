import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TeacherHomeComponent, TeacherViewStudentsComponent } from '.';
import {
  MatTableModule,
  MatButtonModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
} from '@angular/material';
import { AddStudentComponent } from './add-student-form/add-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TeacherHomeComponent,
    TeacherViewStudentsComponent,
    AddStudentComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [DatePipe],
})
export class TeacherModule {}

import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private db: AngularFireDatabase) {}

  getStudents = () => {
    return this.db.list('/students').snapshotChanges();
  }

  addStudent = (studentData: Student) => {
    return this.db.list('/students').push(studentData);

  }
}

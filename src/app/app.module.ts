import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TeacherModule } from './components/teacher/teacher.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule } from '@angular/router';
import {
MatInputModule,
MatButtonModule,
MatIconModule,
MatGridListModule,
MatTreeModule,
MatTableModule
} from '@angular/material';
import { TeacherHomeComponent, TeacherViewStudentsComponent } from './components/teacher';
import { LoginComponent } from './components/login/login.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { environment } from 'src/environments/environment';
import { AddStudentComponent } from './components/teacher/add-student-form/add-student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    TeacherModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatTreeModule,
    MatTableModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      {path: '', component: LoginComponent },
      {path: 'home', component: HomePageComponent},
      {path: 'add-student', component: AddStudentComponent },
      {path: 'teacher-home', component: TeacherHomeComponent },
      {path: 'teacher-view-students', component: TeacherViewStudentsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

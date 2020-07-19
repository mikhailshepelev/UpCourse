import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {CourseService} from "./services/course.service";

const routes: Routes = [
  {path: 'course/:id', component: CoursesListComponent},
  {path: 'courses', component: CoursesListComponent},
  {path: '', redirectTo: '/courses', pathMatch: 'full'},
  {path: '**', redirectTo: '/courses', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    CoursesListComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule

  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

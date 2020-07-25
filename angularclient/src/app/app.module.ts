import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {CourseService} from "./services/course.service";
import {FormsModule} from "@angular/forms";
import { TopicsListComponent } from './components/topics-list/topics-list.component';

const routes: Routes = [
  {path: 'course/:id', component: TopicsListComponent},
  {path: 'courses', component: CoursesListComponent},
  {path: 'topics', component: TopicsListComponent},
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '**', redirectTo: '/courses', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    CoursesListComponent,
    TopicsListComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import {RouterModule, Routes} from "@angular/router";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {CourseService} from "./services/course.service";
import {FormsModule} from "@angular/forms";
import { TopicsListComponent } from './components/topics-list/topics-list.component';
import { LessonsListComponent } from './components/lessons-list/lessons-list.component';
import {HttpIntercepterService} from "./services/security/http-intercepter.service";
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import {RouteGuardService} from "./services/security/route-guard.service";
import { StudentsListComponent } from './components/users/students-list/students-list.component';
import { TeachersListComponent } from './components/users/teachers-list/teachers-list.component';
import { SearchComponent } from './components/search/search.component';
import {RegistrationComponent} from "./components/registration/registration.component";
import { UserSearchComponent } from './components/users/user-search/user-search.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'logout', component: LogoutComponent, canActivate:[RouteGuardService] },
  {path: 'search/:keyword', component: LessonsListComponent, canActivate:[RouteGuardService] },
  {path: 'course/:id', component: TopicsListComponent, canActivate:[RouteGuardService],
    children: [{path: 'student/:action', component: StudentsListComponent}] },
  {path: 'courses', component: CoursesListComponent, canActivate:[RouteGuardService] },
  {path: 'topics', component: TopicsListComponent, canActivate:[RouteGuardService] },
  {path: 'topics/:id', component: LessonsListComponent, canActivate:[RouteGuardService],
    children: [{path: 'teacher/:action', component: TeachersListComponent}] },
  {path: 'user-search', component: UserSearchComponent, canActivate:[RouteGuardService]},
  {path: '**', redirectTo: '/courses', pathMatch: 'full', canActivate:[RouteGuardService] },
];

@NgModule({
  declarations: [
    AppComponent,
    CoursesListComponent,
    TopicsListComponent,
    LessonsListComponent,
    LoginComponent,
    LogoutComponent,
    StudentsListComponent,
    TeachersListComponent,
    SearchComponent,
    RegistrationComponent,
    UserSearchComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterService, multi:true},
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

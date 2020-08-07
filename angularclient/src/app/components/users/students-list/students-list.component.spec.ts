import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsListComponent } from './students-list.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {ActivatedRouteStub} from "../../../testing/activated-route-stub";
import {StudentService} from "../../../services/users/student.service";
import {ActivatedRoute, convertToParamMap, Router} from "@angular/router";
import {of} from "rxjs";
import {User} from "../../../common/user";

describe('StudentsListComponent', () => {
  let component: StudentsListComponent;
  let fixture: ComponentFixture<StudentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      declarations: [ StudentsListComponent ],
      providers: [ StudentsListComponent,
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: convertToParamMap({'courseId': 5 }) }}
        }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsListComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  //
  // it('should get add students list from student service', () => {
  //   fixture = TestBed.createComponent(StudentsListComponent);
  //   component = fixture.debugElement.componentInstance;
  //   let studentService = fixture.debugElement.injector.get(StudentService);
  //   expect(studentService.getAddStudentsList).toEqual(component.getAddStudentsList);
  // });
});

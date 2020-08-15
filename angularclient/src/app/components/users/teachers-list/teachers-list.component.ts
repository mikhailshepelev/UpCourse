import { Component, OnInit } from '@angular/core';
import {User} from "../../../common/user";
import {ActivatedRoute} from "@angular/router";
import {TeacherService} from "../../../services/users/teacher.service";

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.css']
})
export class TeachersListComponent implements OnInit {

  topicId: number = +this.route.parent.snapshot.paramMap.get('id');
  teachers: User[];
  routeParam: string;
  teacher: User;

  constructor(private teacherService: TeacherService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.routeParam = this.route.snapshot.paramMap.get('action');
      if (this.routeParam == 'add') {
        this.getAddTeachersList();
      } else if (this.routeParam == 'delete') {
        this.getDeleteTeachersList();
      }
    });
  }

  getAddTeachersList() {
    this.teacherService.getAddTeachersList(this.topicId).subscribe(
      data => {
        this.teachers = data;
      }
    )
  }

  getDeleteTeachersList() {
    this.teacherService.getDeleteTeacher(this.topicId).subscribe(
      data => {
        this.teacher = data;
        this.teachers = [];
        this.teachers.push(this.teacher);
      }, error => {
        this.teachers = [];
      }
    )
  }

  addTeacherToTopic(theTeacherId: number) {
    this.teacherService.addTeacherToTopic(this.topicId, theTeacherId).subscribe(
      data => {
        this.getAddTeachersList();
      }
    );
  }

  deleteTeacherFromTopic(theTeacherId: number) {
    this.teacherService.deleteTeacherFromTopic(this.topicId, theTeacherId).subscribe(
      data => {
        this.getDeleteTeachersList();
      }
    );
  }
}

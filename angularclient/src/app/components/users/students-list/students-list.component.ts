import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {StudentService} from "../../../services/users/student.service";
import {User} from "../../../common/user";


@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  courseId: number = +this.route.parent.snapshot.paramMap.get('id');
  students: User[];
  routeParam: string;

  constructor(private studentService: StudentService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.routeParam = this.route.snapshot.paramMap.get('action');
      if (this.routeParam == 'add') {
        this.getAddStudentsList();
      } else if (this.routeParam == 'delete') {
        this.getDeleteStudentsList();
      }
    });
  }

  getAddStudentsList() {
    this.studentService.getAddStudentsList(this.courseId).subscribe(
      data => {
        this.students = data;
      }
    )
  }

  getDeleteStudentsList() {
    this.studentService.getDeleteStudentsList(this.courseId).subscribe(
      data => {
        this.students = data;
      }
    )
  }

  addStudentToCourse(theStudentId: number) {
    this.studentService.addStudentToCourse(this.courseId, theStudentId).subscribe(
      data => {
        this.getAddStudentsList();
      }
    );
  }

  deleteStudentFromCourse(theStudentId: number) {
    this.studentService.deleteStudentFromCourse(this.courseId, theStudentId).subscribe(
      data => {
        this.getDeleteStudentsList();
      }
    );
  }

}

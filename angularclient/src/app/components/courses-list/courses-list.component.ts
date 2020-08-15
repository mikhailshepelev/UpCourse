import {Component, OnInit} from '@angular/core';
import {Course} from "../../common/course";
import {CourseService} from "../../services/course.service";
import {ActivatedRoute} from "@angular/router";
import $ from 'node_modules/jquery/dist/jquery.min.js';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  courseName;
  courses: Course[];
  course: Course;
  blankName = false;

  constructor(private courseService: CourseService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listCourses();
    });
  }

  addNewCourse() {
    this.blankName = false;
    if (this.courseName != '' && this.courseName != undefined) {
      this.courseService.postJson(new Course(this.courseName)).subscribe(
        data => {
          this.blankName = false;
          this.listCourses();
        }
      );
    } else {
      this.blankName = true;
    }
  }

  deleteCourse(id: number) {
    this.courseService.deleteCourse(id).subscribe(
      data => {
        this.listCourses();
      }
    )
  }

  listCourses() {
    this.courseService.getCoursesList().subscribe(
      data => {
        this.courses = data;
      }
    )
  }
}

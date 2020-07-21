import { Component, OnInit } from '@angular/core';
import {Course} from "../../common/course";
import {CourseService} from "../../services/course.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  courseName;
  courses: Course[];

  constructor(private courseService: CourseService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listCourses();
    });

  }

  addNewCourse() {
    this.courseService.postJson(new Course(this.courseName)).subscribe(
      data => {
        console.log(data)
        this.listCourses();
      }
    );
  }

  deleteCourse(id: number) {
    this.courseService.deleteCourse(id.toString()).subscribe(
      data => {
        console.log(data)
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

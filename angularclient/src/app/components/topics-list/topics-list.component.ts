import {Component, OnInit} from '@angular/core';
import {Topic} from "../../common/topic";
import {TopicService} from "../../services/topic.service";
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../../services/course.service";
import {Course} from "../../common/course";
import $ from 'node_modules/jquery/dist/jquery.min.js';

@Component({
  selector: 'app-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.css']
})
export class TopicsListComponent implements OnInit {

  currentCourseId: number;
  currentCourse: Course;
  topics: Topic[];
  topicName;
  isClicked = false;
  blankName = false;

  constructor(private topicService: TopicService,
              private courseService: CourseService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listTopics();
    });
    this.getCurrentCourse();

    $('.btn-add').click(function successAlert() {
      $('.alert-success').fadeTo(2000, 500).slideUp(500, function() {
        $('.alert-success').slideUp(500);
      });

    });

    $('.btn-add').click(function errorAlert() {
      $('.alert-warning').fadeTo(3000, 500).slideUp(500, function() {
        $('.alert-warning').slideUp(500);
      });
    });
  }

  addNewTopic() {
    this.blankName = false;
    if (this.topicName != '' && this.topicName != undefined) {
      this.topicService.postJson(new Topic(this.topicName,
        this.topicService.getBaseUrl() + '/' + this.currentCourseId)).subscribe(
        data => {
          this.listTopics();
          this.blankName = false;
        });
    } else {
      this.blankName = true;
    }
  }

  deleteTopic(id: number) {
    this.topicService.deleteTopic(id).subscribe(
      data => {
        this.listTopics();
      }
    )
  }

  getCurrentCourse() {
    this.courseService.getCourseById(this.currentCourseId).subscribe((data: Course) => {
      this.currentCourse = data;
    });
  }

  listTopics() {
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');
    if (hasCategoryId) {
      this.currentCourseId = +this.route.snapshot.paramMap.get('id');
    }
    this.topicService.getTopicsList(this.currentCourseId).subscribe(
      data => {
        this.topics = data;
      }
    )
  }

  editCourse() {
    this.courseService.postJson(this.currentCourse).subscribe(
      data => {
      });
    this.isClicked = false;
  }

  setClicked() {
    this.isClicked = true;
  }
}

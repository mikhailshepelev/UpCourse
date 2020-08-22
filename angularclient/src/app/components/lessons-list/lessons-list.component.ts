import { Component, OnInit } from '@angular/core';
import {Topic} from "../../common/topic";
import {TopicService} from "../../services/topic.service";
import {ActivatedRoute} from "@angular/router";
import {LessonService} from "../../services/lesson.service";
import {Lesson} from "../../common/lesson";
import $ from 'node_modules/jquery/dist/jquery.min.js';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit {

  currentTopicId: number;
  currentTopic: Topic;
  lessons: Lesson[];
  lessonSubject;
  lessonDate;
  lessonStartTime;
  lessonEndTime;
  isClicked = false;
  todayDate = new Date();
  searchMode: boolean;
  blankName = false;

  constructor(private topicService: TopicService,
              private lessonService: LessonService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listLessons();
    });
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

  addNewLesson() {
    this.blankName = false;
    if (this.lessonSubject != undefined
      && this.lessonSubject != ''
      && this.lessonStartTime != undefined
      && this.lessonEndTime != undefined
    ) {
      this.lessonService.postJson(new Lesson(this.lessonSubject,
        this.lessonService.getBaseUrl() + '/' + this.currentTopicId,
        this.lessonDate, this.lessonStartTime, this.lessonEndTime)).subscribe(
        data => {
          this.listLessons();
          this.blankName = false;
        });
    } else {
      this.blankName = true;
    }
  }

  deleteLesson(id: number) {
    this.lessonService.deleteLesson(id).subscribe(
      data => {
        this.listLessons();
      }
    )
  }

  getCurrentTopic() {
    this.topicService.getTopicById(this.currentTopicId).subscribe((data: Topic) => {
      this.currentTopic = data;
    });
  }

  listLessons() {
    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    if (this.searchMode) {
      this.handleSearchLessons();
    }
    else {
      const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');
      if (hasCategoryId) {
        this.currentTopicId = +this.route.snapshot.paramMap.get('id');
      }
      this.lessonService.getLessonsList(this.currentTopicId).subscribe(
        data => {
          this.lessons = data;
        }
      )
      this.getCurrentTopic();
    }
  }

  editTopic() {
    this.topicService.postJson(this.currentTopic).subscribe(
      data => {
      });
    this.isClicked = false;
  }

  setClicked() {
    this.isClicked = true;
  }

  handleSearchLessons() {
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword');
    this.lessonService.searchLessons(theKeyword).subscribe(
      data => {
        this.lessons = data;
      }
    )
  }
}

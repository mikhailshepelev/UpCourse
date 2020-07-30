import {Component, OnInit} from '@angular/core';
import {Topic} from "../../common/topic";
import {TopicService} from "../../services/topic.service";
import {ActivatedRoute} from "@angular/router";
import {CourseService} from "../../services/course.service";
import {Course} from "../../common/course";


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

  constructor(private topicService: TopicService,
              private courseService: CourseService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listTopics();
    });

    this.getCurrentCourse();

  }


  addNewTopic() {
    this.topicService.postJson(new Topic(this.topicName,
      this.topicService.getBaseUrl()+ '/' + this.currentCourseId)).subscribe(
      data => {
        console.log(data)
        this.listTopics();
      });


  }

  deleteTopic(id: number) {
    this.topicService.deleteTopic(id).subscribe(
      data => {
        console.log(data)
        this.listTopics();
      }
    )
  }

  getCurrentCourse() {

    this.courseService.getCourseById(this.currentCourseId).subscribe((data: Course) => {
      console.log(data);
      this.currentCourse = data;
    });
  }



  listTopics() {

    //check if "id" parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      // get 'id' and convert it into number from string using for that '+' before statement
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
        console.log(data)
      });
    this.isClicked = false;

  }

  setClicked() {
    this.isClicked = true;
  }

}

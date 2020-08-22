import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef, OnInit, ViewEncapsulation,
} from '@angular/core';
import {
  isSameDay,
  isSameMonth
} from 'date-fns';
import { Subject } from 'rxjs';
import {
  CalendarEvent,
  CalendarView,
  CalendarDateFormatter,
} from 'angular-calendar';
import {LessonService} from "../../services/lesson.service";
import {Lesson} from "../../common/lesson";
import {ActivatedRoute} from "@angular/router";
import { DatePipe } from '@angular/common';
import {CustomDateFormatter} from "./custom-date-formatter.provider";
import {BasicAuthenticationService} from "../../services/security/basic-authentication.service";

@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
  providers: [
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatter,
    },
  ],
  styleUrls: ['./calendar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CalendarComponent implements OnInit{

  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  refresh: Subject<any> = new Subject();
  lessonsList: Lesson[];
  events: CalendarEvent[] = [];
  activeDayIsOpen: boolean = true;

  constructor(private lessonService: LessonService,
              private route: ActivatedRoute,
              private basicAuthenticationService: BasicAuthenticationService ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listLessons();
    });
  }

  addLessonsToEvents() {
    for (let tempLesson of this.lessonsList) {
      this.events.push({
        start: new Date(new DatePipe("et").transform(tempLesson.startTime, 'yyyy-MM-dd, HH:mm', 'GTM+2')),
        end: new Date(new DatePipe("et").transform(tempLesson.endTime, 'yyyy-MM-dd, HH:mm', 'GTM+2')),
        title: tempLesson.subject
      })
    }
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  listLessons() {
    this.lessonService.getAllLoggedUserLessons(this.basicAuthenticationService.getAuthenticatedUser()).subscribe(
      data => {
        this.lessonsList = data;
        this.addLessonsToEvents();
        this.refresh.next();
      }
    )
  }
}

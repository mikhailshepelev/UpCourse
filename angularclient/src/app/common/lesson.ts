import {Topic} from "./topic";
import {Time} from "@angular/common";

export class Lesson {

  id: number;
  subject: string;
  date: Date;
  startTime: Time;
  endTime: Time;
  topic: string;

  constructor(subject: string, topic: string, date: Date, startTime: Time, endTime: Time ) {
    this.subject = subject;
    this.topic = topic;
    this.date = date;
    this.startTime = startTime;
    this.endTime = endTime;
  }
}

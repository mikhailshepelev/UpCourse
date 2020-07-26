import {Topic} from "./topic";

export class Lesson {

  id: number;
  subject: string;
  date: Date;
  topic: string;

  constructor(subject: string, topic: string, date: Date ) {
    this.subject = subject;
    this.topic = topic;
    this.date = date;
  }
}

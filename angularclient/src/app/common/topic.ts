import {Lesson} from "./lesson";

export class Topic {

  id: number;
  name: string;
  course: string;
  lessons: Lesson[];

  constructor(name: string, course: string) {
    this.name = name;
    this.course = course;
  }
}

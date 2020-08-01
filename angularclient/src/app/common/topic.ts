import {Lesson} from "./lesson";

export class Topic {

  id: number;
  name: string;
  course: string;
  lessons: Lesson[];
  private _teacher: string;

  constructor(name: string, course: string) {
    this.name = name;
    this.course = course;
  }


  set teacher(value: string) {
    this._teacher = value;
  }
}

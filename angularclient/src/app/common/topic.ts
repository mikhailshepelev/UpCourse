import {Course} from "./course";
import {Lesson} from "./lesson";

export class Topic {
  name: string;
  course: Course;
  lessons: Lesson[];
}

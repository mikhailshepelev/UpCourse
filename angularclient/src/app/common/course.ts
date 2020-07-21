import {Topic} from "./topic";

export class Course {
  id: number;
  //topics: Topic[];

  constructor(public name: string) {
    this.name = name;
  }
}

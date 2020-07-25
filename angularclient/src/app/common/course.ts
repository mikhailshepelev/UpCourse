import {Topic} from "./topic";
import {User} from "./user";

export class Course {
  id: number;
  name: string;
  users: User[];
  topics: Topic[];

  constructor(name: string) {
    this.name = name;

  }

}

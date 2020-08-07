import { Lesson } from './lesson';
import {Time} from "@angular/common";

describe('Lesson', () => {
  it('should create an instance', () => {
    expect(new Lesson(
      'subject',
      'topic',
      new Date(Date.now()),
      {hours:8, minutes:0},
      {hours:9, minutes:0}
      )).toBeTruthy();
  });
});

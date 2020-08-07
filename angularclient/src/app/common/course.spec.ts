import { Course } from './course';

describe('Course', () => {
  it('should create an instance', () => {
    expect(new Course('newCourse')).toBeTruthy();
  });
});

import { Topic } from './topic';

describe('Topic', () => {
  it('should create an instance', () => {
    expect(new Topic('subject', 'course')).toBeTruthy();
  });
});

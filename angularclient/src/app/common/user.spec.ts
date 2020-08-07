import { User } from './user';

describe('User', () => {
  it('should create an instance', () => {
    expect(new User(
      'new',
      'user',
      'mail@mail.com',
      'newUser',
      'password')).toBeTruthy();
  });
});

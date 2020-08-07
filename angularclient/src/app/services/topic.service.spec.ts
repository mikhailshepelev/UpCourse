import { TestBed } from '@angular/core/testing';

import { TopicService } from './topic.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('TopicService', () => {
  let service: TopicService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(TopicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

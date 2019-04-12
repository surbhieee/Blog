import { TestBed } from '@angular/core/testing';

import { BlogHTTPServiceService } from './blog-httpservice.service';

describe('BlogHTTPServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogHTTPServiceService = TestBed.get(BlogHTTPServiceService);
    expect(service).toBeTruthy();
  });
});

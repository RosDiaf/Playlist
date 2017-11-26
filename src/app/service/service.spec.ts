import { YouTubeApiService } from './service';
import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { TestBed, inject } from '@angular/core/testing';

describe('YouTubeApiService', () => {
  let subject: YouTubeApiService;
  let backend: MockBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        YouTubeApiService,
        BaseRequestOptions,
        MockBackend,
        {
          provide: Http,
          useFactory: (mockBackend: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(mockBackend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        {
          deps: [Http]
        },
      ],
    });
  });

  beforeEach(inject([YouTubeApiService, MockBackend], (YouTubeApiService, mockBackend) => {
    subject = YouTubeApiService;
    backend = mockBackend;
  }));
});

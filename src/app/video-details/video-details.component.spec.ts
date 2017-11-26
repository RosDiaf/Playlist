import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { Http, BaseRequestOptions, HttpModule } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { VideoDetailsComponent } from './video-details.component';
import { YouTubeApiService } from '../service/service';
import { playListMockData } from '../mock/playlistData';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs/Rx';

class MockRouter {
  navigateByUrl(url: string) { return url; }
}

class MockActivatedRoute {
    private paramsSubject = new BehaviorSubject(this.testParams);
    private _testParams: {};

    params  = this.paramsSubject.asObservable();

    get testParams() {
        return this._testParams;
    }
    set testParams(newParams: any) {
        this._testParams = newParams;
        this.paramsSubject.next(newParams);
    }
}

describe('VideoDetailsComponent', () => {
  let component: VideoDetailsComponent;
  let fixture: ComponentFixture<VideoDetailsComponent>;
  let activeRoute: MockActivatedRoute;

  beforeEach(() => {
    activeRoute = new MockActivatedRoute();
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    declarations: [ VideoDetailsComponent ],
    providers: [
        YouTubeApiService,
        Http, BaseRequestOptions,
        { provide: ActivatedRoute, useValue: activeRoute },
        { provide: Router, useClass: MockRouter },
        MockBackend,
        {
          provide: Http,
          useFactory: (mockBackend: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(mockBackend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', ()  => {
    expect(component).toBeTruthy();
  });

  it('should remove id number from url', inject([Router], (router: Router) => {
    const spyRouter = spyOn(router, 'navigateByUrl');
    const url = spyRouter.calls.first().args[0];
    expect(url).toBe('/video-details');
  }));

  it('should subscribe playlist data when component load', () => {
    const service = TestBed.get(YouTubeApiService);
    spyOn(service, 'geYouTubeVideoData').and.returnValue(Observable.from([playListMockData]));
    component.getVideoData();
    expect(component.videoList).toEqual(playListMockData);
  });

  it('should subscribe retrieve video details from item id provided', () => {
    const service = TestBed.get(YouTubeApiService);
    spyOn(service, 'geYouTubeVideoData').and.returnValue(Observable.from([playListMockData]));
    component.getVideoData();
    component.itemId = 'UExTaTI4aURmRUNKUEpZRkE0d2psRjVLVXVjRnZjMHFiUS41MzJCQjBCNDIyRkJDN0VD';
    component.videoList.items[0].id = 'UExTaTI4aURmRUNKUEpZRkE0d2psRjVLVXVjRnZjMHFiUS41MzJCQjBCNDIyRkJDN0VD';
    expect(component.videoId).toBe(playListMockData.items[0].snippet.resourceId.videoId);
  });
});

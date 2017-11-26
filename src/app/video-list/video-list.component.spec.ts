import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { VideoListComponent } from './video-list.component';
import { YouTubeApiService } from '../service/service';
import { playListMockData } from '../mock/playlistData';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

describe('VideoListComponent', () => {
  let component: VideoListComponent;
  let fixture: ComponentFixture<VideoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoListComponent ],
      providers: [
        YouTubeApiService,
        Http, BaseRequestOptions,
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
    fixture = TestBed.createComponent(VideoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe playlist data', () => {
    const service = TestBed.get(YouTubeApiService);
    spyOn(service, 'geYouTubeVideoData').and.returnValue(Observable.from([playListMockData]));
    component.getVideoData();
    expect(component.videoList).toEqual(playListMockData);
  });
});

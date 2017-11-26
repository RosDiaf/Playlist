import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailsComponent } from './video-details/video-details.component';
import { YouTubeApiService } from './service/service';
import { Router, RouterModule  } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

class RouterStub {
  navigateByUrl(url: string) {
    return url;
  }
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        VideoListComponent,
        VideoDetailsComponent
      ],
      imports: [HttpModule, RouterTestingModule],
      providers: [YouTubeApiService,
      {provide: Router, useClass: RouterStub}]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});

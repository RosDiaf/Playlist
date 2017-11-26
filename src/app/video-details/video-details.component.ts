import { Component, OnInit } from '@angular/core';
import { YouTubeApiService } from '../service/service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit {

  videoList: any;
  itemId: any;
  videoId: any;
  safeURL: any;
  baseUrl = 'https://www.youtube.com/embed/';

  constructor(
    private YouTubeApiService: YouTubeApiService,
    private route: ActivatedRoute,
    private router: Router,
    private _sanitizer: DomSanitizer) {
    this.getVideoData();
    this.itemId = this.getItemId();
  }

  ngOnInit() {
    this.router.navigateByUrl('/video-details');
  }

  getVideoData() {
    this.YouTubeApiService.geYouTubeVideoData().subscribe(data => {
      this.videoList = data;
      for (const key in this.videoList.items) {
        if (this.videoList.items.hasOwnProperty(key)) {
          if (this.videoList.items[key]['id'] === this.itemId) {
            this.videoId = this.videoList.items[key].snippet.resourceId.videoId;
            this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl + this.videoId);
          }
        }
      }
    });
  }

  getItemId() {
    return this.route.snapshot.queryParams['itemId'];
  }
}

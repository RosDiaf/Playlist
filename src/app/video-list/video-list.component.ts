import { Component, OnInit } from '@angular/core';
import { YouTubeApiService } from '../service/service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  videoList: any;

  constructor(private YouTubeApiService: YouTubeApiService) {
    this.getVideoData();
  }

  ngOnInit() { }

  getVideoData() {
    this.YouTubeApiService.geYouTubeVideoData().subscribe(data => {
      this.videoList = data;
    });
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class YouTubeApiService {

  private apiUrl = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&';
  private playlistId = 'playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw';

  constructor(private http: Http) { }

  public geYouTubeVideoData() {
    return this.http.get(this.apiUrl + this.playlistId)
      .map(response => response.json());
  }
}

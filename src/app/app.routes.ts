import { Routes, RouterModule } from '@angular/router';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDetailsComponent } from './video-details/video-details.component';

const routes: Routes = [
  {
    path: '',
    component: VideoListComponent,
  },
  {
    path: 'video-details',
    component: VideoDetailsComponent
  },
];
export const routing = RouterModule.forRoot(routes, { useHash: true });

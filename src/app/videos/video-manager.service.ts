import { Injectable } from '@angular/core';
import { button } from './btns/button/button.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoManagerService {

  private videos=[
    {videoSrc:"assets/videos/dead.mp4",btn:new button('video1', "assets/photos/hossam/hossam.jpg")},
    {videoSrc:"assets/videos/meme.mp4",btn:new button('video2', "assets/photos/hossam/hossam.jpg")},
    {videoSrc:"assets/videos/music1.mp4",btn:new button('video3', "assets/photos/hossam/hossam.jpg")},
    
  ];

  played =new Subject<boolean>();

  constructor() { }

  getVideo(id:number){
    return this.videos[id];
  }
  getAllVideos(){
    return this.videos.slice();
  }
}

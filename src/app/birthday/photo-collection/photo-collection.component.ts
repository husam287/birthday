import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-collection',
  templateUrl: './photo-collection.component.html',
  styleUrls: ['./photo-collection.component.css']
})
export class PhotoCollectionComponent implements OnInit {
  
  //Array of the photos srcs
photos=[
            //photos
  {src:"assets/photos/hossam/hossam.jpg"},
  {src:"assets/photos/hossam/1.jpg"},
  {src:"assets/photos/hossam/2.png"},
 
  
  
  
];
  constructor() { }

  ngOnInit(): void {
    console.log('number of photos : '+this.photos.length)
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoIframeComponent implements OnInit {

  public videoUrl: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data) {
    this.videoUrl = data;
    console.log(this.videoUrl);
  }

  ngOnInit() {
  }

}

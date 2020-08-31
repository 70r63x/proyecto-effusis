import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VideoIframeComponent } from '../video/video.component';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  public videoCategorias: any[];

  constructor(public dialog: MatDialog) {
    this.videoCategorias = [
      {categoria: 'Deportes', videos: [
        {url: "https://www.youtube.com/embed/EPdogY4wZKc", img: "http://i3.ytimg.com/vi/EPdogY4wZKc/hqdefault.jpg"},
        {url: "https://www.youtube.com/embed/Myz29lgs9hQ", img: "http://i3.ytimg.com/vi/Myz29lgs9hQ/hqdefault.jpg"},
        {url: "https://www.youtube.com/embed/dtZrL9r6rqc", img: "http://i3.ytimg.com/vi/dtZrL9r6rqc/hqdefault.jpg"},
        {url: "https://www.youtube.com/embed/ejjw1DvLab4", img: "http://i3.ytimg.com/vi/ejjw1DvLab4/hqdefault.jpg"}
        ]
      },
      {categoria: 'Infantil', videos: [
        {url: "https://www.youtube.com/embed/NgLVxhNEbn4", img: "http://i3.ytimg.com/vi/NgLVxhNEbn4/hqdefault.jpg"},
        {url: "https://www.youtube.com/embed/PmibpDx95-s", img: "http://i3.ytimg.com/vi/PmibpDx95-s/hqdefault.jpg"},
        {url: "https://www.youtube.com/embed/gU8MOU3U3Vg", img: "http://i3.ytimg.com/vi/gU8MOU3U3Vg/hqdefault.jpg"},
        {url: "https://www.youtube.com/embed/YXi2iMq8HDU", img: "http://i3.ytimg.com/vi/YXi2iMq8HDU/hqdefault.jpg"}
        ]
      },
      {categoria: 'Noticias', videos: [
        {url: "https://www.youtube.com/embed/0fHkEolNWFc", img: "http://i3.ytimg.com/vi/0fHkEolNWFc/hqdefault.jpg"},
        {url: "https://www.youtube.com/embed/R_QvvhSdwJM", img: "http://i3.ytimg.com/vi/R_QvvhSdwJM/hqdefault.jpg"},
        {url: "https://www.youtube.com/embed/sVc_VPSn_FI", img: "http://i3.ytimg.com/vi/sVc_VPSn_FI/hqdefault.jpg"},
        {url: "https://www.youtube.com/embed/5tVPAlZqgQw", img: "http://i3.ytimg.com/vi/5tVPAlZqgQw/hqdefault.jpg"}
        ]
      },
      {categoria: 'Peliculas', videos: [
        {url: "https://www.youtube.com/embed/3iNpFIJHIOw", img: "http://i3.ytimg.com/vi/3iNpFIJHIOw/hqdefault.jpg"},
        {url: "https://www.youtube.com/embed/kBtvOEMie6U", img: "http://i3.ytimg.com/vi/kBtvOEMie6U/hqdefault.jpg"},
        {url: "https://www.youtube.com/embed/8kG37aVOYfo", img: "http://i3.ytimg.com/vi/8kG37aVOYfo/hqdefault.jpg"},
        {url: "https://www.youtube.com/embed/-6NQyvq2UTQ", img: "http://i3.ytimg.com/vi/-6NQyvq2UTQ/hqdefault.jpg"}
        ]
      },
      {categoria: 'Series', videos: [
        {url: "https://www.youtube.com/embed/X4j4jS2uJ60", img: "http://i3.ytimg.com/vi/X4j4jS2uJ60/hqdefault.jpg"},
        {url: "https://www.youtube.com/embed/VWcaoiR9vh0", img: "http://i3.ytimg.com/vi/VWcaoiR9vh0/hqdefault.jpg"},
        {url: "https://www.youtube.com/embed/mLMHqzAygts", img: "http://i3.ytimg.com/vi/mLMHqzAygts/hqdefault.jpg"},
        {url: "https://www.youtube.com/embed/52hOmCrq8e4", img: "http://i3.ytimg.com/vi/52hOmCrq8e4/hqdefault.jpg"}
        ]
      }
  
    ]
  }

  ngOnInit() {
  }

  openVideo(urlVideo: string) {
    console.log(urlVideo);
    this.dialog.open(VideoIframeComponent, {data: { video: urlVideo}, width:"80%", height:"70%", id: 'mat-dialog-1236'});
  }

}

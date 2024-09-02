import { Component } from '@angular/core';

@Component({
  selector: 'app-video-carousel',
  templateUrl: './video-carousel.component.html',
  styleUrls: ['./video-carousel.component.css'],
})
export class VideoCarouselComponent {
  videos = [
    'https://v.ftcdn.net/05/51/90/80/700_F_551908055_fZ0JSC12PISeFNadFnhWvgJvNvt2CYkf_ST.mp4',
    'https://v.ftcdn.net/05/51/90/80/700_F_551908094_g0j8Da7ER3hhKp82TVN5tdE9B7mnYWvG_ST.mp4',
    'https://videos.pexels.com/video-files/10464573/10464573-uhd_2732_1440_25fps.mp4',
  ];

  currentIndex = 0;

  goToPrevious() {
    this.currentIndex =
      this.currentIndex > 0 ? this.currentIndex - 1 : this.videos.length - 1;
  }

  goToNext() {
    this.currentIndex =
      this.currentIndex < this.videos.length - 1 ? this.currentIndex + 1 : 0;
  }
}

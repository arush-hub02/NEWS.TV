import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCarouselComponent } from './video-carousel.component';

describe('VideoCarouselComponent', () => {
  let component: VideoCarouselComponent;
  let fixture: ComponentFixture<VideoCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

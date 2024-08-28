import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopheadlineComponent } from './topheadline.component';

describe('TopheadlineComponent', () => {
  let component: TopheadlineComponent;
  let fixture: ComponentFixture<TopheadlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopheadlineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopheadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

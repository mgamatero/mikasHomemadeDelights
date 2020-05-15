import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniGalleryComponent } from './mini-gallery.component';

describe('MiniGalleryComponent', () => {
  let component: MiniGalleryComponent;
  let fixture: ComponentFixture<MiniGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

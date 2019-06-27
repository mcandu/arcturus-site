import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftboxImgComponent } from './softbox-img.component';

describe('SoftboxImgComponent', () => {
  let component: SoftboxImgComponent;
  let fixture: ComponentFixture<SoftboxImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftboxImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftboxImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

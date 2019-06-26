import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSliderItemComponent } from './card-slider-item.component';

describe('CardSliderItemComponent', () => {
  let component: CardSliderItemComponent;
  let fixture: ComponentFixture<CardSliderItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardSliderItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSliderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

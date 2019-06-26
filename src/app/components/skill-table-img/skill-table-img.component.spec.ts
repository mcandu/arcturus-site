import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillTableImgComponent } from './skill-table-img.component';

describe('SkillTableImgComponent', () => {
  let component: SkillTableImgComponent;
  let fixture: ComponentFixture<SkillTableImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillTableImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillTableImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoefficientBtnComponent } from './coefficient-btn.component';

describe('CoefficientBtnComponent', () => {
  let component: CoefficientBtnComponent;
  let fixture: ComponentFixture<CoefficientBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoefficientBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoefficientBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

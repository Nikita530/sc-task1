import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DartsInputComponent } from './darts-input.component';

describe('DartsInputComponent', () => {
  let component: DartsInputComponent;
  let fixture: ComponentFixture<DartsInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DartsInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DartsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

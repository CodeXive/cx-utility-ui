import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressCancelComponent } from './progress-cancel.component';

describe('ProgressCancelComponent', () => {
  let component: ProgressCancelComponent;
  let fixture: ComponentFixture<ProgressCancelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressCancelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressCancelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

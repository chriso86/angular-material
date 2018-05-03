import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveApplicationRequestComponent } from './leave-application-request.component';

describe('LeaveApplicationRequestComponent', () => {
  let component: LeaveApplicationRequestComponent;
  let fixture: ComponentFixture<LeaveApplicationRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveApplicationRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveApplicationRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

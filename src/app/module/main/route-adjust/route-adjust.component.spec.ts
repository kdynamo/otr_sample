import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteAdjustComponent } from './route-adjust.component';

describe('RouteAdjustComponent', () => {
  let component: RouteAdjustComponent;
  let fixture: ComponentFixture<RouteAdjustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteAdjustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteAdjustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

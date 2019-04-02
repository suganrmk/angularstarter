import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopstarterComponent } from './workshopstarter.component';

describe('WorkshopstarterComponent', () => {
  let component: WorkshopstarterComponent;
  let fixture: ComponentFixture<WorkshopstarterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshopstarterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshopstarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

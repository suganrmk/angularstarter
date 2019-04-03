import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshoporderComponent } from './workshoporder.component';

describe('WorkshoporderComponent', () => {
  let component: WorkshoporderComponent;
  let fixture: ComponentFixture<WorkshoporderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkshoporderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkshoporderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

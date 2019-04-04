import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetworkshoporderComponent } from './getworkshoporder.component';

describe('GetworkshoporderComponent', () => {
  let component: GetworkshoporderComponent;
  let fixture: ComponentFixture<GetworkshoporderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetworkshoporderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetworkshoporderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

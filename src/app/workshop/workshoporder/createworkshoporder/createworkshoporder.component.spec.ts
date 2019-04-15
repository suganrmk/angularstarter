import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateworkshoporderComponent } from './createworkshoporder.component';
import { ReactiveFormsModule } from '@angular/forms'; 
import { FormsModule }   from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { WorkshoporderService, ApiService } from '../../../core/services/';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ConfirmationService } from 'primeng/api';
describe('CreateworkshoporderComponent', () => {
  let component: CreateworkshoporderComponent;
  let fixture: ComponentFixture<CreateworkshoporderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, RouterTestingModule , HttpClientModule],
      declarations: [ CreateworkshoporderComponent ],
      providers: [WorkshoporderService, ApiService, ConfirmationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateworkshoporderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
  });

  it('200, Create Order Component Successfully Loaded', () => {
    const fixture = TestBed.createComponent(CreateworkshoporderComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  it('Form invalid when reporter is empty', () => {
    component.workshoporderForm.patchValue({reporter: ''});
    let reporter = component.workshoporderForm.controls['reporter']
    expect(component.workshoporderForm.valid).toBeFalsy();
  });

  it('Creation Date Field is expected to be todays date with format (dd.mm.yyyy)', () => {
 
    var todayTime = new Date(); 
    function formatDate(date) {
      var d = new Date(date),
          month = '' + (d.getMonth() + 1),
          day = '' + d.getDate(),
          year = d.getFullYear();
  
      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;
  
      return [day, month, year].join('.');
  }

    let creationDate = component.workshoporderForm.controls['creationDate']
    expect(creationDate.value).toEqual(formatDate(todayTime));
  });

});

 
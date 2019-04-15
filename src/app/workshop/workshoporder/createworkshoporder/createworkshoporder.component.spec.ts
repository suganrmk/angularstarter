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

  it('200, Component Successfully Loaded', () => {
    const fixture = TestBed.createComponent(CreateworkshoporderComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  it('Form invalid when truckName is empty', () => {
    component.workshoporderForm.patchValue({truckName: ''});
    let truckName = component.workshoporderForm.controls['truckName']
    expect(component.workshoporderForm.valid).toBeTruthy();
  });
  it('Form invalid when author is empty', () => {
    component.workshoporderForm.patchValue({author: ''});
    let author = component.workshoporderForm.controls['author']
    expect(component.workshoporderForm.valid).toBeFalsy();
  });
  it('Form invalid when reporter is empty', () => {
    component.workshoporderForm.patchValue({reporter: ''});
    let reporter = component.workshoporderForm.controls['reporter']
    expect(component.workshoporderForm.valid).toBeFalsy();
  });
  it('Form invalid when workshopOrderNumber is empty', () => {
    component.workshoporderForm.patchValue({reporter: ''});
    let workshopOrderNumber = component.workshoporderForm.controls['workshopOrderNumber']
    expect(component.workshoporderForm.valid).toBeFalsy();
  });
  it('Form valid when workshopOrderDescription is empty', () => {
    component.workshoporderForm.patchValue({workshopOrderDescription: ''});
    let workshopOrderDescription = component.workshoporderForm.controls['workshopOrderDescription']
    expect(component.workshoporderForm.valid).toBeTruthy();
  });
  it('Form valid when outOfOrder is empty', () => {
    let outOfOrder = component.workshoporderForm.controls['outOfOrder']
    expect(component.workshoporderForm.valid).toBeTruthy();
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

 
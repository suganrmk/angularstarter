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

  // it('Form invalid when reporter is empty', () => {
     
  //   let creationDate = component.workshoporderForm.controls['creationDate']
  //   expect(creationDate.value).toEqual(new Date());
  // });

});

 
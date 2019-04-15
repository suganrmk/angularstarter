import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateworkshoporderComponent } from './createworkshoporder.component';
<<<<<<< HEAD
import { ReactiveFormsModule } from '@angular/forms'; 
import { FormsModule }   from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { WorkshoporderService, ApiService } from '../../../core/services/';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ConfirmationService } from 'primeng/api';
=======
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'; 
import { WorkshoporderService } from '../../../core/services/';
import { ApiService } from '../../../core/services'
import { ConfirmationService} from 'primeng/api';


>>>>>>> 7226d8bb74eb638a13c7f9d3a01ab6920ed02f54
describe('CreateworkshoporderComponent', () => {
  let component: CreateworkshoporderComponent;
  let fixture: ComponentFixture<CreateworkshoporderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD
      imports: [ReactiveFormsModule, FormsModule, RouterTestingModule , HttpClientModule],
      declarations: [ CreateworkshoporderComponent ],
=======
      declarations: [ CreateworkshoporderComponent ],
      imports: [
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forRoot([]),
      ],
>>>>>>> 7226d8bb74eb638a13c7f9d3a01ab6920ed02f54
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
<<<<<<< HEAD
  it('Form invalid when reporter is empty', () => {
    component.workshoporderForm.patchValue({reporter: ''});
    let reporter = component.workshoporderForm.controls['reporter']
    expect(component.workshoporderForm.valid).toBeFalsy();
  });

  // it('Form invalid when reporter is empty', () => {
     
  //   let creationDate = component.workshoporderForm.controls['creationDate']
  //   expect(creationDate.value).toEqual(new Date());
  // });

=======
  it('200, Create Order Page Successfully Loaded', () => {
    const fixture = TestBed.createComponent(CreateworkshoporderComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
>>>>>>> 7226d8bb74eb638a13c7f9d3a01ab6920ed02f54
});

 
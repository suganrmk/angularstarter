import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateworkshoporderComponent } from './createworkshoporder.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'; 
import { WorkshoporderService } from '../../../core/services/';
import { ApiService } from '../../../core/services'
import { ConfirmationService} from 'primeng/api';


describe('CreateworkshoporderComponent', () => {
  let component: CreateworkshoporderComponent;
  let fixture: ComponentFixture<CreateworkshoporderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateworkshoporderComponent ],
      imports: [
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forRoot([]),
      ],
      providers: [WorkshoporderService, ApiService, ConfirmationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateworkshoporderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('200, Create Order Page Successfully Loaded', () => {
    const fixture = TestBed.createComponent(CreateworkshoporderComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { EditComponent } from './edit.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { EditworkshoporderService, ApiService } from '../../../core/services/';
import { RouterTestingModule } from '@angular/router/testing';
describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;
  let _editworkshoporderService: EditworkshoporderService; 
  let apiService: ApiService;
  let http: HttpClient;
  beforeEach(async(() => {
    _editworkshoporderService = new EditworkshoporderService(apiService, http); 

    TestBed.configureTestingModule({
      declarations: [ EditComponent ],
      imports: [   RouterModule, HttpClientModule, RouterTestingModule],
      providers: [EditworkshoporderService, ApiService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

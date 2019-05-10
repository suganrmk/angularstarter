import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { EditComponent } from './edit.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { EditworkshoporderService, ApiService } from '../../../core/services/';
import { RouterTestingModule } from '@angular/router/testing';
import { from as observableFrom } from 'rxjs';

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;
  let _editworkshoporderService: EditworkshoporderService;
  let apiService: ApiService;
  let http: HttpClient;
  beforeEach(async(() => {


    TestBed.configureTestingModule({
      declarations: [EditComponent],
      imports: [RouterModule, HttpClientModule, RouterTestingModule],
      providers: [EditworkshoporderService, ApiService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
    _editworkshoporderService = new EditworkshoporderService(apiService, http);
    component = new EditComponent(_editworkshoporderService);
    fixture.detectChanges();
  });

  it('should create edit', () => {
    expect(component).toBeTruthy();
  });


  it('should set Waiting data  with the items returned from the server', () => {
    // Arrange - Setup
    const waitingtrucks = [
      {
        assignedSlot: null,
        author: "Test User",
        createdBy: "Test User",
        createdDate: "2019-04-29T07:40:34.618+0000",
        modifiedBy: "Test User",
        operatingHours: 0,
        outOfOrder: true,
        priority: 1,
        repairDescription: null,
        reportNumber: 0,
        reporter: "Test User",
        serialNumber: "F20179G00187",
        shipToPartyNo: 29804,
        truckName: "EXU-SF 20",
        workStatus: "WAITING",
        workshopOrderDescription: "c",
        workshopOrderNumber: 2980400032,
      }
    ];

    spyOn(_editworkshoporderService, 'getWaitingList').and.callFake(() => {
      return observableFrom([waitingtrucks]);
    });

    component.ngOnInit();
    expect(component.waitingWorkshopOrder).toEqual(waitingtrucks);
    expect(component.waitingWorkshopOrder.length).toEqual(1);
  });

});

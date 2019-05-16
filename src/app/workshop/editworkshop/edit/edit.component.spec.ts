import { async, ComponentFixture, TestBed, getTestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { EditComponent } from './edit.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { EditworkshoporderService, ApiService,WorkshoporderService } from '../../../core/services/';
import { RouterTestingModule } from '@angular/router/testing';
import { from as observableFrom } from 'rxjs';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { EditworkshopModule } from '../../../workshop/editworkshop/editworkshop.module';
import { EditworkshopRoutingModule } from '../../../workshop/editworkshop/editworkshop-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { Routes } from '@angular/router';

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;
  let _editworkshoporderService: EditworkshoporderService;
  let apiService: ApiService;
  let http: HttpClient;
  let _router: Router;

  beforeEach(async(() => {


    TestBed.configureTestingModule({
      declarations: [EditComponent],
      imports: [RouterModule, HttpClientModule, RouterTestingModule, EditworkshopRoutingModule, SharedModule],
      providers: [EditworkshoporderService, ApiService, WorkshoporderService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
    _editworkshoporderService = new EditworkshoporderService(apiService, http);
    component = fixture.componentInstance;
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

    // component.ngOnInit();
    // expect(component.waitingWorkshopOrder).toEqual(waitingtrucks);
    // expect(component.waitingWorkshopOrder.length).toEqual(1);
  });

//   const testRoutes: Routes = [
//     {
//           path: '',
//           component: EditComponent
//         }
//       ]


//   // test module configuration for each test
// const testModuleConfig = () => {
//   // reset the test environment before initializing it.
//   TestBed.resetTestEnvironment();
//   TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting())
//     .configureTestingModule({
//       imports: [
//         EditworkshopModule,
//         RouterTestingModule.withRoutes(testRoutes),
//       ],
//       providers: [ApiService, WorkshoporderService]
//     });
// };

// describe('Some service',
//   () => {
//     beforeEach(() => {
//     testModuleConfig();
//   });
//   it('should be able to navigate to `/`',
//   (() => {
//       const injector = getTestBed();
//       const router = injector.get(Router);
//       const fixture = TestBed.createComponent(EditComponent);
//  fixture.detectChanges();
//       // initial navigation
//       router.navigate([''])
//         .then(() => {
//           expect(router.url).toEqual('/');
//         });
//       }));
// });

});

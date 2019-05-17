import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { async, ComponentFixture, TestBed, getTestBed} from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { EditComponent } from '../../src/app/workshop/editworkshop/edit/edit.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { EditworkshoporderService, ApiService,WorkshoporderService } from '../../src/app/core/services';
import { from as observableFrom } from 'rxjs';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { EditworkshopModule } from '../../src/app/workshop/editworkshop/editworkshop.module';
import { EditworkshopRoutingModule } from '../../src/app/workshop/editworkshop/editworkshop-routing.module';
import { SharedModule } from '../../src/app/shared/shared.module';
import { Routes } from '@angular/router';
import { ArchiveComponent } from '../../src/app/workshop/archives/archive/archive.component';
import { ArchivesModule } from '../../src/app/workshop/archives/archives.module';
import { SettingComponent } from '../../src/app/workshop/settings/setting/setting.component';
import { SettingsModule } from '../../src/app/workshop/settings/settings.module';
import { CreateworkshoporderComponent } from '../../src/app/workshop/workshoporder/createworkshoporder/createworkshoporder.component';
import { WorkshoporderComponent } from '../../src/app/workshop/workshoporder/workshoporder.component';
import { OrderlistComponent } from '../app/workshop/workshoporder/orderlist/orderlist.component';
import { WorkshopModule } from '../app/workshop/workshop.module';
import { WorkshoporderModule} from '../../src/app/workshop/workshoporder/workshoporder.module';

// describe('EditComponent', () => {
//   let component: EditComponent;
//   let fixture: ComponentFixture<EditComponent>;
//   let _editworkshoporderService: EditworkshoporderService;
//   let apiService: ApiService;
//   let http: HttpClient;
//   let _router: Router;

describe('AppComponent', () => {
  let editcomponent: EditComponent;
  let fixture: ComponentFixture<EditComponent>;
  let _editworkshoporderService: EditworkshoporderService;
  let apiService: ApiService;
  let http: HttpClient;
  let _router: Router;
  let archiveComponent: ArchiveComponent;
  let _routes: Routes;

beforeEach(async(() => {


  TestBed.configureTestingModule({
    declarations: [AppComponent, EditComponent, ArchiveComponent, SettingComponent, CreateworkshoporderComponent,WorkshoporderComponent, OrderlistComponent],
    imports: [RouterModule, HttpClientModule, RouterTestingModule, EditworkshopRoutingModule, SharedModule],
    providers: [EditworkshoporderService, ApiService, WorkshoporderService]
  })
    .compileComponents();
}));
  it('200, Component Successfully Loaded', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Workshop'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Workshop');
  });

  const testRoutes: Routes = [
    {
          path: '',
          component: EditComponent
        },
        {
          path: '', component: ArchiveComponent,
        },
        {
          path: '', component: SettingComponent,
        },
        {
          path: '',
          children: [ 
            {
              path: '',
              component: WorkshoporderComponent,
            },
            { path: 'createorder/:truckname/:serialid/:partyid',
              component: CreateworkshoporderComponent 
            },
            { path: 'editorder/:truckname/:serialid/:partyid', 
              component: CreateworkshoporderComponent 
            },
            { path: 'trucklist', 
              component: OrderlistComponent
            },
            {
              path: '',
              redirectTo: '/trucklist',
              pathMatch: 'full'
            },
          ],
            
        }
  ]
  

  // test module configuration for each test
const testModuleConfig = () => {
  // reset the test environment before initializing it.
  TestBed.resetTestEnvironment();
  TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting())
    .configureTestingModule({
      imports: [
        EditworkshopModule,
        ArchivesModule,
        SettingsModule, 
        WorkshopModule,
        WorkshoporderModule,
        RouterTestingModule.withRoutes(testRoutes),
      ],
      providers: [ApiService, WorkshoporderService]
    });
};

describe('Routing service',
  () => {
    beforeEach(() => {
    testModuleConfig();
  });

  it('should be able to navigate to EditComponent',
  (() => {
      const injector = getTestBed();
      const router = injector.get(Router);
      const fixture = TestBed.createComponent(EditComponent);
 fixture.detectChanges();
      // initial navigation
      router.navigate([''])
        .then(() => {
          expect(router.url).toEqual('/');
        });
      }));

      it('should be able to navigate to ArchiveComponent',
  (() => {
      const injector = getTestBed();
      const router = injector.get(Router);
      const fixture = TestBed.createComponent(ArchiveComponent);
 fixture.detectChanges();
      // initial navigation
      router.navigate([''])
        .then(() => {
          expect(router.url).toEqual('/');
        });
      }));

      it('should be able to navigate to SettingComponent',
  (() => {
      const injector = getTestBed();
      const router = injector.get(Router);
      const fixture = TestBed.createComponent(SettingComponent);
 fixture.detectChanges();
      // initial navigation
      router.navigate([''])
        .then(() => {
          expect(router.url).toEqual('/');
        });
      }));
      
      it('should be able to navigate to CreateworkshoporderComponent',
  (() => {
      const injector = getTestBed();
      const router = injector.get(Router);
      const fixture = TestBed.createComponent(CreateworkshoporderComponent);
 fixture.detectChanges();
      // initial navigation
      router.navigate([''])
        .then(() => {
          expect(router.url).toEqual('/');
        });
      }));

      it('should be able to navigate to createorder of CreateworkshoporderComponent ',
      (() => {
          const injector = getTestBed();
          const router = injector.get(Router);
          const fixture = TestBed.createComponent(CreateworkshoporderComponent);
     fixture.detectChanges();
          // initial navigation
          router.navigate(['createorder/:truckname/:serialid/:partyid'])
            .then(() => {
              expect(router.url).toEqual('createorder/:truckname/:serialid/:partyid');
            });
          }));

          it('should be able to navigate to editorder of CreateworkshoporderComponent ',
      (() => {
          const injector = getTestBed();
          const router = injector.get(Router);
          const fixture = TestBed.createComponent(CreateworkshoporderComponent);
     fixture.detectChanges();
          // initial navigation
          router.navigate(['editorder/:truckname/:serialid/:partyid'])
            .then(() => {
              expect(router.url).toEqual('editorder/:truckname/:serialid/:partyid');
            });
          }));

          it('should be able to navigate to trucklist of OrderlistComponent ',
      (() => {
          const injector = getTestBed();
          const router = injector.get(Router);
          const fixture = TestBed.createComponent(OrderlistComponent);
     fixture.detectChanges();
          // initial navigation
          router.navigate(['trucklist'])
            .then(() => {
              expect(router.url).toEqual('trucklist');
            });
          }));
          
      it('should be able to navigate to WorkshoporderComponent',
  (() => {
      const injector = getTestBed();
      const router = injector.get(Router);
      const fixture = TestBed.createComponent(WorkshoporderComponent);
 fixture.detectChanges();
      // initial navigation
      router.navigate([''])
        .then(() => {
          expect(router.url).toEqual('/');
        });
      }));

});


});

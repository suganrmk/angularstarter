import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderlistComponent } from './orderlist.component';
import { TableModule } from 'primeng/table';
import { RouterModule } from '@angular/router';
import { WorkshoporderService , ApiService } from '../../../core/services/';
import { HttpClientModule} from '@angular/common/http';

describe('OrderlistComponent', () => {
  let component: OrderlistComponent;
  let Tablecomponent: TableModule;
  let fixture: ComponentFixture<OrderlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderlistComponent ],
      imports: [TableModule , RouterModule, HttpClientModule],
      providers: [WorkshoporderService , ApiService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('200, Order list Page Successfully Loaded', () => {
    const fixture = TestBed.createComponent(OrderlistComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});

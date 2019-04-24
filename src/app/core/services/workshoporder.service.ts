
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { api } from '../constants';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { IworkorderList } from '../../core/models/workshop';
import { headerID } from '../enums/header';
const headers = new HttpHeaders({
  'IV-USER': headerID.IV_USER,
  'ecid': headerID.ECID,
  'Content-Type': 'application/json'
});

@Injectable()
export class WorkshoporderService {

  constructor(  private apiService: ApiService, private http: HttpClient) {}


  getAllTruck(): Observable<[string]> {
    const options = { headers: headers };
    return this.apiService.post(api.getTrucks, null, options)
      .pipe(map(data => data.trucks));
  }


  getWorkordernumber(params: HttpParams = new HttpParams()): Observable<[string]> {
    const options = { headers, params };
    return this.apiService.get(api.getWorkordernumber, options)
      .pipe(map(data => data.workOrderNumber));
  }

 // create/update work order
  createorder(data, params, orderstatus:string): Observable<[string]> { 
    let orderapi = orderstatus ? api.updateorder : api.createorder; 
    const options = { headers, params }; 
    return this.apiService.post(orderapi, data, options)
      .pipe(map(data => data));
  }

  
  deleteorder(data, params): Observable<[string]> {
    const options = { headers, params }; 
    return this.apiService.delete(api.deleteworkshoporder, data)
      .pipe(map(data => data));
  }

  getworkshoporderdetails(serialNumber: string){
    const params = {'lang': 'en'}
    const options = { headers, params };
    return this.apiService.get(api.getworkshoporderdetails + serialNumber, options)
      .pipe(map(data => data));
  }
}
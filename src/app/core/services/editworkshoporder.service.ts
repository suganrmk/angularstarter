
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


  createorder(data, params): Observable<[string]> {
    const options = { headers, params }; 
    return this.apiService.post(api.createorder, data, options)
      .pipe(map(data => data));
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { api } from '../constants';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
@Injectable()
export class WorkshoporderService {
  constructor(
    private apiService: ApiService,
    private http: HttpClient,
  ) { }

  // getAll(): Observable<[string]> {
  //   return this.apiService.get(api.getWorkshop)
  //     .pipe(map(data => data.trucks));
  // }

  getAllTruck(): Observable<[string]> {
    let headers = new HttpHeaders({
      'IV-USER': 'kxdel0095',
      'ecid': 'FOV-FT-TruckListService-Case1'
    });
    let options = { headers: headers };
    return this.apiService.post(api.getTrucks, null, options)
      .pipe(map(data => data.trucks));
  }


  getWorkordernumber(paramObj): Observable<[string]> {
    let headers = new HttpHeaders({
      'IV-USER': 'kxdel0095',
      'ecid': 'FOV-FT-TruckListService-Case1' 
    });   
    return this.apiService.get(api.getWorkordernumber, paramObj, headers)
      .pipe(map(data => data.workOrderNumber));
  }  
 

  createorder(data): Observable<[string]> {
    let headers = new HttpHeaders({
      'IV-USER': 'kxdel0095',
      'ecid': 'FOV-FT-TruckListService-Case1'
    });
    let options = { headers: headers };
    return this.apiService.post(api.createorder, data, options)
      .pipe(map(data => data.trucks));
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { api } from '../constants';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class WorkshoporderService {
  constructor(
    private apiService: ApiService
  ) { }

  getAll(): Observable<[string]> {
    return this.apiService.get(api.getWorkshop)
      .pipe(map(data => data.trucks));
  }

  getAllTruck(): Observable<[string]> {
    let headers = new HttpHeaders({
      'IV-USER': 'kxdel0095',
      'ecid': 'FOV-FT-TruckListService-Case1'
    });
    let options = { headers: headers };
    return this.apiService.post(api.getTrucks, null , options)
      .pipe(map(data => data.trucks));
  }

}
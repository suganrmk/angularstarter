    
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { api } from '../constants'; 

@Injectable()
export class WorkshoporderService {
  constructor (
    private apiService: ApiService
  ) {}

  getAll(): Observable<[string]> {
    return this.apiService.get(api.getWorkshop)
          .pipe(map(data => data.trucks));
  }

}
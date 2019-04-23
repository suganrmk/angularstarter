
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
export class EditworkshoporderService {

  constructor(  private apiService: ApiService, private http: HttpClient) {}

  
}
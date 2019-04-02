import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';  

 
 
@Injectable({
  providedIn: 'root'
})
export class ShareService { 

  constructor(private http: HttpClient) { }

  getData(url) {
    return this.http.get(url).pipe(
      map((data) => { 
        return data;
      })
    );
  }

  postData(url, data) {
    return this.http.post(url, data).pipe(
      map((data) => {       
         return data;
      })
    );
  }

  update(url, data) {
    return this.http.put(url, data);
  }

  delete(url) {
    return this.http.delete(url);
  }

 
}

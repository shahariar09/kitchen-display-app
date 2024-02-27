import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private http: HttpClient) {}

   getData(): Observable<any> {
    debugger
    var api = this.http.get('assets/config.json');
    return api;
  }
}

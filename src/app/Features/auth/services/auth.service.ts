import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = '';
  isLoggedIn() {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient: HttpClient, private config: ConfigService) {
    config.getData().subscribe((d) => {
      this.apiUrl = d.api;
    });
  }

  login(userName: any, pass: any) {
    var data = this.httpClient.get<any>(
      `${this.apiUrl}Login/CheckChief?ChiefId=${userName}&pass=${pass}`
    );
    return data;
  }
}

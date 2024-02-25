import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  windowObj: any = window;
  private readonly APIUrl = this.windowObj.__env.apiUrl;

  isLoggedIn() {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient: HttpClient) {}

  login(userName: any, pass: any) {
    var data = this.httpClient.get<any>(
      `${this.APIUrl}Login/CheckChief?ChiefId=${userName}&pass=${pass}`
    );
    return data;
  }
}

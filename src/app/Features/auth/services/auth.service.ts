import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../assets/environment.js';
import environment from '../../../../assets';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
isLoggedIn() {
  throw new Error('Method not implemented.');
}

constructor(
  private httpClient: HttpClient,
) { }

login(userName: any,pass:any) {
  var data = this.httpClient.get<any>(`${environment.apiUrl}Login/CheckChief?ChiefId=${userName}&pass=${pass}`);
  return data;
}

}

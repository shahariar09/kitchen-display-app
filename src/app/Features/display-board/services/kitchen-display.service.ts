import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, map, throwError } from 'rxjs';
import { Options } from 'smooth-scrollbar/options';
import { environment } from 'src/assets/environment';

@Injectable({
  providedIn: 'root'
})
export class KitchenDisplayService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  private buttonClickSubject = new Subject<void>();

  // Observable to subscribe to button clicks
  buttonClick$ = this.buttonClickSubject.asObservable();

  // Method to trigger a button click event
  emitButtonClick() {
    this.buttonClickSubject.next();
  }



  getAllOrdersByUserId(userId: any) {
    var data = this.httpClient.get<any>(`${environment.apiUrl}KitchenDisplay/SelectAll?userId=${userId}`);
    return data;
  }

  getSaleInfoByKotId(KOT: any) {
    var data = this.httpClient.get<any>(`${environment.apiUrl}KitchenDisplay/SelectForVoidFromKitchen?Invoice=${KOT.Invoice}&UserId=${KOT.UserId}`);
    return data;
  }

  updateStatus(kot: any):Observable<any> {
    const url = environment.apiUrl + "KitchenDisplay/UpdateStatus/"; 

    var headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json",
   
    });

    const options = {
      headers: headers
    };

    return this.httpClient.post<any>(url, kot,options)

  }
  updateOrRejectKds(kdsList: any):Observable<any> {
    const url = environment.apiUrl + "KitchenDisplay/VoidInvoice"; 

    var headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Accept": "application/json",
   
    });

    const options = {
      headers: headers
    };

    return this.httpClient.post<any>(url, kdsList,options)

  }


}
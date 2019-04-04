import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SomethingService {
  API_URL: String;
  httpOptions: any = {};
  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
  }

  searchInvoice(){
    this.API_URL = `${environment.host}${environment.apiInvoices}`;
    return this.http.get<any[]>(`${this.API_URL}`);
  }

  findInvoice(id: number){
      this.API_URL = `${environment.host}${environment.apiInvoicesDetail}/${id}`;
      return this.http.get<any[]>(`${this.API_URL}`);
  }

  searchInvoiceById(search: string){
    this.API_URL = `${environment.host}${environment.apiInvoices}`;
    return this.http.get<any[]>(`${this.API_URL}`);
  }

  createInvoice(id: number){
    this.API_URL = `${environment.host}${environment.apiInvoices}?key=${id}`;
    return this.http.post(`${this.API_URL}`,{});
  }

}

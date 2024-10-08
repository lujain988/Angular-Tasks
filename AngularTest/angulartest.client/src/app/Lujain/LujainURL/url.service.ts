import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
}) export class UrlService {
  staticData = "https://localhost:7103/api";
  url = `${this.staticData}/Service`;

  constructor(private http: HttpClient) { }

  getServices(): Observable<any> {
    return this.http.get<any>(this.url);
  }

  getSubServiceByServiceId(id: number): Observable<any> {
    return this.http.get<any>(`${this.staticData}/SubService/getSubServiceByServiceId/${id}`);
  }

  getSubServiceDetails(id: number): Observable<any> {
    return this.http.get<any>(`${this.staticData}/SubService/getSubServiceDetails/${id}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
}) export class UrlService {


  email: BehaviorSubject<string> = new BehaviorSubject<string>('');
  emailaddress = this.email.asObservable();

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

  getSubscriotionData(): Observable<any> {
    return this.http.get<any>(`${this.staticData}/Subscribtion`)
  }


  postSubscriotionData(data: any): Observable<any> {
    return this.http.post<any>(`${this.staticData}/Subscribtion/addSubscriptionUser`, data)
  }

  postRegistrationData(data: any): Observable<any> {
    return this.http.post<any>(`${this.staticData}/Users`, data)
  }

  postLoginData(data: any): Observable<any> {
    debugger
    return this.http.post<any>(`${this.staticData}/Users/Login`, data)
  }

  addService(data: any): Observable<any> {
    return this.http.post<any>(`${this.staticData}/Users/addService`, data)
  }


  editService(id: any, data: any): Observable<any> {
    return this.http.put<any>(`${this.staticData}/Service/${id}`, data); 
  }
  getServiceById(id: any): Observable<any> {
    return this.http.get<any>(`${this.staticData}/Service/${id}`);
  }

  }


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


  getProduct(): Observable<any> {
    return this.http.get<any>(`${this.staticData}/Product`)
  }

  cartItem: any = [];
  cartItemSubject: BehaviorSubject<any> = new BehaviorSubject<any>(this.cartItem);
  cartItemObser = this.cartItemSubject.asObservable();

  addTocart(data: any) {
    var record = this.cartItem.find((x: any) => x.productId == data.productId)
    if (record) {
      alert("product alrady exist")

    }
    else {

      this.cartItem.push(data);
      this.cartItemSubject.next(this.cartItem);
    }
  }
  increaseQuantity(id: any) {
    debugger;
    var product = this.cartItem.find((x: any) => x.productId == id);
    if (product) {
      product.quantity += 1;
      this.cartItemSubject.next(this.cartItem);
    }


  }
  decrementQuantity(id: any) {
    debugger;
    var product = this.cartItem.find((x: any) => x.productId == id);
    if (product) {
      product.quantity -= 1;
      this.cartItemSubject.next(this.cartItem);
    }

  }

}


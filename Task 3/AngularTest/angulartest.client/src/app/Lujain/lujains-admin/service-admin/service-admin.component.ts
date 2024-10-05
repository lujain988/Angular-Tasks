import { Component } from '@angular/core';
import { UrlService } from '../../LujainURL/url.service';

@Component({
  selector: 'app-service-admin',
  templateUrl: './service-admin.component.html',
  styleUrl: './service-admin.component.css'
})
export class ServiceAdminComponent {
  servicesArray: any;

  constructor(private _ser: UrlService) { }

  ngOnInit() {
    this.getServices();
  }
  logId(id: any) {
    console.log('ID:', id); 
  }

  getServices() {
    this._ser.getServices().subscribe((data) => {
      this.servicesArray = data;
      console.log("Fetched services data:", this.servicesArray);
    });
  }
}

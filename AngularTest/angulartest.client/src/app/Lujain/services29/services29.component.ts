import { Component } from '@angular/core';
import { UrlService } from '../LujainURL/url.service';


@Component({
  selector: 'app-services29',
  templateUrl: './services29.component.html',
  styleUrl: './services29.component.css'
})
export class Services29Component {
  servicesArray: any;

  constructor(private _ser: UrlService) { }

  ngOnInit() {
    this.getServices();
  }

  getServices() {
    this._ser.getServices().subscribe((data) => {
      this.servicesArray = data;
      console.log("Fetched services data:", this.servicesArray); // Log to verify structure
    });
  }
}

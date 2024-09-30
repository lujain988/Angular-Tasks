import { Component } from '@angular/core';
import { UrlService } from '../../LujainURL/url.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-sub-services',
  templateUrl: './sub-services.component.html',
  styleUrl: './sub-services.component.css'
})
export class SubServicesComponent {
  paramter: any;
  subSetvicesData: any[]=[];

  constructor(private _ser: UrlService, private _router: ActivatedRoute) { }

  ngOnInit() {
    this.paramter = this._router.snapshot.paramMap.get("id");
    console.log("Parameter ID:", this.paramter);

    this.getSubServiceDetails(this.paramter);
   
  }

  getSubServiceDetails(id: any) {
    this._ser.getSubServiceByServiceId(id).subscribe((data: any) => { // Expecting an array here
      this.subSetvicesData = data; // Assigning the array to the variable
      console.log("Fetched sub services data:", this.subSetvicesData);
    }, (error) => {
      console.error("Error fetching sub services:", error);
    });
  }
}

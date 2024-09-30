import { Component } from '@angular/core';
import { UrlService } from '../../LujainURL/url.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  paramter: any;
  subSetvicesDataa: any;

  constructor(private _ser: UrlService, private _router: ActivatedRoute) { }

  ngOnInit() {
    this.paramter = this._router.snapshot.paramMap.get("id");
    console.log("Parameter ID:", this.paramter);

    this.getSubServiceDetails(this.paramter);

  }

  getSubServiceDetails(id: any) {
    this._ser.getSubServiceDetails(id).subscribe((data: any) => { // Expecting an array here
      this.subSetvicesDataa = data; // Assigning the array to the variable
      console.log("Fetched sub services data:", this.subSetvicesDataa);
    }, (error) => {
      console.error("Error fetching sub services:", error);
    });
  }
}

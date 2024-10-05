import { Component } from '@angular/core';
import { UrlService } from '../../LujainURL/url.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrl: './edit-service.component.css'
})
export class EditServiceComponent {
  id: any;
  image: any;
  service: any = {}; 

  constructor(private _ser: UrlService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get("id");
    this.loadServiceDetails(this.id); 
  }

  loadServiceDetails(id: any) {
    this._ser.getServiceById(id).subscribe(serviceDetails => {
      this.service = serviceDetails;
    });
  }

  changeImage(event: any) {
    this.image = event.target.files[0];
  }

  editServices(data: any) {
    const form = new FormData();

    form.append("ServiceID", this.id);

    for (let item in data) {
      form.append(item, data[item]);
    }

    if (this.image) {
      form.append("ServiceImage", this.image);
    }

    this._ser.editService(this.id, form).subscribe(
      (response) => {
        alert("Service Updated Successfully!");
        this._router.navigate(["/dashboard"]);
      },
      (error) => {
        console.error('Error updating service:', error);
        alert("There was an error updating the service. Please try again.");
      }
    );
  }
}

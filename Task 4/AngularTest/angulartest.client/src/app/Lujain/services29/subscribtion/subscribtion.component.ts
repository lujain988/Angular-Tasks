import { Component } from '@angular/core';
import { UrlService } from '../../LujainURL/url.service';

@Component({
  selector: 'app-subscribtion',
  templateUrl: './subscribtion.component.html',
  styleUrls: ['./subscribtion.component.css']
})
export class SubscribtionComponent {
  sub: any[] = [];
  data: any; // Declare data here

  constructor(private _ser: UrlService) { }

  ngOnInit() {
    this.getSubscribtion();
  }

  getSubscribtion() {
    this._ser.getSubscriotionData().subscribe(
      (data) => {
        this.sub = data;
        console.log(this.sub);
      }
    );
  }

  createDataObject() {
    const subServiceId = localStorage.getItem('subServiceId'); 

    this.data = {
      userId: 1,
      subscriptionId: 0,
      subServiceId: subServiceId ? parseInt(subServiceId) : null 
    };

    console.log("Data object created:", this.data);
  }

  addSub(id: number) {
    this.createDataObject(); 
    this.data.subscriptionId = id; 

    this._ser.postSubscriotionData(this.data).subscribe(() => {
      alert("Added successfully");
    }, (error) => {
      console.error("Error adding subscription:", error);
    });
  }
}

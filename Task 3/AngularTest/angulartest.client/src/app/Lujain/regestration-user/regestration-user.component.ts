import { Component } from '@angular/core';
import { UrlService } from '../LujainURL/url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regestration-user',
  templateUrl: './regestration-user.component.html',
  styleUrl: './regestration-user.component.css'
})
export class RegestrationUserComponent {
  constructor(private _ser: UrlService, private _router: Router) { }
  ngOnInit() {
  
  }
  //const form = document.getElementById("form");

  //const formData = new FormData(form);
  
  addUser(data: any) {
    var form = new FormData();
    for (let key in data) {
      form.append(key, data[key])
    }
    this._ser.postRegistrationData(form).subscribe(() => {
      alert("User Added Succesfully")
      this._router.navigate(['/login']);
    //  window.location.href = "#";
    },
      (error) => {
        alert(error.error)
        
      }
    )
  }
}

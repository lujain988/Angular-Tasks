import { Component } from '@angular/core';
import { UrlService } from '../LujainURL/url.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrl: './login-user.component.css'
})
export class LoginUserComponent {
  constructor(private _ser: UrlService, private _router: Router) {

  }
  ngOnInit() {

  }
  

  userlogin(data: any) {
    var form = new FormData();
    for (let key in data) {
      form.append(key, data[key])
    }
    this._ser.postLoginData(form).subscribe((newData) => {
      this._ser['email'].next(newData.email);
      if (newData.email == 'admin@gmail.com') {
        this._router.navigate(['/dashboard'])


      } else {
        this._router.navigate(['/Services'])

      }
      alert("Login Succesfully")


    },
      (error) => {
        alert(error.error)
      }

    )
  }
}

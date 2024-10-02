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
    this._ser.postLoginData(form).subscribe(() => {

      alert("Login Succesfully")

      this._router.navigate(['/dashboard']);

    },
      (error) => {
        alert(error.error)
      }

    )
  }
}

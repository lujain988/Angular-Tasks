import { Component } from '@angular/core';
import { UrlService } from '../LujainURL/url.service';

@Component({
  selector: 'app-nav-bar29',
  templateUrl: './nav-bar29.component.html',
  styleUrl: './nav-bar29.component.css'
})
export class NavBar29Component {
  email: string = '';

  constructor(private _ser: UrlService) { }

  ngOnInit(): void {
    this._ser.emailaddress.subscribe((data) => {
      this.email = data;
    });
  }

  logout() {
    this._ser.email.next('');
  }
}

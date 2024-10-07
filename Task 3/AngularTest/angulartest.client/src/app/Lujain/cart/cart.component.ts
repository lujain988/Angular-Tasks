import { Component } from '@angular/core';
import { UrlService } from '../LujainURL/url.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  ngOnInit() {

    this.getCartItem();
}
  constructor(private _ser: UrlService) { }
  array: any;
  getCartItem() {
    this._ser.cartItemObser.subscribe((data) => {
      this.array = data;
    })
  }

  incrementQuantity(id: any) {
    this._ser.increaseQuantity(id);
  }
  decrementQuantity(id: any) {
    debugger;
    this._ser.decrementQuantity(id);


  }
}

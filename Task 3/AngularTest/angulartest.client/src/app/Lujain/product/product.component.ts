import { Component } from '@angular/core';
import { UrlService } from '../LujainURL/url.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  servicesArray: any;

  constructor(private _ser: UrlService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this._ser.getProduct().subscribe((data) => {
      this.servicesArray = data;
      console.log("Fetched services data:", this.servicesArray);
    });
  }

  object = {
    cartID: 0,
    productId: 0,
    userID: 0,
    quantity: 0 
  };

  addToCart(productId: any) {

    const currentCartItems = this._ser.cartItem; 

    const existingItem = currentCartItems.find((item: any) => item.productId === productId);

    if (existingItem) {
      existingItem.quantity += this.object.quantity; 
      alert("Product quantity updated");
    } else {
      this.object.productId = productId;
      if (this.object.quantity > 0) { 
        this._ser.addTocart({ ...this.object });
      } else {
        alert("Please enter a valid quantity."); 
      }
    }

    this.object.quantity = 0; 
  }




}

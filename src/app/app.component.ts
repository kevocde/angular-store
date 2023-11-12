import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  protected products: String[] = [
    'Milk',
    'Bread',
    'Beans',
  ];
  protected product: String = '';

  protected addProduct() {
    if (this.product.length) {
      this.products.push(this.product);
      this.product = '';
    }
  }

  protected removeProduct(idx: number) {
    this.products.splice(idx, 1);
  }
}

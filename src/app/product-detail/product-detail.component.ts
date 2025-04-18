import { Component, DestroyRef, input, output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  product = input<Product>();
  added = output<Product>();

  constructor(destroyRef: DestroyRef) {
    destroyRef.onDestroy(() => {
      
    });
  }

  addToCart(): void {
    this.added.emit(this.product()!);
  }

  get productTitle() {
    return this.product()!.title;
  }

}

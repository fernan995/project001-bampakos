import { ChangeDetectionStrategy, Component, input, output, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit {
  product = input<Product>();
  added = output<Product>();

  constructor() {
    console.log('Product: ', this.product());
  }

  addToCart(): void {
    this.added.emit(this.product()!);
  }

  get productTitle() {
    return this.product()!.title;
  }

  ngOnInit(): void {
    console.log('Product: ', this.product());
  }
}

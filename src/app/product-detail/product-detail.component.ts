<<<<<<< HEAD
import { ChangeDetectionStrategy, Component, input, output, OnInit, OnDestroy } from '@angular/core';
=======
import { ChangeDetectionStrategy, Component, input, output, OnInit } from '@angular/core';
>>>>>>> 8631fa2df794fc1edc29f6c05a3b11ab76c1f47d
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
<<<<<<< HEAD
export class ProductDetailComponent implements OnDestroy {
=======
export class ProductDetailComponent implements OnInit {
>>>>>>> 8631fa2df794fc1edc29f6c05a3b11ab76c1f47d
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

<<<<<<< HEAD
  ngOnDestroy(): void {
    
=======
  ngOnInit(): void {
    console.log('Product: ', this.product());
>>>>>>> 8631fa2df794fc1edc29f6c05a3b11ab76c1f47d
  }
}

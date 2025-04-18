import { ChangeDetectionStrategy, Component, input, output, ViewEncapsulation } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent {
  product = input<Product>();
  added = output<Product>();

  addToCart(): void {
    this.added.emit(this.product()!);
  }

  get productTitle() {
    return this.product()!.title;
  }
}

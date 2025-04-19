import { Component, AfterViewInit, viewChild } from '@angular/core';
import { Product } from '../product';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductDetailComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements AfterViewInit {
  products: Product[] = [
    { id: 1, title: 'Keyboard' },
    { id: 2, title: 'Microphone' },
    { id: 3, title: 'Web camera' },
    { id: 4, title: 'Tablet' },
  ];
  selectedProduct: Product | undefined;

  productDetail = viewChild(ProductDetailComponent);

  onAdded(product: Product) {
    alert(`${product.title} added to the cart!`);
  }

  ngAfterViewInit(): void {
    console.log(this.productDetail()!.product());
  }
}

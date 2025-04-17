import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let productList: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListComponent);
    productList = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(productList).toBeTruthy();
  });
});

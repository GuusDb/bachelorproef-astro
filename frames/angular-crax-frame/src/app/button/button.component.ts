import { Component } from '@angular/core';
import { ProductService } from 'src/services/product-service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  constructor(private productService: ProductService) {
    this.productService = productService;
  }

  getAllProducts() {
    this.productService.getAll().subscribe((products) => {
      console.log(products);
    });
  }
}

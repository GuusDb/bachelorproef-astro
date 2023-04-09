import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService, product } from 'src/services/product-service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  products$: Observable<product[]> = new Observable<product[]>();

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products$ = this.productService.getAll();
  }
}

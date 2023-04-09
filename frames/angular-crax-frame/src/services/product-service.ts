import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

export type product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'https://fakestoreapi.com/products';
  private products: product[] = []; // Cache the products here

  constructor(private http: HttpClient) {}

  getAll(): Observable<product[]> {
    if (this.products.length != 0) {
      // If the products are already cached, return them as an observable
      return of(this.products);
    } else {
      // Otherwise, make an HTTP request to retrieve the products
      return this.http.get<product[]>(`${this.baseUrl}`).pipe(
        tap((products) => {
          // Cache the retrieved products
          this.products = products;
        })
      );
    }
  }
}

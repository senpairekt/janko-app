import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, map } from 'rxjs';
import { Product } from './product-data/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsUrl = 'api/products'

   products$ = this.http.get<Product[]>(this.productsUrl)

  constructor(private http:HttpClient) { }
}

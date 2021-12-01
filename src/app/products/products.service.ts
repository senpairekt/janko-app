import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product-data/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsUrl = 'api/products'

   products$ = this.http.get<Product[]>(this.productsUrl)
   .pipe(
     
   )

  constructor(private http:HttpClient) { }
}

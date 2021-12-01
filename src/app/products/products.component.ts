import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  pageTitle = 'Janko-App'

 
   products$ = this.productsService.products$

  constructor(private productsService : ProductsService) { }

  ngOnInit(): void {
  }

}

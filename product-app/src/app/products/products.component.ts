import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any = [];

  constructor(private pservice: ProductsService) {}

  ngOnInit(): void {
    this.pservice.getProducts().subscribe((res) => {
      console.log(res);
      this.products = res;
    });
    console.log(this.products);
  }

}

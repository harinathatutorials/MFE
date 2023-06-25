import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  products: any = [];

  images = [
    'https://images.pexels.com/photos/2387869/pexels-photo-2387869.jpeg',
    'https://images.pexels.com/photos/2395264/pexels-photo-2395264.jpeg',
    'https://images.pexels.com/photos/2474014/pexels-photo-2474014.jpeg',
    'https://images.pexels.com/photos/2440296/pexels-photo-2440296.jpeg',
    'https://images.pexels.com/photos/2506269/pexels-photo-2506269.jpeg',
  ];

  constructor(private pservice: ProductsService, private router: Router) {}

  ngOnInit(): void {
    this.pservice.getProducts().subscribe((res) => {
      console.log(res);
      this.products = res;
    });
    console.log(this.products);
  }
  goto(product: any){
    this.router.navigate(
      ['products/detailes', product.id] );
      console.log('sss');
    }; 

  
}

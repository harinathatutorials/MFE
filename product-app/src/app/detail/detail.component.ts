import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id: any;
selecetedProdcut: any;
  constructor(private activatedRoute: ActivatedRoute,
    private _router: Router,
    private _productService: ProductsService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      console.log(params);
      this.id = params.get('id');
      this._productService.getSingleProduct(this.id).subscribe(res => {
        console.log(res);
        this.selecetedProdcut = res;    
      });
  
    });
  }

}

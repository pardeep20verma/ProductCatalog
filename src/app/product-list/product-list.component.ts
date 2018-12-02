import { Component, OnInit } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
//import Product from '../model/product';
import { ProductService } from '../service/product.service';
import { Product } from '../model/product';
//import ProductService from '../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
productList:Array<Product>;
  constructor(private productService:ProductService) { }

  ngOnInit() {

    this.productService.getProducts().subscribe(data=>{
      this.productList=data;
    });
  }

}

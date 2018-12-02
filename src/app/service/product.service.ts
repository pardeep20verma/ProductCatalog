import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
import { Product } from '../model/product';
import { Observable } from 'rxjs';
//import  Product  from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public API = 'http://localhost:50233/api';
  public Products = `${this.API}/product`;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.Products);
  }

  getProduct(id: string):Observable<Product> {
      return this.http.get<Product>(`${this.Products}/${id}`);
  }

  remove(id: number) {
      return this.http.delete(`${this.Products}/${id.toString()}`);
  }
}

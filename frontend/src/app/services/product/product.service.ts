import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  readonly uri: string = "http://localhost:4000";

  constructor(private http: HttpClient) { }

  addProduct(product: Product) {
    return this.http.post(`${this.uri}/product/addProduct`, product);
  }

  getAllProducts(username: string) {
    const data = {
      username: username
    }
    return this.http.post(`${this.uri}/product/getAllProducts`, data);
  }

  addCategory(name: string, category: string) {
    const data = {
      name: name,
      category: category,
    }
    
    return this.http.post(`${this.uri}/product/addCategory`, data);
  }
}

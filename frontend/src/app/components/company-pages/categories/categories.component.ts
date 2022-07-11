import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  company: Company;
  categoryName: string;

  categories: Array<string> = [];
  allProducts: Array<Product>;

  message: string;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.company = JSON.parse(localStorage.getItem("logged"));
    this.categories = JSON.parse(localStorage.getItem("categories"));
    this.productService.getAllProducts(this.company.username).subscribe((allProducts: Array<Product>) => {
      this.allProducts = allProducts;
      for (let i = 0; i < this.allProducts.length; ++i) {
        if (this.allProducts[i].category) {
          if (this.categories.indexOf(this.allProducts[i].category) === -1) {
            this.categories.push(this.allProducts[i].category);
            localStorage.setItem("categories", JSON.stringify(this.categories));
          }
        }
      }
    })
  }

  openWindow(): void {
    window.open("http://localhost:4200/add-product",
      'C-Sharpcorner', 'toolbar=no,scrollbars=no,resizable=no,top=100,left=500,width=600,height=400');
  }

  addCategory(): void {
    this.categories.push(this.categoryName);
    localStorage.setItem("categories", JSON.stringify(this.categories));
  }
}

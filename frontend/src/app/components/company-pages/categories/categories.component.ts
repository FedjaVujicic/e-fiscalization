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
  allProducts: Array<Product> = [];
  allProductsCategories: Array<Array<Product>> = [];

  message: string;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.company = JSON.parse(localStorage.getItem("logged"));
    this.categories = JSON.parse(localStorage.getItem("categories"));
    if (!this.categories) {
      this.categories = [];
    }

    // Gets all the products from the database and creates an array of categories
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

      // Uses the array of categories to iterate through the products and create multiple arrays using the category as key
      for (let i = 0; i < this.categories.length; ++i) {
        this.allProductsCategories.push(this.allProducts.filter(product => product.category == this.categories[i]));
      }
    });
  }

  openAddWindow(category: string): void {
    localStorage.setItem("currentCategory", (JSON.stringify(category)));
    window.open("http://localhost:4200/add-product",
      'C-Sharpcorner', 'toolbar=no,scrollbars=no,resizable=no,top=100,left=500,width=600,height=400');
  }

  addCategory(): void {
    if (this.categoryName) {
      this.categories.push(this.categoryName);
      localStorage.setItem("categories", JSON.stringify(this.categories));
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-companies-products',
  templateUrl: './companies-products.component.html',
  styleUrls: ['./companies-products.component.css']
})
export class CompaniesProductsComponent implements OnInit {

  allProducts: Array<Product>;
  allProductsCompanies: Array<Array<Product>> = [];
  filteredProducts: Array<Array<Product>> = [];
  companyNames: Array<string> = [];
  productDetails: Product;
  details: boolean = false;
  searchParam: string;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts("").subscribe((allProducts: Array<Product>) => {
      this.allProducts = allProducts;
      for (let i = 0; i < this.allProducts.length; ++i) {
        if (this.allProducts[i].companyName) {
          if (this.companyNames.indexOf(this.allProducts[i].companyName) === -1) {
            this.companyNames.push(this.allProducts[i].companyName);
          }
        }
      }

      // Uses the array of categories to iterate through the products and create multiple arrays using the category as key
      for (let i = 0; i < this.companyNames.length; ++i) {
        this.allProductsCompanies.push(this.allProducts.filter(product => product.companyName == this.companyNames[i]));
      }
      this.filteredProducts = this.allProductsCompanies;
    });
  }

  viewDetails(product: Product) {
    this.productDetails = product;
    this.details = true;
  }

  search(): void {
    this.filteredProducts = this.allProductsCompanies.map(productArray => productArray.filter(
      product => product.name.match(new RegExp(`${this.searchParam}`, "i"))
    ));
  }

  lowestPrice(): number {
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < this.productDetails.facilities.length; ++i) {
      if (this.productDetails.facilities[i].priceSell < min && 
        this.productDetails.facilities[i].type === "shop") {
        min = this.productDetails.facilities[i].priceSell;
      }
    }
    return min;
  }

}

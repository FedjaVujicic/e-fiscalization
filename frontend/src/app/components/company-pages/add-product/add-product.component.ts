import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  company: Company;
  allProducts: Array<Product>;
  currentCategory: string;
  message: string;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.company = JSON.parse(localStorage.getItem("logged"));
    this.currentCategory = JSON.parse(localStorage.getItem("currentCategory"));

    this.productService.getAllProducts(this.company.username).subscribe((allProducts: Array<Product>) => {
      this.allProducts = allProducts;
    });
  }

  addCategory(product: Product) {
    if (!product.category) {
      this.message = "";
      this.productService.addCategory(product.name, this.currentCategory).subscribe(resp => {
        if (resp["message"] == "ok") {
          alert("uspešno!");
        } else {
          alert("neuspešno!");
        }
      });
    }
    else {
      this.message = "Taj artikal se vec nalazi u kategoriji " + product.category;
    }
  }

}

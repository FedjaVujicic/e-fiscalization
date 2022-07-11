import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {

  currentPage: number = 1;
  numPages: number = 0;
  addProductWindow: string = "";
  company: Company;

  currentProduct: Product = new Product();
  allProducts: Array<Product> = [];
  allProductsPagination: Array<Array<Product>> = [];

  addingWarehouseName: string;
  addingWarehousePriceBuy: number;
  addingWarehousePriceSell: number;
  addingWarehouseQuantity: number;
  addingShopName: string;
  addingShopPriceBuy: number;
  addingShopPriceSell: number;
  addingShopQuantity: number;

  message: string;

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.company = JSON.parse(localStorage.getItem("logged"));
    this.productService.getAllProducts().subscribe((allProducts: Array<Product>) => {
      this.allProducts = allProducts;
      this.numPages = this.allProducts.length / 10 + 1;
      for (let i = 0; i < this.numPages; ++i) {
        if (i < this.numPages - 1) {
          this.allProductsPagination.push(this.allProducts.slice(i * 10, i * 10 + 10));
        }
        else if (i === this.numPages - 1) {
          this.allProductsPagination.push(this.allProducts.slice(i * 10));
        }
      }
    });
  }

  changePage(val: number): void {
    this.currentPage += val;
  }

  viewStock(): void {

  }

  onFileChanged(fileInput: any) {
    const image = new Image();

    image.src = URL.createObjectURL(fileInput.target.files[0]);

    image.onload = (e: any) => {
      const height = e.path[0].height;
      const width = e.path[0].width;

      this.currentProduct.image = "./assets/logo/" + fileInput.target.files[0].name;
    }
  }

  selectNavItem(value: string): void {
    this.addProductWindow = value;
    if (value == "") {
      window.location.reload();
    }
  }

  addFacility(type: string): void {
    if (type === "warehouse") {
      if (!this.addingWarehouseName || !this.addingWarehousePriceBuy || !this.addingWarehousePriceSell || !this.addingWarehouseQuantity) {
        this.message = "Polja ne smeju biti prazna";
      }
      else {
        this.currentProduct.facilities.push({
          name: this.addingWarehouseName,
          type: type,
          priceBuy: this.addingWarehousePriceBuy,
          priceSell: this.addingWarehousePriceSell,
          quantity: this.addingWarehouseQuantity,
        });
      }
    }

    else if (type === "shop") {
      if (!this.addingShopName || !this.addingShopPriceBuy || !this.addingShopPriceSell || !this.addingShopQuantity) {
        this.message = "Polja ne smeju biti prazna";
      }
      else {
        this.currentProduct.facilities.push({
          name: this.addingShopName,
          type: type,
          priceBuy: this.addingShopPriceBuy,
          priceSell: this.addingShopPriceSell,
          quantity: this.addingShopQuantity,
        });
      }
    }
  }

  removeFacility(facility): void {
    const index = this.currentProduct.facilities.indexOf(facility);
    this.currentProduct.facilities.splice(index, 1);
  }

  addProduct(): void {
    if (!this.currentProduct.id || !this.currentProduct.name || !this.currentProduct.unit ||
      (this.company.category == "ugostitelj" && !this.currentProduct.type) ||
      (this.company.pdv && !this.currentProduct.tax) ||
      this.currentProduct.facilities.length == 0 ||
      !this.currentProduct.image) {
      this.message = "Unesite sve podatke";
    }
    else {
      if (!this.company.pdv) {
        this.currentProduct.tax = 0;
      }
      this.currentProduct.companyName = this.company.name;
      this.currentProduct.companyUsername = this.company.username;
      this.productService.addProduct(this.currentProduct).subscribe(resp => {
        if (resp["message"] == "ok") {
          alert("uspešno!");
          window.location.reload();
        } else {
          alert("neuspešno!");
        }
      });
    }

  }

}

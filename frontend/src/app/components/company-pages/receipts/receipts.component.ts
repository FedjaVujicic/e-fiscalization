import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { Product } from 'src/app/models/product';
import { ProductService } from "src/app/services/product/product.service"

@Component({
  selector: 'app-receipts',
  templateUrl: './receipts.component.html',
  styleUrls: ['./receipts.component.css']
})
export class ReceiptsComponent implements OnInit {

  company: Company;
  selectedType: string;
  selectedName: string;
  selectedWarehouse: string;
  selectedCashRegister: string;
  allProducts: Array<Product> = [];
  confirmedFacility = false;
  filteredProducts: Array<Product> = [];

  message: string;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.company = JSON.parse(localStorage.getItem("logged"));
    this.productService.getAllProducts(this.company.username).subscribe((allProducts: Array<Product>) => {
      this.allProducts = allProducts;
    });
  }

  confirmFacility(): void {
    if ((this.selectedType === "shop" && this.selectedCashRegister) ||
      (this.selectedType === "warehouse" && this.selectedWarehouse)) {
      this.filteredProducts =
        this.allProducts.filter(product => {
          for (let i = 0; i < product.facilities.length; ++i) {
            if (this.selectedType === "shop" && product.facilities[i].name === this.selectedCashRegister) {
              return true;
            }
            else if (this.selectedType === "warehouse" && product.facilities[i].name === this.selectedWarehouse) {
              return true;
            }
          }
          return false;
        });
      this.confirmedFacility = true;
    }
    else {
      this.message = "Izaberite lokal";
    }
  }

  backToSelect(): void {
    this.confirmedFacility = false;
  }

}

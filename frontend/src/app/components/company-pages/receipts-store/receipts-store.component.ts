import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { Facility } from 'src/app/models/facility';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-receipts-store',
  templateUrl: './receipts-store.component.html',
  styleUrls: ['./receipts-store.component.css']
})
export class ReceiptsStoreComponent implements OnInit {

  company: Company;
  allProducts: Array<Product> = [];
  confirmedFacility = false;
  filteredProducts: Array<Product> = [];
  currentFacility: Facility = new Facility();

  message: string;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.company = JSON.parse(localStorage.getItem("logged"));
    this.currentFacility.companyName = this.company.name;
    this.productService.getAllProducts(this.company.username).subscribe((allProducts: Array<Product>) => {
      this.allProducts = allProducts;
    });
  }

  confirmFacility(): void {
    if ((this.currentFacility.type && this.currentFacility.name)) {
      this.filteredProducts =
        this.allProducts.filter(product => {
          for (let i = 0; i < product.facilities.length; ++i) {
            if (product.facilities[i].name === this.currentFacility.name) {
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

  // Gets the index of the current facility in the given products facilities list  
  getIndex(product: Product): number {
    if (product.facilities) {
      return product.facilities.map(facility => facility.name).indexOf(this.currentFacility.name);
    }
    return 0;
  }

}

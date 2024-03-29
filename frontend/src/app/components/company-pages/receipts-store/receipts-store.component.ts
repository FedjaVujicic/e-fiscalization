import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { Facility } from 'src/app/models/facility';
import { Product } from 'src/app/models/product';
import { Receipt } from 'src/app/models/receipt';
import { Item } from 'src/app/models/item';
import { ProductService } from 'src/app/services/product/product.service';
import { Router } from '@angular/router';

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
  currentReceipt: Receipt = new Receipt();
  amount: Array<number> = [];

  message: string;
  messageQuantity: string;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.company = JSON.parse(localStorage.getItem("logged"));
    localStorage.removeItem("currentReceipt");
    this.currentFacility.companyName = this.company.name;
    this.productService.getAllProducts(this.company.username).subscribe((allProducts: Array<Product>) => {
      this.allProducts = allProducts;
    });

    //Receipt initialization
    this.currentReceipt.companyName = this.company.name;
    this.currentReceipt.totalPriceNoTax = 0;
    this.currentReceipt.totalPriceTax = 0;
    this.currentReceipt.date = new Date();
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
      this.currentReceipt.facility = this.currentFacility;
    }
    else {
      this.message = "Izaberite lokal";
    }
  }

  backToSelect(): void {
    this.confirmedFacility = false;
    delete this.currentReceipt;
    this.currentReceipt = new Receipt();
  }

  // Gets the index of the current facility in the given products facilities list  
  getFacilityIndex(product: Product): number {
    if (product.facilities) {
      return product.facilities.map(facility => facility.name).indexOf(this.currentFacility.name);
    }
    return -1;
  }

  getItemIndex(name: string): number {
    if (this.currentReceipt.items) {
      return this.currentReceipt.items.map(item => item.name).indexOf(name);
    }
    return -1;
  }



  addItem(product: Product, amount: number) {
    // Initialize the new item
    if (!amount || amount === 0) {
      this.messageQuantity = "Unesite željenu količinu";
      return;
    }
    let currentItem: Item = new Item();
    currentItem.name = product.name;
    currentItem.unit = product.unit;
    currentItem.tax = product.tax;
    currentItem.priceNoTax = product.facilities[this.getFacilityIndex(product)].priceSell;
    this.currentReceipt.totalPriceNoTax += currentItem.priceNoTax * amount;
    currentItem.priceTax = currentItem.priceNoTax * (100 + currentItem.tax) / 100;
    this.currentReceipt.totalPriceTax += currentItem.priceTax * amount;

    // Add the new item to the receipt
    if (!this.currentReceipt.items) {
      this.currentReceipt.items = [];
    }
    if (this.getItemIndex(currentItem.name) === -1) {
      currentItem.quantity = amount;
      this.currentReceipt.items.push(currentItem);
    }
    else {
      this.currentReceipt.items[this.getItemIndex(currentItem.name)].quantity += amount;
    }
    this.messageQuantity = "";
  }

  printDate(date: Date): string {
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); 
    var yyyy = date.getFullYear();

    return dd + '/' + mm + '/' + yyyy;
  }

  toPayment(): void {
    localStorage.setItem("currentReceipt", JSON.stringify(this.currentReceipt));
    this.router.navigate(["company/receipt-pay-store"]);
  }

}

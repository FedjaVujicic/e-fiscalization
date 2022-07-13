import { Facility } from "./facility";
import { Item } from "./item";

export class Receipt {
    items: Array<Item> = [];
    companyName: string;
    facility: Facility;
    totalPriceNoTax: number;
    totalPriceTax: number;
    paymentMethod: string;
    customerId: string;
    customerFirstname: string;
    customerLastname: string;
    numSlip: string;
    buyer: string;
    date: Date;
    departmentName: string;
    tableId: number;
}
export class Product {
    id: string;
    name: string;
    unit: string;
    tax: number;
    type: string;
    category: string;
    companyUsername: string;
    companyName: string;
    image: string;
    facilities: Array<{
        name: string;
        type: string;
        priceBuy: number;
        priceSell: number;
        quantity: number;
    }> = [];
}
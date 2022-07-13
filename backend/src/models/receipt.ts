import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Receipt = new Schema({
    items: {
        type: Array<{
            name: string;
            unit: string;
            tax: number;
            priceNoTax: number;
            priceTax: number;
            quantity: number;
        }>
    },
    companyName: {
        type: String
    },
    facility: {
        type: {}
    },
    totalPriceNoTax: {
        type: Number
    },
    totalPriceTax: {
        type: Number
    },
    paymentMethod: {
        type: String
    },
    customerId: {
        type: String
    },
    customerFirstname: {
        type: String
    },
    customerLastname: {
        type: String
    },
    numSlip: {
        type: String
    },
    buyer: {
        type: String
    },
    date: {
        type: Date
    },
    departmentName: {
        type: String
    },
    tableId: {
        type: Number
    },
});

export default mongoose.model("ReceiptModel", Receipt, "receipt");
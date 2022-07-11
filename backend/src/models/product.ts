import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Product = new Schema({
    id: {
        type: String
    },
    name: {
        type: String
    },
    unit: {
        type: String
    },
    tax: {
        type: Number
    },
    category: {
        type: String
    },
    companyUsername: {
        type: String
    },
    companyName: {
        type: String
    },
    facilities: {
        type: Array<{
            name: string;
            type: string;
            priceBuy: number;
            priceSell: number;
            quantity: number;
        }>
    }
});

export default mongoose.model("ProductModel", Product, "product");
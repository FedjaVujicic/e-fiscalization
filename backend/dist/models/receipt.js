"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Receipt = new Schema({
    items: {
        type: (Array)
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
exports.default = mongoose_1.default.model("ReceiptModel", Receipt, "receipt");
//# sourceMappingURL=receipt.js.map
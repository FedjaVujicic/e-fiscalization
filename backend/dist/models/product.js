"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
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
    image: {
        type: String
    },
    facilities: {
        type: (Array)
    }
});
exports.default = mongoose_1.default.model("ProductModel", Product, "product");
//# sourceMappingURL=product.js.map
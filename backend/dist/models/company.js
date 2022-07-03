"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Company = new Schema({
    repName: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    name: {
        type: String
    },
    address: {
        type: String
    },
    pib: {
        type: String
    },
    mb: {
        type: String
    },
    category: {
        type: String
    },
    activityCodes: {
        type: String
    },
    pdv: {
        type: String
    },
    bankAccounts: {
        type: String
    },
    warehouses: {
        type: String
    },
    cashRegisters: {
        type: String
    },
    logo: {
        type: String
    },
    buyers: {
        type: String
    },
    status: {
        type: String
    },
});
exports.default = mongoose_1.default.model("CompanyModel", Company, "company");
//# sourceMappingURL=company.js.map
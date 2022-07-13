"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReceiptController = void 0;
const receipt_1 = __importDefault(require("../models/receipt"));
class ReceiptController {
    addReceipt(req, res) {
        let receipt = new receipt_1.default({
            items: req.body.items,
            companyName: req.body.companyName,
            facility: req.body.facility,
            totalPriceNoTax: req.body.totalPriceNoTax,
            totalPriceTax: req.body.totalPriceTax,
            paymentMethod: req.body.paymentMethod,
            customerId: req.body.customerId,
            customerFirstname: req.body.customerFirstname,
            customerLastname: req.body.customerLastname,
            numSlip: req.body.numSlip,
            buyer: req.body.buyer,
            date: req.body.date,
            departmentName: req.body.departmentName,
            tableId: req.body.tableId,
        });
        receipt.save((err, resp) => {
            if (err) {
                console.log(err);
                res.status(400).json({ "message": "error" });
            }
            else {
                res.json({ "message": "ok" });
            }
        });
    }
    getAllReceipts(req, res) {
        receipt_1.default.find({}, (err, receipts) => {
            if (err) {
                console.log(err);
            }
            else {
                res.json(receipts);
            }
        });
    }
    getAllCustomer(req, res) {
        let customerId = req.body.customerId;
        receipt_1.default.find({
            "customerId": customerId
        }, (err, receipts) => {
            if (err) {
                console.log(err);
            }
            else {
                res.json(receipts);
            }
        });
    }
}
exports.ReceiptController = ReceiptController;
//# sourceMappingURL=receipt.controller.js.map
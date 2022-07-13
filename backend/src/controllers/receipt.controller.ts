import express from "express";
import ReceiptModel from "../models/receipt";

export class ReceiptController {
    addReceipt(req: express.Request, res: express.Response) {
        let receipt = new ReceiptModel({
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
            } else {
                res.json({ "message": "ok" });
            }
        });
    }

    getAllReceipts(req: express.Request, res: express.Response) {

        ReceiptModel.find({}, (err, receipts) => {
            if (err) {
                console.log(err);
            }
            else {
                res.json(receipts);
            }
        });
    }

}
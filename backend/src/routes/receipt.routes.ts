import express from "express";
import { ReceiptController } from "../controllers/receipt.controller";

const receiptRouter = express.Router();

receiptRouter.route("/addReceipt").post(
    (req, res) => new ReceiptController().addReceipt(req, res)
);

receiptRouter.route("/getAllReceipts").get(
    (req, res) => new ReceiptController().getAllReceipts(req, res)
);

receiptRouter.route("/getAllCustomer").post(
    (req, res) => new ReceiptController().getAllCustomer(req, res)
);

receiptRouter.route("/getAllCompany").post(
    (req, res) => new ReceiptController().getAllCompany(req, res)
);

export default receiptRouter;
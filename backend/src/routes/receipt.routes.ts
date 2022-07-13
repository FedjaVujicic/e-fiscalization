import express from "express";
import { ReceiptController } from "../controllers/receipt.controller";

const receiptRouter = express.Router();

receiptRouter.route("/addReceipt").post(
    (req, res) => new ReceiptController().addReceipt(req, res)
);

receiptRouter.route("/getAllReceipts").get(
    (req, res) => new ReceiptController().getAllReceipts(req, res)
);

export default receiptRouter;
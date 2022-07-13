import express from "express";
import { ReceiptController } from "../controllers/receipt.controller";

const receiptRouter = express.Router();

receiptRouter.route("/addReceipt").post(
    (req, res) => new ReceiptController().addReceipt(req, res)
);

export default receiptRouter;
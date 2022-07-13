"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const receipt_controller_1 = require("../controllers/receipt.controller");
const receiptRouter = express_1.default.Router();
receiptRouter.route("/addReceipt").post((req, res) => new receipt_controller_1.ReceiptController().addReceipt(req, res));
receiptRouter.route("/getAllReceipts").get((req, res) => new receipt_controller_1.ReceiptController().getAllReceipts(req, res));
exports.default = receiptRouter;
//# sourceMappingURL=receipt.routes.js.map
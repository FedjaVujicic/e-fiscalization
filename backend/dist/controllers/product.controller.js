"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_1 = __importDefault(require("../models/product"));
class ProductController {
    addProduct(req, res) {
        let product = new product_1.default({
            id: req.body.id,
            name: req.body.name,
            unit: req.body.unit,
            tax: req.body.tax,
            type: req.body.type,
            category: req.body.category,
            companyUsername: req.body.companyUsername,
            companyName: req.body.companyName,
            facilities: req.body.facilities,
        });
        product.save((err, resp) => {
            if (err) {
                console.log(err);
                res.status(400).json({ "message": "error" });
            }
            else {
                res.json({ "message": "ok" });
            }
        });
    }
}
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("../controllers/product.controller");
const productRouter = express_1.default.Router();
productRouter.route("/addProduct").post((req, res) => new product_controller_1.ProductController().addProduct(req, res));
productRouter.route("/getAllProducts").post((req, res) => new product_controller_1.ProductController().getAllProducts(req, res));
productRouter.route("/addCategory").post((req, res) => new product_controller_1.ProductController().addCategory(req, res));
exports.default = productRouter;
//# sourceMappingURL=product.routes.js.map
import express from "express";
import { ProductController } from "../controllers/product.controller";

const productRouter = express.Router();

productRouter.route("/addProduct").post(
    (req, res) => new ProductController().addProduct(req, res)
);

productRouter.route("/getAllProducts").post(
    (req, res) => new ProductController().getAllProducts(req, res)
);

export default productRouter;
import express from "express";
import ProductModel from "../models/product";

export class ProductController {
    addProduct(req: express.Request, res: express.Response) {
        let product = new ProductModel({
            id: req.body.id,
            name: req.body.name,
            unit: req.body.unit,
            tax: req.body.tax,
            type: req.body.type,
            category: req.body.category,
            companyUsername: req.body.companyUsername,
            companyName: req.body.companyName,
            image: req.body.image,
            facilities: req.body.facilities,
        });

        product.save((err, resp) => {
            if (err) {
                console.log(err);
                res.status(400).json({ "message": "error" });
            } else {
                res.json({ "message": "ok" });
            }
        });
    }

    getAllProducts(req: express.Request, res: express.Response) {
        let username = req.body.username;
        
        // Customer gets all products
        if (username === "") {
            ProductModel.find({}, (err, products) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json(products);
                }
            });
        }
        // Company gets its own products
        else {
            ProductModel.find({ "companyUsername": username }, (err, products) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.json(products);
                }
            });
        }
    }

    addCategory(req: express.Request, res: express.Response) {
        let name = req.body.name;
        let category = req.body.category;

        ProductModel.updateOne({ "name": name }, {
            $set: {
                "category": category
            }
        }, (err, resp) => {
            if (err) {
                console.log(err);
                res.status(400).json({ "message": "error" });
            } else {
                res.json({ "message": "ok" });
            }
        });
    }
}